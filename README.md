# Webpack Files Changed Plugin

Simple plugin to display a log of the files that were changed that triggered a webpack compilation.

It has been tested with webpack@3.5.3


# Usage
In your webpack config require the plugin:

`const FileChangesPlugin = require('webpack-files-changed-plugin');`

and add it to your plugins:

```
plugins: [
    new FileChangesPlugin(),
 ]
```

On webpack compilation you will see an output similar to:
```
  New build triggered, files changed:
  /Users/owensb/repositories/my-repo/.tmp/.globalize-compiled-output/locales/en.json
```

