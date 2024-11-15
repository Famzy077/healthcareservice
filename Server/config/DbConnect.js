import mongoose from "mongoose";
const connectDb = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_KEY)
        // const conn = await mongoose.connect('mongodb://localhost:27017/auth')
        console.log(`Connected to the data base successfully ${conn.connection.host}`)
    } catch (error) {
        console.log(error, 'Mongodb is not connect to database');
        process.exit(1)
    }
}
export default connectDb
