# programmershouse-wrapper
--
Programmers House api official wrapper
--
Example of using:
# With .then
```js
//importing package
let programmershouse = require("programmershouse-wrapper")
let joke = programmershouse.joke() //getting joke
joke.then(result => { //getting result
    console.log(result) //consoling result
 })
```
# With function
```js
//importing package
let programmershouse = require("programmershouse-wrapper")
async function data(){
    let joke = await programmershouse.joke() //getting joke
    console.log(joke) //doing things with result(there is consoling)
}
data() //using function
```
# NSFW endpoints example
```js
//importing package
let programmershouse = require('programmershouse-wrapper')
let nsfw = programmershouse.hentai("Api key from our discord server: https://discord.gg/gqKbGBWmRz") //getting nsfw(you need key)
nsfw.then(result => {
 console.log(result) //consoling result
})
```
