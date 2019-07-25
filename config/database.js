const mongoose = require('mongoose')
// const URI = `mongodb://localhost:27017/blog-app`
const URI = process.env.MONGODB_URI || `mongodb+srv://blogger:blogger@123@cluster0-quxxf.mongodb.net/test?retryWrites=true&w=majority`
mongoose.Promise = global.Promise

mongoose.set("useCreateIndex", true)
mongoose.set("useFindAndModify", false)
mongoose.connect(URI,{useNewUrlParser: true})
    .then(()=>{
        console.log('connected to db')
    })
    .catch(()=>{
        console.log('error connecting to db')
    })

module.exports = mongoose