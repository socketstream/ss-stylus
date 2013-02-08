# Stylus (CSS) wrapper for SocketStream 0.3

Allows you to use [Stylus](http://learnboost.github.com/stylus) files (.styl) in your SocketStream project.


### Instructions

Add `ss-stylus` to your application's `package.json` file and then add this line to app.js:

    ss.client.formatters.add(require('ss-stylus'));

[Nib](http://visionmedia.github.com/nib) is included by default. To use this in your app add:

    @import 'nib'

at the top of your .styl file.

### JavaScript variable injection

The `ss-stylus` wrapper allows you to inject JavaScript variables into your Stylus code via a prepended Stylus string of your own making. For example:

	var ssStylus = require('ss-stylus');
	var assetsPath = 'https://s3.amazonaws.com/example_assets_path/';
	...
	ssStylus.prependStylus('$assetsPath = \'' + assetsPath + '\'');
	ss.client.formatters.add(ssStylus);