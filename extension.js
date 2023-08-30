const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */

var updateDecorationsFunction;
let highlightingEnabled = false; // 默认关闭高亮

function toggleHighlighting() {
  console.log("ConyBlockBrace启用状态:" + highlightingEnabled);
  highlightingEnabled = !highlightingEnabled;
  if (highlightingEnabled) {
    updateDecorationsFunction();
    vscode.window.showInformationMessage('ConyBlockBrace正在运行 Runing');
  } else {
    vscode.window.showInformationMessage('ConyBlockBrace停止运行,请关闭文件再打开 Stop');
  }
}


function activate(context) {
  console.log('ConyBlockBrace正在运行');
  // 注册 ToggleHighlighting 命令
  context.subscriptions.push(
    vscode.commands.registerCommand('ConyBlockBrace.ConyToggleHighlighting', toggleHighlighting)
  );


  const settingsCommand = vscode.commands.registerCommand('ConyBlockBrace.ConySettings', () => {
    // 打开配置文件
    vscode.commands.executeCommand('workbench.action.openSettings', 'ConyBlockBrace');
    vscode.window.showInformationMessage('打开设置 Open settings...');
  });

  const aboutCommand = vscode.commands.registerCommand('ConyBlockBrace.ConyAbout', () => {
    vscode.window.showInformationMessage('关于此扩展插件 About:Cony Block Brace,Conny工作室 sdsds222作品');
  });

  context.subscriptions.push(settingsCommand);
  context.subscriptions.push(aboutCommand);


  // const blockColors = [
  //   'rgba(255, 0, 0, 0.3)',   // 红色
  //   'rgba(0, 255, 0, 0.3)',   // 绿色
  //   'rgba(0, 0, 255, 0.3)',    // 蓝色
  //   'rgba(154, 152, 152, 0.3)'
  //   // 在这里添加更多颜色，以便区分不同层次的代码块
  // ];


  // 获取用户配置项
  const config = vscode.workspace.getConfiguration('ConyBlockBrace');

  //获取用户配置的自启动选项
  highlightingEnabled = config.get('enabled', false); // 默认为 false

  // 获取用户配置的颜色值和是否开启功能的选项
  const blockColors = config.get('blockColors', []);
  const blockDecorators = blockColors.map(color => vscode.window.createTextEditorDecorationType({
    backgroundColor: color
  }));

  let activeEditor = vscode.window.activeTextEditor;

  function updateDecorations() {
    if (!highlightingEnabled || !activeEditor) {
      return;
    }

    const text = activeEditor.document.getText();
    const blockRegex = /{|}/g; // 匹配左大括号和右大括号

    const decorations = [];

    const stack = []; // 用于跟踪代码块的堆栈
    const blockStartLines = {}; // 用于存储每个左大括号所在的行数
    let level = 0; // 代码块层次

    let match;
    while ((match = blockRegex.exec(text))) {

      if (match[0] === '{') {
        stack.push({ type: 'start', index: match.index });
        blockStartLines[match.index] = activeEditor.document.positionAt(match.index).line;
      } else {
        const startMatchInfo = stack.pop();
        const endMatchIndex = match.index;
        const startLine = blockStartLines[startMatchInfo.index];
        const endLine = activeEditor.document.positionAt(endMatchIndex).line;

        const startLineStartPosition = new vscode.Position(startLine, 0);
        const endLineStartPosition = new vscode.Position(endLine, 0);

        const startCharacter = activeEditor.document.lineAt(startLine).firstNonWhitespaceCharacterIndex;
        const endCharacter = activeEditor.document.lineAt(endLine).text.length;

        const startRange = new vscode.Range(startLineStartPosition.translate(0, startCharacter), startLineStartPosition.translate(0, activeEditor.document.lineAt(startLine).text.length));
        const endRange = new vscode.Range(endLineStartPosition.translate(0, startCharacter), endLineStartPosition.translate(0, endCharacter));

        decorations.push({ range: startRange, hoverMessage: 'Code Block Start', level: level });
        decorations.push({ range: endRange, hoverMessage: 'Code Block End', level: level });

        // 添加每行第一个字符的底色
        for (let i = startLine + 1; i <= endLine; i++) {
          const lineStartPosition = new vscode.Position(i, 0);
          //const lineFirstCharacter = activeEditor.document.lineAt(i).firstNonWhitespaceCharacterIndex;
          const lineRange = new vscode.Range(lineStartPosition.translate(0, startCharacter), lineStartPosition.translate(0, startCharacter + 1));
          decorations.push({ range: lineRange, hoverMessage: 'Line Start', level: level });
        }

        level = (level + 1) % blockColors.length; // 切换颜色
      }
    }
    blockDecorators.forEach((decorator, index) => {
      activeEditor.setDecorations(decorator, decorations.filter(decoration => decoration.level === index).map(decoration => decoration.range));
    });
  }

  updateDecorationsFunction = updateDecorations;


  if (highlightingEnabled) {
    updateDecorationsFunction();
  }


  if (activeEditor) {
    updateDecorations();
  }


  vscode.window.onDidChangeActiveTextEditor(editor => {
    activeEditor = editor;
    if (editor) {
      updateDecorations();
    }
  });

  vscode.workspace.onDidChangeTextDocument(event => {
    if (activeEditor && event.document === activeEditor.document) {
      updateDecorations();
    }
  });

  blockDecorators.forEach((decorator, index) => {
    context.subscriptions.push(decorator);
  });
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
  activate,
  deactivate
}
