# Stylus wrapper for SocketStream 0.3

Allows you to support Stylus files (.styl) in your SocketStream project.


### Instructions

Add `ss-stylus` to your application's `package.json` file and then add this line to app.js:

    ss.client.formatters.add(require('ss-stylus'));