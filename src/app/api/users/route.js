import { NextResponse } from "next/server";
import dbConnect from "@/lib/db-connect";
import userModel from "@/lib/user-models";

export const GET= async()=>{
    try{
        await dbConnect();
        const users = await userModel.find();
        return NextResponse.json(users)
    }catch(err){
        console.log(err)
    }
}