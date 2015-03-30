# simple-gdata

Simple Google Data API client for OAuth 2.0 without things about getting and refreshing a token.

    npm install simple-gdata

## Usage

```javascript
var gdata = require('simple-gdata');

client = gdata('your oauth access token');

// for example with the picasa album feed
client.getFeed("https://picasaweb.google.com/data/feed/api/user/default", function(err, body){
  console.err(err);
  console.log(body);
});
```

