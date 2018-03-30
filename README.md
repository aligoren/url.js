# url.js

An URL checker that your complex URL addresses

# Usage

Add `url.js` to your project. After that, you must set URL which you use. For example:

**http://www.example.com/url.js/**

```javascript
new url().checkFor('url.js')
```

checkFor method will return an object. This object will be like this:

```json
{
    status: true,
    url: {
        address: "url.js",
        location: "http://www.example.com/url.js/",
        maybeInclude: [],
        mustInclude: [],
        notInclude: []
    },
    __VERSION__: "1.0"
}
```

## Other Methods

**maybeInclude**

This method is optional. The parameter is not required for current url. Even if there is not a result this method return will true.

```javascript
.maybeInclude('queryString')
```

**mustInclude**

This method is optional. The parameter is required for current url. If there is no result this method return will false.

```javascript
.mustInclude('js')
```

**notInclude**

This method is optional. The URL shouldn't contain the parameter that you passed. If there is no result this method return will true.

```javascript
.notInclude('iDontWant')
```

# Full Usage Example

```javascript
const urlCheck = new url()
                .checkFor('url.js')
                .maybeInclude('queryString')
                .maybeInclude('otherQueryString')
                .mustInclude('js')
                .notInclude('iDontWant')

console.log(urlCheck.status);
```