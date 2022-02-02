let api = require("./wraper.js")

async function data(){
    let sw = await api.subreddit("r/easyscript")
    console.log(sw.title)
}
data()

