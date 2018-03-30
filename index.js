const urlCheck = new url()
                .checkFor('url.js')
                .maybeInclude('queryString')
                .maybeInclude('otherQueryString')
                .mustInclude('js')
                .notInclude('iDontWant')

console.log(urlCheck);