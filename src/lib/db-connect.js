import mongoose from 'mongoose'
 
export default async function dbConnect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Successful Connection");
    } catch (error) {
        console.log(error)
        throw new Error('Connection failed!')
    }
}