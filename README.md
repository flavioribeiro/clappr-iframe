clappr-iframe
=============

Embed [Clappr](http://github.com/globocom/clappr) on a sandboxed iframe.

Add the following scripts on your HTML:
```html
<head>
  <script type="text/javascript" charset="utf-8" src="http://cdn.clappr.io/latest/clappr-iframe.min.js"> </script>
</head>
<body>
  <div id="playerId"></div>
  <script>clapprLoad("playerId", {source: "http://your.video/here.mp4"});</script>
</body>
```

All available parameters at [clappr](http://github.com/globocom/clappr) are supported on the second parameter of `clapprLoad()` call.
