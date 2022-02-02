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
    if(!question) throw new TypeError("Вкажи запитання!");
    fetch(`htps://www.programmershouse-api.ga/8ball?питання=${question}`).then(resource => resource.json()).then(body => {
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
  /**
  * @param {string} [avatar_url] - Аватар користувача
  */
  static async ukraine(avatar_url) {
    if(!avatar_url) throw new TypeError("Вкажи посилання на аватар!");
    fetch(`https://www.programmershouse-api.ga/ukraine?avatar=${avatar_url}`).then(resource => resource.json()).then(body => {
            const input = body.ukraine
            return input
          })
  }
  /**
  * @param {string} [title] - Заголовок посту.
  * @param {string} [description] - Опис посту.
  */
  static async reddit(title, description) {
    if(!title) throw new TypeError("Вкажи заголовок посту!");
    if(!description) throw new TypeError("Вкажи опис посту!");
    const input = `https://www.programmershouse-api.ga/reddit?title=${title}&description=${description}`
    return input
  }
}
exports["wrapper"]= apiwrapper;
