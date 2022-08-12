import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    users: []
}

export const getAllUsers = createAsyncThunk(
    'users/get',
    async () => {
        const data1 = await axios.get('https://reqres.in/api/users', 
        {
            params: {
                page: '1'
            }
        })

        const data2 = await axios.get('https://reqres.in/api/users', 
        {
            params: {
                page: '2'
            }
        })

        const allUsers = [...data1.data.data, ...data2.data.data]
        return allUsers
    }
)

export const usersSlice = createSlice(
    {
        name: 'getusers',
        initialState,
        extraReducers: {
            [getAllUsers.fulfilled]: (state,action) => {
                state.users.push(...action.payload)
            }
        }
    }
)

export const { getUsers } = usersSlice.actions
export default usersSlice.reducer