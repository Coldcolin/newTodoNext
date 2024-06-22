import mongoose from 'mongoose'
  
const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true , unique: true},
        gender: { type: String },
        phoneNumber: { type: Number },
        date: { type: String },
        password:{type: String, required: true}
    },
    {
        timestamps: true,
    }
)
 
const userModel = mongoose.models.Users || mongoose.model('Users', userSchema)
export default userModel