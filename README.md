# ![](https://img.shields.io/badge/Cony-BlockBrace-red)ConyBlockBrace 代码块高亮显示插件


[![](https://img.shields.io/badge/Author-sdsds222-orange.svg)](https://gitee.com/wangjiabin-x/uh5)
[![](https://img.shields.io/badge/version-v1.1.5-brightgreen.svg)](https://gitee.com/wangjiabin-x/uh5)
[![license](https://img.shields.io/github/license/elemefe/vue-amap.svg?style=flat-square)](https://github.com/sdsds222/ConyBlockBrace)



[![GitHub](https://img.shields.io/badge/dynamic/json?logo=github&label=GitHub+Followers&labelColor=282c34&color=181717&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dgithub%26queryKey%3Dsdsds222&longCache=true)](https://github.com/sdsds222)
[![Coolapk](https://img.shields.io/badge/dynamic/json?logo=data%3Aimage%2Fsvg+xml%3Bbase64%2CPHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZS8+PC9kZWZzPjxwYXRoIGQ9Ik0xMjcuODkzIDQyNi42NjdjMjkuOTItNjYuOTg3IDk0LjUwNy0xMTYuNjk0IDE2Ni40LTEzMC4zNDcgNTUuNzg3LTkuNiAxMTIuOTYgNS4wNjcgMTYxLjkyIDMxLjk0N0M0OTcuNzYgMzQ5LjQ0IDUzNC40IDM3OC44OCA1NjcuOTQ3IDQxMS4wNGMtMTYuMTYgMTguNC0zOS4wOTQgMjguODUzLTU3LjQ5NCA0NC43NDctNDYuMTMzLTM4Ljg4LTk2LjY0LTc3LjcwNy0xNTcuOTczLTg3LjA5NC03OC45MzMtMTMuMTczLTE1OC41NiA0OS4yMjctMTcwLjUwNyAxMjcuMTQ3LTguNjkzIDQ1LjkyIDEwLjEzNCA5NC42NjcgNDUuMTc0IDEyNC45MDcgMzkuNjggMzQuOTg2IDk3LjIyNiA0NC41ODYgMTQ3LjYyNiAzMS4yNTMgNTcuNi0xMy45MiAxMDEuOTc0LTU3LjA2NyAxMzYuODU0LTEwMi43NzMgNTQuMDgtNzIuMTA3IDk5LjItMTUwLjQgMTQ3Ljg0LTIyNi4xMzQgMTMuOTItMTkuMTQ2IDQ3LjQxMy0xNy4yMjYgNTguNzIgMy44NCA2My42MjYgMTA5LjAxNCAxMjYuMDggMjE4LjcyIDE4OS42IDMyNy43ODcgNy41NzMgMTUuMDkzIDQuNDI2IDM1Ljc4Ny05LjYgNDYuMTMzLTEzLjA2NyAxMC42MTQtMzMuMzM0IDEwLjI0LTQ2LjEzNC0uNjkzYTk3MDY2LjU1OCA5NzA2Ni41NTggMCAwMS0yMjYuMTg2LTE2Mi43MmMxOC44OC0xNS4wNCAzOC40LTI5LjMzMyA1Ny45NzMtNDMuNDY3IDIzLjczMyAxMi45MDcgNDMuNzg3IDMzLjE3NCA2OS42IDQxLjY1NC0yMC4zNzMtMzkuNTc0LTQzLjYyNy03Ny43MDctNjYuMzQ3LTExNS45NDctNDIuNjY2IDU5LjE0Ny03Ny4wNjYgMTI0LjIxMy0xMjMuMTQ2IDE4MS4wNjdDNTE2IDY2My40NjcgNDQ4LjggNzE2Ljk2IDM2OC42NCA3MjguNDhjLTM4Ljg4IDMuNDEzLTc5LjMwNyA0LjIxMy0xMTYuMzczLTkuOTczLTUzLjQ5NC0xOS4xNDctMTAwLjMyLTU4LjcyLTEyNC41ODctMTEwLjU2LTI4LjIxMy01Ni4xMDctMjYuNzczLTEyNS4wMTQuMjEzLTE4MS4yOHoiIGZpbGw9IiNmZmYiLz48L3N2Zz4%3D&label=%E9%85%B7%E5%AE%89+Coolapk&labelColor=11ab60&suffix=+fans&color=282c34&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dcoolapk%26queryKey%3D457536&longCache=true)](https://www.coolapk.com/u/457536)
[![Bilibili](https://img.shields.io/badge/dynamic/json?logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAD7ElEQVR4nO2dW9WrMBCFK6ESkFAJSKiESqgEHCABCZWAhEpAAhL2ecik5dDc%2FpXLBDLfWnlqy0xmJ5BMQnq5CIIgCIIgCIIgCIIgCEIBAHQAemYfrgCunD6wAKAHsEKxALgx+bCQD8%2FS9tmgVqeDr1lLigDgZvDhXso+K9TyTBQRwRJ8AHjntl0Flh5QRAQK%2FmKxPeayWx2OXpBNBKiHvi34b7T2MC4pAvW6twR%2FRwkRKPizBN8CgEcuESj4Lwm+BwBjahEk+H8EwJRKhOaCDzW8e1JLfkUUH1NgmR3XmHffHR1l+72BSs8d7w8U+JDAnZERQMcV+CtUi7dNqFqibB4J7vtrq7xKCuAasbTMXCL4T+5aVk6+2xHUrWdhruAR6HIJcOeu2UHI8zyAe2ytWfEdWz9PVvQ8YAmIQ5dDAB9LFsMVAv8oMO2zAGrC5WNIarRiAuKR9jYEd9pY08aa6uUzIHGRdkgKd8pY0yc1WjEBAqypDYoAG0QAZkQAZkQAZkQAZk4vANQenjsSzS3I%2FwcSbXU5jQBUkRtdf4Rar90v8kSv3+I3ffCCSpk8I%2Fw+lgDkdI%2Fv2rEp2CaiWm1AsDQLlDAD+dlFXLMeAaCSeLZdaSFE5VUQNot38cKuEeBgAsSuG0flVZBmEanbXfNQAsS0fgBYIn2fIu3%2FBBMHEyBmDXlFfA8IzeHb+Ems4WAChKykrVA9ZfsQTL57jXzRg4A5wC%2FA8N4ADiZAZwm2XjW75Qh2KOTfA0p4kygPw28OJcCVgn3nDnYo2EwEYRgGH0qAMyICMCMCMCMCMCMCMCMCMCMCfP3qwHDOQ4AAUekTk8FaBRihJnZdYbvtCGC7LvmkM63GjVDINPFrQgCq5ETXfmMzI90FXzPvfqt7x4rEu%2FZaEcCUxFvgz2zO+BUn6UkoaEEAsptiMSX5e8FoRYCN7cVgb4Vq7U%2FH50Pq4JNP7Qiw8UFnJwcK+tXy+Wj6PLEvPgHSHv5UgwA1IQIwwyFAyLJin9RoxYgAzAQIkPwNmf26busC+OIx5TDqo5nDT+F%2FSS%2F9CYzwb+No49zNy2evkYv0LywGGAXUvp6eSneycqOic0w20k7CNgKE7jJunSGLACTCxF27ylmQc98T5MQUH49swd+I0HPXslLKnT0N+wnkrTKi9JZL%2FL9i1SorMmdeQ4TQQ7OFMxIMzGD45w8nUL1im7efENZLJpgPSw0pfz0cdt4U3230Td%2FTvx2R6d2FrHhEWLkq5PELOMsRPHCPnAZGv1xJteL7jbJiaW3sB2nDvPC%2FosSYvjRQz4cJ6n7KO3rYQL7M+L6nVtfDVRAEQRAEQRAEQRAEIZ5%2FSAXmdfXaoQsAAAAASUVORK5CYII%3D&label=bilibili+fans&labelColor=FE7398&color=282c34&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dbilibili%26queryKey%3D11354448&longCache=true)](https://space.bilibili.com/11354448)
[![Weibo](https://img.shields.io/badge/dynamic/json?logo=sina-weibo&label=%E5%BE%AE%E5%8D%9A%E5%85%B3%E6%B3%A8&labelColor=e71f19&color=040000&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dweibo%26queryKey%3D5029253925&longCache=true)](https://weibo.com/u/5029253925)
[![Telegram](https://img.shields.io/badge/dynamic/json?logo=telegram&label=%40sdsds222&labelColor=282c34&suffix=+members&color=2CA5E0&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dtelegram%26queryKey%3Dsdsds222&longCache=true)](https://t.me/sdsds222)
[![Netease Music](https://img.shields.io/badge/dynamic/json?logo=data%3Aimage%2Fsvg+xml%3Bbase64%2CPHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOTYiIGhlaWdodD0iOTYiPjxkZWZzPjxzdHlsZS8+PC9kZWZzPjxwYXRoIGQ9Ik02MjcuMDg2IDUuMTE1YzI4LjEzMi03LjY3MiA1OC44MjItNy42NzIgODYuOTUzIDAgMzMuMjQ3IDcuNjcyIDYzLjkzNyAyMy4wMTcgODkuNTEyIDQzLjQ3NyAxMC4yMyA3LjY3MyAxNy45MDIgMTUuMzQ0IDIzLjAxNyAyOC4xMzEgNy42NzIgMTcuOTAzIDUuMTE0IDM4LjM2My01LjExNSA1My43MDgtNy42NzIgMTIuNzg3LTIzLjAxNyAyMy4wMTctNDAuOTIgMjUuNTc0LTEyLjc4NyAyLjU1OC0yNS41NzQgMC0zOC4zNjItNy42NzItNS4xMTUtMi41NTgtMTAuMjMtMTAuMjMtMTcuOTAyLTEyLjc4Ny0xNy45MDItMTAuMjMtMzUuODA0LTIwLjQ2LTU2LjI2NC0xNy45MDMtMTUuMzQ1IDAtMjguMTMyIDcuNjczLTM1LjgwNCAxNy45MDMtMTAuMjMgMTAuMjMtMTIuNzg4IDIzLjAxNy0xMC4yMyAzNS44MDQgNy42NzIgMjUuNTc0IDEyLjc4NyA1My43MDYgMjAuNDYgNzkuMjgxIDUxLjE1IDIuNTU4IDk5Ljc0IDE1LjM0NSAxNDMuMjE4IDQwLjkyIDQwLjkyIDI1LjU3NSA3OS4yOCA1OC44MjEgMTA5Ljk3IDk3LjE4MyAyNS41NzUgMzMuMjQ3IDQ2LjAzNSA3MS42MSA1Ni4yNjUgMTEyLjUzIDEyLjc4NiA0My40NzYgMTcuOTAxIDg5LjUxIDEyLjc4NiAxMzIuOTg2LTIuNTU3IDM4LjM2My0xMC4yMyA3NC4xNjYtMjMuMDE2IDEwOS45NzEtMzMuMjQ3IDg0LjM5Ni05Mi4wNyAxNjEuMTItMTcxLjM1IDIwOS43MTMtNTYuMjY1IDM1LjgwMy0xMjIuNzYgNTguODIxLTE4OS4yNTMgNjYuNDkzLTQ2LjAzNCA1LjExNS05Mi4wNjkgNS4xMTUtMTM4LjEwMi0yLjU1Ny05NC42MjctMTUuMzQ1LTE4MS41OC02MS4zOC0yNTAuNjMxLTEzMC40MzEtNjYuNDk1LTY2LjQ5My0xMTIuNTMtMTUzLjQ0OC0xMzIuOTktMjQ1LjUxNi03LjY3MS02OS4wNTItNy42NzEtMTM4LjEwMyA3LjY3My0yMDcuMTU0IDE3LjkwMy04MS44NCA2MS4zOC0xNjEuMTIgMTE3LjY0NC0yMjIuNSA0OC41OTItNTEuMTUgMTA3LjQxNC04OS41MTEgMTcxLjM1LTExNy42NDMgNy42NzItMi41NTggMTIuNzg3LTUuMTE1IDIwLjQ2LTcuNjczIDE1LjM0NC0yLjU1NyAzMC42OSAwIDQzLjQ3NyAxMC4yMyAxNy45MDIgMTIuNzg4IDI1LjU3NCAzMy4yNDggMjMuMDE3IDUzLjcwNy0yLjU1NyAyMC40Ni0xNy45MDIgMzguMzYzLTM1LjgwNSA0Ni4wMzQtNjMuOTM3IDI1LjU3NS0xMjIuNzU4IDY5LjA1Mi0xNjMuNjc4IDEyMi43Ni0zOC4zNjIgNTMuNzA1LTYzLjkzNiAxMTIuNTI3LTcxLjYwOCAxNzMuOTA2LTcuNjcyIDYxLjM4IDAgMTIyLjc1OCAyMC40NiAxODEuNTggMzAuNjkgODQuMzk2IDk0LjYyNiAxNTYuMDA0IDE3My45MDcgMTk2LjkyNCA0OC41OTIgMjUuNTc1IDEwMi4yOTggMzguMzYyIDE1Ni4wMDUgMzguMzYyIDQzLjQ3NyAwIDg5LjUxMS03LjY3MiAxMzAuNDMtMjMuMDE3IDM1LjgwNS0xMi43ODcgNzEuNjEtMzMuMjQ3IDk5Ljc0MS01OC44MjIgMjguMTMzLTIzLjAxNiA1MS4xNS01My43MDYgNjYuNDk1LTg0LjM5NiA3LjY3Mi0xNS4zNDUgMTcuOTAxLTMzLjI0NyAyMC40Ni01MS4xNSAxNS4zNDQtNTEuMTQ5IDE3LjkwMS0xMDcuNDEzIDIuNTU2LTE1OC41NjEtMTIuNzg2LTQzLjQ3OC0zOC4zNjEtODEuODQtNzEuNjA5LTEwOS45NzEtMTUuMzQ0LTEyLjc4Ny0zMC42OS0yNS41NzUtNDguNTkyLTM1LjgwNS0xNS4zNDQtNy42NzItMzAuNjktMTUuMzQ1LTQ4LjU5MS0xNy45MDIgMTIuNzg4IDQ2LjAzNCAyMy4wMTggOTIuMDcgMzUuODA0IDEzNS41NDUgMi41NTggMTAuMjMgNS4xMTUgMjMuMDE4IDUuMTE1IDMzLjI0OCAyLjU1OCA0Ni4wMzMtMTUuMzQ0IDk0LjYyNS00Ni4wMzQgMTMwLjQzLTI4LjEzMiAzMy4yNDYtNjkuMDUyIDU4LjgyMS0xMTIuNTI4IDY2LjQ5NC00Ni4wMzQgMTAuMjMtOTcuMTg0IDAtMTM4LjEwMy0yNS41NzUtMzguMzYyLTI1LjU3NC02Ni40OTQtNjMuOTM2LTgxLjg0LTEwNC44NTYtNy42NzItMjMuMDE3LTEyLjc4Ny00OC41OTEtMTIuNzg3LTc0LjE2Ni0yLjU1Ni01Ni4yNjQgMTIuNzg4LTEwOS45NzEgNDMuNDc4LTE1Ni4wMDUgMzUuODA0LTUzLjcwNyA5NC42MjUtOTIuMDcgMTU4LjU2Mi0xMDkuOTcxLTUuMTE1LTE3LjkwMi0xMC4yMy0zNS44MDUtMTIuNzg3LTUzLjcwNy0xMi43ODctMzguMzYxLTEwLjIzLTgxLjgzOSA3LjY3Mi0xMTUuMDg2IDEwLjIzLTIwLjQ2IDIzLjAxOC0zOC4zNjEgNDAuOTItNTEuMTUgMjMuMDE2LTIwLjQ2IDQzLjQ3Ni0zMy4yNDYgNjYuNDk0LTQwLjkxOE00NzguNzUzIDQxOS40MjRjLTE3LjkwMyAxNy45MDItMjguMTMzIDQwLjkyLTMzLjI0NyA2My45MzYtNS4xMTQgMjAuNDYtNS4xMTQgNDMuNDc3IDAgNjYuNDk1IDUuMTE0IDIzLjAxNiAxNy45MDIgNDYuMDMzIDM4LjM2MiA2MS4zOCAxNS4zNDUgMTAuMjI4IDM1LjgwNCAxNS4zNDMgNTYuMjY0IDEwLjIyOCAzNS44MDQtNS4xMTUgNjMuOTM2LTM4LjM2MiA2My45MzYtNzQuMTY2LTIuNTU3LTcuNjcyLTIuNTU3LTE3LjkwMi01LjExNS0yNS41NzUtMTIuNzg3LTQ4LjU5Mi0yNS41NzMtOTkuNzQxLTM4LjM2MS0xNDguMzMzLTMwLjY5IDcuNjczLTU4LjgyMiAyMy4wMTgtODEuODQgNDYuMDM1eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg%3D%3D&label=%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E7%B2%89%E4%B8%9D&labelColor=e72d2c&color=282c34&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3DneteaseMusic%26queryKey%3D401834530&longCache=true)](https://music.163.com/#/user/home?id=401834530)
[![Zhihu](https://img.shields.io/badge/dynamic/json?label=%E7%9F%A5%E4%B9%8E%E5%85%B3%E6%B3%A8&labelColor=0084ff&color=282c34&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dzhihu%26queryKey%3Dsdsds222-81&longCache=true)](https://www.zhihu.com/people/sdsds222-81)
[![Instagram](https://img.shields.io/badge/dynamic/json?logo=instagram&logoColor=white&label=Instagram&labelColor=d7417b&suffix=+followers&color=282c34&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dinstagram%26queryKey%3Dsdsds222moyu&longCache=true)](https://www.instagram.com/sdsds222moyu)
[![Steam (games)](https://img.shields.io/badge/dynamic/json?logo=steam&label=Steam&labelColor=134375&suffix=+Games&color=0b1a37&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3DsteamGames%26queryKey%3D76561198239587204&longCache=true)](https://steamcommunity.com/profiles/76561198239587204/)
[![Steam (friends)](https://img.shields.io/badge/dynamic/json?logo=steam&label=Steam+Friends&labelColor=134375&color=0b1a37&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3DsteamFriends%26queryKey%3D76561198239587204&longCache=true)](https://steamcommunity.com/profiles/76561198239587204/)
[![Reddit](https://img.shields.io/badge/dynamic/json?logo=reddit&logoColor=white&label=Reddit+Karma&labelColor=FF4500&color=282c34&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dreddit%26queryKey%3Dsdsds222&longCache=true)](https://www.reddit.com/user/sdsds222)
[![Build Status](https://dev.azure.com/407042815/vue-mapvgl/_apis/build/status/vue-mapvgl-Node.js%20With%20Grunt-CI?branchName=master)]()


Cony Block Brace{}，A JJava、Javascript、Json、C、C++、C# Code Block Brace Highlighting Extension.

一个支持将Java、Javascript、Json、C、C++、C#程序语句中的大括号围起来的语句代码块高亮醒目地显示的插件，便于开发者审查阅览程序语句.

![图片](https://gitee.com/sdsds222/ConyBlockBrace/raw/main/images/conyblockbrace1.png)

VScode插件扩展商店页面：
https://marketplace.visualstudio.com/items?itemName=sdsds222.ConyBlockBrace

Repository 仓库：

Github:https://github.com/sdsds222/ConyBlockBrace/

Gitee:https://gitee.com/sdsds222/ConyBlockBrace

## Features
Cony Block Brace 本插件可以将花括号(大括号)构成的js语句块高亮显示,便于{}代码块的编辑与查看,支持Js、Ts、Json、Java、C、Cpp,从而实现可视化编程.本插件可以将花括号(大括号)构成的js语句块高亮显示,便于{}代码块的编辑与查看,支持Js、Ts、Json、Java、C、Cpp,从而实现可视化编程.

This plugin can highlight JavaScript statement blocks composed of curly braces (curly braces) for easy editing and viewing of {} code blocks. It supports Js, Ts, Json, Java, C, and Cpp to achieve visual programming.

本插件提供两种颜色渲染模式：
1：同层同级代码块同色，层与层之间异色。（默认关闭）
2：多彩模式，层与层之间异色，且同层的语句块与语句块之间异色，更便于编辑与审阅代码块。（默认开启）

This plugin provides two color rendering modes:

Same color for code blocks at the same level, with different colors between levels. (Default: Off)
Colorful mode: Different colors between levels and also between code blocks at the same level, making it easier to edit and review code blocks. (Default: On)

插件高亮颜色渲染功能默认关闭，需要在编辑器右键菜单中点击激活，也可前往配置文件配置参数默认启动,以及修改颜色。

To activate the plugin functionality by default, you can enable it in the context menu, or you can go to the configuration file to set the parameters for default startup and color customization.

快捷键：

ctrl+alt+s 开启、关闭功能；

ctrl+alt+i 临时右移颜色

ctrl+alt+k 临时左移颜色

更多功能请在配置文件中浏览和配置。


插件使用效果演示图片:


![图片](https://gitee.com/sdsds222/ConyBlockBrace/raw/main/images/icon.png)


![图片](images/Snipaste_2023-08-31_01-43-23.png)

![图片](images/Snipaste_2023-08-31_01-43-59.png)

![图片](https://raw.githubusercontent.com/sdsds222/ConyBlockBrace/main/images/Snipaste_2023-08-31_01-44-22.png)

![图片](images/Snipaste_2023-08-31_01-45-59.png)

![图片](https://gitee.com/sdsds222/ConyBlockBrace/raw/main/images/Snipaste_2023-08-31_01-46-28.png)

![图片](images/Snipaste_2023-08-31_01-48-48.png)

右键菜单：(点击Switch On/OFF BlockBrace即可启用/停用本插件的代码高亮功能。)


![图片](images/Snipaste_2023-08-31_01-54-08.png)


## Requirements

## Extension Settings

Not Any Settings.

## Known Issues

NOT.

## Release Notes

新版本发布

### 1.0.0
A New Extension. 
### 1.1.5
修改插件接收页内容


**Enjoy!**
