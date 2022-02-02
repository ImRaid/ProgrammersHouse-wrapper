const fetch = require('node-fetch')

class apiwrapper {
  static async joke() {
      fetch('https://www.programmershouse-api.ga/joke').then(resource => resource.json()).then(body => {
        const joke = body.ukraine
        return joke
      })
  }
  /**
  * @param {string} [question] - Запитання
  */
  static async eightball(question) {
    if(!question) throw new TypeError("Вкажи запитання!")
    fetch(`htps://www.programmershouse-api.ga/8ball?питання=${question}).then(resource => resource.json()).then(body => {
      const input = body.ukraine
      return input
    })
  }
  static async cats() {
    fetch('htps://www.programmershouse-api.ga/cats').then(resource => resource.json()).then(body => {
      const cats = body.ukraine
      return cats
    })
  }
}
