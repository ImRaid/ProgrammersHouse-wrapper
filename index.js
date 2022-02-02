let api = require("./wraper.js")

async function data(){
    let sw = await api.verycoolendpoint()
    console.log(sw)
}
data()

