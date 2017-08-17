var gulp = require('gulp');
var winInstaller = require('electron-windows-installer');
 
gulp.task('create-windows-installer', function(done) {
  winInstaller({
    appDirectory: './dist/WH_INTELLIGENT_BREEDING_MANAGER_SOFT-win32-ia32',
    outputDirectory: './release',
    arch: 'ia32'
  }).then(done).catch(done);
});