const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')
const rimraf = require('rimraf')

deleteOutputFolder()
  .then(getInstallerConfig)
  .then(createWindowsInstaller)
  .catch((error) => {
    console.error(error.message || error)
    process.exit(1)
  })

function getInstallerConfig () {
  const rootPath = path.join(__dirname, '..')
  const outPath = path.join(rootPath, 'WH_INTELLIGENT_BREEDING_MANAGER_SOFT/dist/WH_INTELLIGENT_BREEDING_MANAGER_SOFT-win32-ia32')

  return Promise.resolve({
    appDirectory: path.join(outPath, './'),
    iconUrl: 'app.ico',
    loadingGif: path.join(rootPath, 'loading.gif'),
    noMsi: true,
    outputDirectory: path.join(outPath, 'windows-installer'),
    setupExe: 'yangzhi.exe',
    setupIcon: path.join(rootPath, 'app.ico'),
    skipUpdateIcon: true
  })
}

function deleteOutputFolder () {
  return new Promise((resolve, reject) => {
    rimraf(path.join(__dirname, '..', 'out', 'windows-installer'), (error) => {
      error ? reject(error) : resolve()
    })
  })
}