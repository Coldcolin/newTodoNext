'use server'
import { revalidatePath } from 'next/cache'
import userModel from './user-models'
import dbConnect from './db-connect'

 
export async function createUser(prevState, formData) {
    
    const data = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        gender: formData.get('gender'),
        phoneNumber: formData.get('phoneNumber'),
        date: formData.get('date'),
        password: formData.get('password')
    }

    
    try {
        await dbConnect()
        const user = new userModel(data)
        await user.save()
        // revalidatePath('/')
        return { message: `Created user ${data.firstName}` }
    } catch (e) {
        
        return { message: 'Failed to create user' }
        
    }
}