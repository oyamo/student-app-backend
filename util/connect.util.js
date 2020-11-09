const mongoose= require('mongoose')
const uri = "mongodb+srv://Oyasis:brianoti1@pollcluster.mm0jl.mongodb.net/StudentApp?retryWrites=true&w=majority"
const connect = () =>{
    const options = {
        ssl: false,
        sslValidate: false,
        poolSize: 1,
        socketTimeoutMS: 5000
    };

    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000
    }).catch( e=>{
        console.log(e);
    }).then( ()=>{
        console.info("Connection successful")
    })

    let db = mongoose.connection

    db.on('error', err =>{
        console.log(err)
    });

    db.on('connect', ()=>{
        console.info("Connected to " + uri )
    });

    console.log(db.eventNames())
}

module.exports = connect()