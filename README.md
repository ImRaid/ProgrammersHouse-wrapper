# programmershouse-wrapper
--
Programmers House api official wrapper
--
Example of using:
# With .then
```js
let programmershouse = require("programmershouse-wrapper")
let joke = programmershouse.joke()
joke.then(result => {
    console.log(result) 
 })
```
--
# With function
```js
let programmershouse = require("programmershouse-wrapper")
async function data(){
    let joke = await programmershouse.joke()
    console.log(joke)
}
data()```
--
# NSFW endpoints
```js
