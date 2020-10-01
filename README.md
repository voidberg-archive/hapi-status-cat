[![No Maintenance Intended](http://unmaintained.tech/badge.svg)](http://unmaintained.tech/)

hapi-status-cat
================

This Hapi plugin adds X-Status-Cat header to all your responses which contains the "HTTP Status Cat" of the current status code.

#### Contributors

This is based off the [http-status-cat](https://www.npmjs.com/package/http-status-cats) Express middleware. Photos were collected by Tomomi Imura (GirlieMac) and are available here: https://www.flickr.com/photos/girliemac/sets/72157628409467125


#### Example

```
server.register(require('hapi-status-cat'), function (err) {
  if (err) {
    console.error('Failed to load plugin:', err);
  }
  else {
    server.start(function () {
      console.log('Server running at:', server.info.uri);
    });
  }
});
```

```
$ curl -I localhost:3000/
HTTP/1.1 200 OK
X-Status-Cat: http://flic.kr/p/aVuVsF
content-type: text/html; charset=utf-8
cache-control: no-cache
Date: Fri, 12 Dec 2014 20:53:05 GMT
Connection: keep-alive
```

```
curl -I localhost:3000/nonexisting
HTTP/1.1 200 OK
X-Status-Cat: http://flic.kr/p/aVuVsF
content-type: text/html; charset=utf-8
cache-control: no-cache
Date: Fri, 12 Dec 2014 20:50:21 GMT
Connection: keep-alive
```

##### Just the cats

This can also be used just like http.STATUS_CODES:

var cats = require('hapi-status-cat').cats;

console.log(cats[403]);

####License

MIT
