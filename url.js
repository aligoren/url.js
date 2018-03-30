class url {
    constructor() {
      this.__VERSION__ = "1.0";
      this.status = false;
      this.url = {
        location: window.location.href,
        address: '',
        maybeInclude: [],
        mustInclude: [],
        notInclude: []
      }
    }
    
    checkFor(url) {
      this.url.address = url;
      if(window.location.href.indexOf(this.url.address) > -1) {
        this.status = true;
      }
      
      return this;
    }
    
    maybeInclude(key) {
      let maybeStatus = false;
      if(this.status) {
        if(new RegExp(key).test(this.url.location)) {
          maybeStatus = true;
        }
      }
      
      let maybeObj = {}
      
      maybeObj[key] = maybeStatus;
      
      this.url.maybeInclude.push(maybeObj)
      
      return this;
    }
    
    mustInclude(key) {
      if(this.status) {
        if(new RegExp(key).test(this.url.location)) {
          this.url.mustInclude.push(key)
        } else {
          this.status = false;
        }
      } else {
        this.status = false;
      }
      
      return this;
    }
    
    notInclude(key) {
      if(this.status) {
        if(new RegExp(key).test(this.url.location)) {
          this.status = false;
        } else {
          this.url.notInclude.push(key)
          this.status = true;
        }
      }
      
      return this;
    }
  }