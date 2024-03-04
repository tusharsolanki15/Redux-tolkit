import { createSlice } from '@reduxjs/toolkit'

interface user{
    id: number,
    name: string
}

const userSlice = createSlice({
    name: "user",
    initialState: [] as user[],
    reducers: {
        addUser(state, action){
            state.push(action.payload)
            console.log(action.payload)
        },
        removeUser(state, action){},
        deleteUser(state, action){}, 
    }   
})

// console.log(userSlice.actions)

export default userSlice.reducer 
export const {addUser} = userSlice.actions