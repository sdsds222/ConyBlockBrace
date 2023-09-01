const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */

var updateDecorationsFunction;


var highlightingEnabled = false; // 默认关闭高亮

var theNum = 6;

var colorMode = false;

function toggleHighlighting() {
  highlightingEnabled = !highlightingEnabled;
  console.log("ConyBlockBrace启用状态:" + highlightingEnabled);
  if (highlightingEnabled) {
    updateDecorationsFunction();
    vscode.window.showInformationMessage('ConyBlockBrace正在运行 Runing');
  } else {
    vscode.window.showInformationMessage('ConyBlockBrace停止运行,请关闭文件再打开 Stop');
  }
}




function activate(context) {
  console.log('ConyBlockBrace正在运行\n' +
    ' ██████╗ █████╗ ██╗   █╗██╗   ██╗\n' +
    '██╔════╝██╔══██╗███╗  █║╚██╗ ██╔╝\n' +
    '██║     ██║  ██║█╔██╗ █║ ╚████╔╝ \n' +
    '██║     ██║  ██║█║╚██╗█║  ╚██╔╝  \n' +
    '╚██████╗╚█████╔╝█║ ╚███║   ██║   \n\n' +

    '██████╗ ██╗      ██████╗  ██████╗██╗  ██╗ ██████╗ ██████╗  █████╗  ██████╗███████╗\n' +
    '██╔══██╗██║     ██╔═══██╗██╔════╝██║ ██╔╝ ██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔════╝\n' +
    '██████╔╝██║     ██║   ██║██║     █████╔   ██████╔╝██████╔╝███████║██║     █████╗  \n' +
    '██╔══██╗██║     ██║   ██║██║     ██╔═██╗  ██╔══██╗██╔══██╗██╔══██║██║     ██╔══╝ \n' +
    '██████╔╝███████╗╚██████╔╝╚██████╗██║  ██╗ ██████╔╝██║  ██║██║  ██║╚██████╗███████╗\n' +
    'Cony Studio by sdsds222');

  // 注册 ToggleHighlighting 命令
  context.subscriptions.push(
    vscode.commands.registerCommand('ConyBlockBrace.ConyToggleHighlighting', toggleHighlighting)
  );
  // 获取用户配置项
  const config = vscode.workspace.getConfiguration('ConyBlockBrace');

  //获取用户配置的自启动选项
  highlightingEnabled = config.get('enabled', false); // 默认为 false

  //获取用户配置的自启动选项
  colorMode = config.get('ColorModeEnabled', false); // 默认为 false

  // 获取用户配置的颜色值和是否开启功能的选项
  const blockColors = config.get('blockColors', []);
  const blockDecorators = blockColors.map(color => vscode.window.createTextEditorDecorationType({
    backgroundColor: color
  }));
  // 注册增加数字的命令
  const increaseNumCommand = vscode.commands.registerCommand('ConyBlockBrace.increaseNum', () => {
    theNum++;
    if (theNum < 6) {
      theNum = 6;
    }

    updateDecorationsFunction();
    vscode.window.showInformationMessage(`右移代码块颜色，位置:${theNum}`);
  });

  // 注册减少数字的命令
  const decreaseNumCommand = vscode.commands.registerCommand('ConyBlockBrace.decreaseNum', () => {
    theNum--;
    if (theNum < 6) {
      theNum = 6;
    }
    updateDecorationsFunction();
    vscode.window.showInformationMessage(`theNum decreased to ${theNum}`);
  });

  // 注册命令到上下文中
  context.subscriptions.push(increaseNumCommand);
  context.subscriptions.push(decreaseNumCommand);



  // 注册快捷键
  vscode.commands.registerCommand('ConyBlockBrace.registerKeybindings', () => {
    // 增加数字的快捷键
    vscode.commands.registerCommand('ConyBlockBrace.increaseNum', () => {
      theNum++;
      if (theNum < 6) {
        theNum = 6;
      }
      updateDecorationsFunction();
      vscode.window.showInformationMessage(`左移代码块颜色，位置:${theNum}`);
    });
    vscode.workspace.getConfiguration().update(
      'keybindings', [
      {
        "key": "ctrl+alt+i",
        "command": "ConyBlockBrace.increaseNum",
        "when": "editorTextFocus"
      }
    ],
      vscode.ConfigurationTarget.Global
    );

    // 减少数字的快捷键
    vscode.commands.registerCommand('ConyBlockBrace.decreaseNum', () => {
      theNum--;
      if (theNum < 6) {
        theNum = 6;
      }
      updateDecorationsFunction();
      vscode.window.showInformationMessage(`theNum decreased to ${theNum}`);
    });
    vscode.workspace.getConfiguration().update(
      'keybindings', [
      {
        "key": "ctrl+alt+k",
        "command": "ConyBlockBrace.decreaseNum",
        "when": "editorTextFocus"
      }
    ],
      vscode.ConfigurationTarget.Global
    );
    vscode.commands.registerCommand('ConyBlockBrace.ConyToggleHighlighting', () => {

    });
    vscode.workspace.getConfiguration().update(
      'keybindings', [
      {
        "key": "ctrl+alt+s",
        "command": "ConyBlockBrace.ConyToggleHighlighting1",
        "when": "editorTextFocus"
      }
    ],
      vscode.ConfigurationTarget.Global
    );

  });






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




  let activeEditor = vscode.window.activeTextEditor;

  function updateDecorations() {
    if (!highlightingEnabled || !activeEditor) {
      return;
    }

    let dcrts = [];
    let dcrt1 = [];


    const text = activeEditor.document.getText();
    const blockRegex = /{|}/g; // 匹配左大括号和右大括号

    const decorations = [];

    const stack = []; // 用于跟踪代码块的堆栈
    const blockStartLines = {}; // 用于存储每个左大括号所在的行数


    let level = 0; // 代码块层次

    let blockLevel = 0;

    let match;
    while ((match = blockRegex.exec(text))) {



      if (match[0] === '{' && '}') {
        stack.push({ type: 'start', index: match.index });
        blockStartLines[match.index] = activeEditor.document.positionAt(match.index).line;


        blockLevel++;


      } else {

        level++;

        const startMatchInfo = stack.pop();
        const endMatchIndex = match.index;
        const startLine = blockStartLines[startMatchInfo.index];
        const endLine = activeEditor.document.positionAt(endMatchIndex).line;

        const startLineStartPosition = new vscode.Position(startLine, 0);
        const endLineStartPosition = new vscode.Position(endLine, 0);

        const startCharacter = activeEditor.document.lineAt(startLine).firstNonWhitespaceCharacterIndex;
        const endCharacter = activeEditor.document.lineAt(endLine).text.length;

        const startRange = new vscode.Range(startLineStartPosition.translate(0, startCharacter), startLineStartPosition.translate(0, activeEditor.document.lineAt(startLine).text.length));

        const endLineText = activeEditor.document.lineAt(endLine).text;
        let endRange;
        if (endLineText.includes('{') && '}') {
          endRange = new vscode.Range(endLineStartPosition.translate(0, startCharacter), endLineStartPosition.translate(0, startCharacter));
        } else {
          endRange = new vscode.Range(endLineStartPosition.translate(0, startCharacter), endLineStartPosition.translate(0, endCharacter));
        }



        if (startLine != endLine) {

          decorations.push({ range: startRange, hoverMessage: 'Code Block Start', level: level, level1: 0, blockLevel: blockLevel, closed: false, blockLevelId: 0 });
          decorations.push({ range: endRange, hoverMessage: 'Code Block End', level: level, level1: 0, blockLevel: blockLevel, closed: false, blockLevelId: 0 });
        }
        // 添加每行第一个字符的底色
        for (let i = startLine + 1; i < endLine; i++) {
          const lineStartPosition = new vscode.Position(i, 0);
          //const lineFirstCharacter = activeEditor.document.lineAt(i).firstNonWhitespaceCharacterIndex;
          const lineRange = new vscode.Range(lineStartPosition.translate(0, startCharacter), lineStartPosition.translate(0, startCharacter + 1));
          decorations.push({ range: lineRange, hoverMessage: 'Line Start', level: level, level1: 0, blockLevel: blockLevel, closed: false, blockLevelId: 0 });
        }

        for (let i = 0; i < decorations.length; i++) {
          if (decorations[i].blockLevel == blockLevel + 1 && decorations[i].closed == false) {
            decorations[i].blockLevelId = level;
            decorations[i].closed = true;
          }
        }





        blockLevel--;
      }
    }


    let maxLevel = 1;
    let maxBlockLevel = 1;
    for (let i = 0; i < decorations.length; i++) {
      if (decorations[i].level > maxLevel) {
        maxLevel = decorations[i].level;
      }
      if (decorations[i].blockLevel > maxBlockLevel) {
        maxBlockLevel = decorations[i].blockLevel;
      }
    }


    for (let i = 1; i <= maxLevel; i++) {
      for (let j = 0; j < decorations.length; j++) {
        decorations[j].level1 = maxLevel + 1 - decorations[j].level;
      }
    }

    for (let k = 1; k <= maxBlockLevel; k++) {
      for (let i = 0; i < decorations.length; i++) {
        if (decorations[i].hoverMessage == "Code Block End" && decorations[i].blockLevel == k) {
          let blockLevel1 = decorations[i].blockLevel;
          let level1 = decorations[i].level;
          let blockLevelId1 = decorations[i].blockLevelId;
          let row = blockLevel1 - 1;
          let color = 0;
          if (!dcrts[row]) {
            dcrts[row] = [];
            color = row % blockColors.length;
            dcrts[row].push({ level: level1, blockLevelId: blockLevelId1, color: color });
          } else {
            if (colorMode == true) {
              color = row % blockColors.length;
            } else {
              const lastElement = dcrts[row][dcrts[row].length - 1];
              if (lastElement.blockLevelId != blockLevelId1) {
                color = row % blockColors.length;
                if (row != 0) {
                  let dcrt2 = [].concat(...dcrts);
                  for (let l = 0; l < dcrt2.length; l++) {
                    if (dcrt2[l].level == blockLevelId1) {
                      if (dcrt2[l].color == color) {
                        color = (row + 1) % blockColors.length;
                      }
                      break;
                    }
                  }
                }
              } else {
                color = (lastElement.color + 1) % blockColors.length;
                if (row != 0) {
                  let dcrt2 = [].concat(...dcrts);
                  for (let l = 0; l < dcrt2.length; l++) {
                    if (dcrt2[l].level == blockLevelId1) {
                      if (dcrt2[l].color == color) {
                        color = (color + 1) % blockColors.length;
                      }
                      break;
                    }
                  }
                }
              }
            }
            dcrts[row].push({ level: level1, blockLevelId: blockLevelId1, color: color });
          }
        }

      }
    }

    console.log(decorations);
    dcrt1 = [].concat(...dcrts);



    blockDecorators.forEach((decorator, index) => {
      let num = (theNum - index) % blockColors.length;

      const colorValue = num; // 要匹配的 color 值
      const matchedRanges = [];
      for (const dcrt of dcrt1) {
        if (dcrt.color === colorValue) {
          for (const decoration of decorations) {
            if (decoration.level === dcrt.level) {
              matchedRanges.push(decoration.range);
            }
          }
        }
      }

      activeEditor.setDecorations(decorator, matchedRanges);
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

  blockDecorators.forEach((decorator) => {
    context.subscriptions.push(decorator);
  });
}

// This method is called when your extension is deactivated
function deactivate() { }

module.exports = {
  activate,
  deactivate
}
