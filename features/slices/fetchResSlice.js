import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    resources: []
}

export const getAllResources = createAsyncThunk(
    'resources/get',
    async () => {
        const data1 = await axios.get('https://reqres.in/api/resources', 
        {
            params: {
                page: '1'
            }
        })

        const data2 = await axios.get('https://reqres.in/api/resources', 
        {
            params: {
                page: '2'
            }
        })

        const allResources = [...data1.data.data, ...data2.data.data]
        return allResources
    }
)

export const resourcesSlice = createSlice(
    {
        name: 'getresources',
        initialState,
        extraReducers: {
            [getAllResources.fulfilled]: (state,action) => {
                state.resources.push(...action.payload)
            }
        }
    }
)

export const { getResources } = resourcesSlice.actions
export default resourcesSlice.reducer