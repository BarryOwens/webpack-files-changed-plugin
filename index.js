
function trackFileChangesPlugin() {}
  
trackFileChangesPlugin.prototype.apply = function(compiler) {
  compiler.plugin('compilation', function() {
    const changedTimes = compiler.watchFileSystem.watcher.mtimes;
    const changedFiles = Object.keys(changedTimes)
      .map(file => `\n  ${file}`)
      .join('');
    if (changedFiles.length) {
      console.log('New build triggered, files changed:', changedFiles);
    }
  });
};
  
module.exports = trackFileChangesPlugin;