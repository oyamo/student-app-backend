const mongoose= require('mongoose')
const connect = () =>{
    const options = {
        ssl: false,
        sslValidate: false,
        poolSize: 1,
        socketTimeoutMS: 5000
    };

    mongoose.connect(process.env.MONGO_URI,{
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
        console.info("Connected to " + process.env.MONGO_URI )
    });

    console.log(db.eventNames())
}

module.exports = connect()