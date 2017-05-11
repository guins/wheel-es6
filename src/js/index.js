import domready from 'domready'

class App {
  constructor() {
    this.init()
  }
  init() {
    console.log('[APP] init')
  }
}

domready(() => {
  new App()
})