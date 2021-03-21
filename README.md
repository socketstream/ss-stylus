# Stylus (CSS) wrapper for SocketStream 0.3

Allows you to use [Stylus](http://learnboost.github.com/stylus) files (.styl) in your SocketStream project.


### Instructions

Add `ss-stylus` to your application's `package.json` file and then add this line to app.js:

    ss.client.formatters.add(require('ss-stylus'));

No plugins are included by default. If you want to use something just provide it with second parameter to ```ss.client.formatters.add``` function:

    ss.client.formatters.add(require('ss-stylus'), {extra: {nib: require('nib')}});

After that you can use this in your app. Just add:

    @import 'nib'

at the top of your .styl file.


### JavaScript variable injection

The `ss-stylus` wrapper allows you use JavaScript variables within your Stylus code.

This can be useful if you need to serve assets from a CDN in production. For example:

```js
var ssStylus = require('ss-stylus');
var assetsPath = 'https://s3.amazonaws.com/example_assets_path/';

ssStylus.prependStylus('$assetsPath = \'' + assetsPath + '\'');
ss.client.formatters.add(ssStylus);
```

### Including CSS imports

To include CSS imports, pass these options to loading the ss-stylus library:

    ss.client.formatters.add(require('ss-stylus'), { 'include css' : true });


