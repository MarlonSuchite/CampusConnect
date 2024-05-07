/* mongo.js */
import mongoose from 'mongoose'


const connectionDB = async() => {
   try{
    const urlMongo = `${process.env.DB_MONGO}`
    
    await mongoose.connect(urlMongo);
    console.log('Conectado a la BD')
   }catch(e){
    console.error(e)
   } 
}

export default connectionDB