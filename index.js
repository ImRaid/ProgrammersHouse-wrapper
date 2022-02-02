const fetch = require('node-fetch')

class apiwrapper {
  static async joke() {  
  return fetch('https://www.programmershouse-api.ga/joke').then(resource => resource.json()).then(body => body.ukraine)
}
     
  
  /**
  * @param {string} [question] - Запитання
  */
   static async eightball(question) {
    if(!question) {
      throw new TypeError("Вкажи запитання!")
    }

    return fetch(`https://www.programmershouse-api.ga/8ball?question=${question}`).then(resource => resource.json()).then(body => body.ukraine)
  }
  static async cats(){
    return fetch('https://www.programmershouse-api.ga/cats').then(resource => resource.json()).then(body => body.ukraine)
      
    
  }
  /**
  * @param {string} [avatar_url] - Аватар користувача
  */
  static async ukraine(avatar_url) {
    if(!avatar_url) throw new TypeError("Вкажи посилання на аватар!");
    let output =`https://www.programmershouse-api.ga/ukraine?avatar=${avatar_url}`
    return output
  }
  /**
  * @param {string} [title] - Заголовок посту.
  * @param {string} [description] - Опис посту.
  */
  static async reddit(title, description) {
    if(!title) {throw new TypeError("Вкажи заголовок посту!");}
    if(!description) {throw new TypeError("Вкажи опис посту!");}
    let output =`https://www.programmershouse-api.ga/reddit?title=${title}&description=${description}`
    return output
  }
  /**
  * @param {string} [avatar_url] - Аватар користувача
  */
  static async wanted(avatar_url){
     if(!avatar_url) throw new TypeError("Вкажи посилання на аватар!");
     let output = `https://www.programmershouse-api.ga/wanted?avatar=${avatar_url}`
    return output
  }
   /**
  * @param {string} [avatar_url] - Аватар користувача
  */
  static async wasted(avatar_url){
     if(!avatar_url) throw new TypeError("Вкажи посилання на аватар!");
      let output = `https://www.programmershouse-api.ga/wasted?avatar=${avatar_url}`
       return output
  }
  static async ukrmemes(){
    return fetch(`https://www.programmershouse-api.ga/ukrmemes`).then(resource => resource.json()).then(body => body.ukraine)
  }
   /**
  * @param {string} [text] - текст
  */
  static async reversetext(text){
     if(!text) throw new TypeError("Вкажи текст!");
    return fetch(`https://www.programmershouse-api.ga/reversetext?text=${text}`).then(resource => resource.json()).then(body => body.ukraine)
  }
   /**
  * @param {string} [text] - текст
  */
  static async emojify(text){
     if(!text) throw new TypeError("Вкажи текст!");
    return fetch(`https://www.programmershouse-api.ga/emojify?text=${text}`).then(resource => resource.json()).then(body => body.ukraine)
  }
   static async shotoniphone(){
    return fetch(`https://www.programmershouse-api.ga/shotoniphone`).then(resource => resource.json()).then(body => body.ukraine)
  }
  /**
  * @param {string} [number] - текст
  */
   static async numberfact(number){
      if(!number) throw new TypeError("Вкажи число!");
    return fetch(`https://www.programmershouse-api.ga/numberfact?number=${number}`).then(resource => resource.json()).then(body => body.ukraine)
  }
  static async yearsfact(){
    return fetch(`https://www.programmershouse-api.ga/yearsfact`).then(resource => resource.json()).then(body => body.ukraine)
  }
  /**
  * @param {string} [text] - текст
  */
   static async qrcode(text){
    if(!text) throw new TypeError("Вкажи текст!");
    return fetch(`https://www.programmershouse-api.ga/qrcode?text=${text}`).then(resource => resource.json()).then(body => body.ukraine)
  }
  /**
  * @param {string} [text1] - текст
  * @param {string} [text2] - текст
  */
  static async qrcode(text1,tex2){
     if(!text1) throw new TypeError("Вкажи текст 1!");
     if(!text2) throw new TypeError("Вкажи текст 2!");
    return fetch(`https://www.programmershouse-api.ga/randomtext?text1=${tex1}&text2=${tex2}`).then(resource => resource.json()).then(body => body.ukraine)
  }

  static async currentday(){
    return fetch(`https://www.programmershouse-api.ga/currentday`).then(resource => resource.json()).then(body => body.ukraine)
  }
  /**
  * @param {string} [ip] - ip
  */
  static async minecraftserver(ip){
    if(!ip) throw new TypeError("Вкажи ip серверу!");
    return fetch(`https://www.programmershouse-api.ga/minecraftserver?ip=${ip}`).then(resource => resource.json()).then(body => body.ukraine)
  }
  /**
  * @param {string} [code] - інвайт код 
  */
  static async aboutinvite(code){
     if(!code) throw new TypeError("Вкажи код запрошення!");
    return fetch(`https://www.programmershouse-api.ga/aboutinvite?code=${code}`).then(resource => resource.json()).then(body => body)
  }
  static async mars(){
    return fetch(`https://www.programmershouse-api.ga/mars`).then(resource => resource.json()).then(body => body.ukraine)
  }
    /**
  * @param {string} [username] - нік нейм 
  */
   static async geometrydash(username){
    if(!username) throw new TypeError("Вкажи нік нейм!");
    return fetch(`https://www.programmershouse-api.ga/geometrydash?username=${username}`).then(resource => resource.json()).then(body => body)
   }
  static async cosmosfacts(){
    return fetch(`https://www.programmershouse-api.ga/cosmosfacts`).then(resource => resource.json()).then(body => body.ukraine)
  }
   /** * @param {string} [redditname] - назва сабредіту 
   
  */
   static async subreddit(redditname){
    if(!redditname) throw new TypeError("Вкажи назву саб редіту !");
    if(!redditname.startsWith("r/"))throw new TypeError("Назва сабреддіту має починатися з r/");
    return fetch(`https://www.programmershouse-api.ga/subreddit?name=${reditname}`).then(resource => resource.json()).then(body => body)
  }
  //da
   static async randomanime(){
    return fetch(`https://www.programmershouse-api.ga/randomanime`).then(resource => resource.json()).then(body => body.ukraine)
  }
   static async hug(){
    return fetch(`https://www.programmershouse-api.ga/hug`).then(resource => resource.json()).then(body => body.ukraine)
  }
   static async cry(){
    return fetch(`https://www.programmershouse-api.ga/cry`).then(resource => resource.json()).then(body => body.ukraine)
  }
  static async dance(){
    return fetch(`https://www.programmershouse-api.ga/dance`).then(resource => resource.json()).then(body => body.ukraine)
  }
  static async laugh(){
    return fetch(`https://www.programmershouse-api.ga/laugh`).then(resource => resource.json()).then(body => body.ukraine)
  }
  static async kiss(){
    return fetch(`https://www.programmershouse-api.ga/kiss`).then(resource => resource.json()).then(body => body.ukraine)
  }
  static async pat(){
    return fetch(`https://www.programmershouse-api.ga/pat`).then(resource => resource.json()).then(body => body.ukraine)
  }
   static async wink(){
    return fetch(`https://www.programmershouse-api.ga/wink`).then(resource => resource.json()).then(body => body.ukraine)
  }
   static async punch(){
    return fetch(`https://www.programmershouse-api.ga/punch`).then(resource => resource.json()).then(body => body.ukraine)
  }
  /**
  * @param {string} [key] - тут ваш апі ключ, його можна отримати в нашому діскорд сервері, створивши білет і пінганувши нас
  */
  static async hentai(key){
    if(!key) throw new TypeError("Вкажи тут апі ключ!");
    return fetch(`https://www.programmershouse-api.ga/hentai?key=${key}`).then(resource => resource.json()).then(body => body.ukraine)
  }
}


module.exports = apiwrapper;
