import userModel from '@/lib/user-models'
import dbConnect from '@/lib/db-connect'

const getUsers=async()=>{
    const data = await fetch('http://localhost:3000/api/users')
    const info = await data.json()
    return info;
}

const Page=async()=>{
    await dbConnect();
    const users = await userModel.find();
    // const users = await getUsers();
    return(
        <>
        <div>
            <h1>Users</h1>
            {
                users?.map((e)=>(
                    <div key={e._id}>
                        <h3>Name: {e.firstName}</h3>
                        <p>email: {e.email}</p>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default Page