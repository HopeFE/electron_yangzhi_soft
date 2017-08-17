const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu
const MenuItem = electron.MenuItem
const shell = electron.shell

// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

let template = [
  {
    label: '编辑',
    submenu: [
      {
        label: '退出登陆',
        accelerator: 'CmdOrCtrl+R',
        click: function (item, focusedWindow) {
          mainWindow.loadURL('http://zhutest.qmant.com/#/login')
        }
      }
    ]
  },
  {
    label: '帮助',
    click: function (item, focusedWindow) {
      shell.openExternal('https://yangzhi.qmant.com/help/')
    }
  }
]

function createWindow () {
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  mainWindow = new BrowserWindow({width: 1280, height: 800})
  mainWindow.loadURL('http://zhutest.qmant.com/#/login')
  // mainWindow.webContents.openDevTools()
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
