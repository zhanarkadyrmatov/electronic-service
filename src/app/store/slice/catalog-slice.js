import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
const backendURL = "https://api.cheberel.kg";
export const fetchCatalogData = createAsyncThunk(
    'catalog/fetchCatalogData',
    async (data, {rejectWithValue}) => {
      
         const min_price = data[0].min_price
         const max_price = data[0].max_price
         const categoryId = data[1]
         console.log(data,'data');
         console.log(categoryId,'test');
        if (data === null) {
            try {
                const response = await fetch(`${backendURL}/products/product_list/`)
                const data = await response.json()
                console.log(data,'response');
                return data
            } catch (error) {
                return rejectWithValue(error)
            }    
        }else {
            
     
            if (categoryId === undefined || categoryId === null) {
                try {
                    const response = await fetch(`${backendURL}/products/product_list/?min_price=${min_price}&max_price=${max_price}`)
                    const data = await response.json()
                    console.log(data,'response1');
                    return data
                } catch (error) {
                    return rejectWithValue(error)
                }

                
            } else {
                try {
                    const response = await fetch(`${backendURL}/products/product_list/?min_price=${min_price}&max_price=${max_price}&category_id=${categoryId}`)
                    const data = await response.json()
                    console.log(data,'response2');
                
                    return data
                } catch (error) {
                    return rejectWithValue(error)
                }
            }   
        }

        
    }
)
export const fetchCatalogData2 = createAsyncThunk(
    'catalog/fetchCatalogData2',
    async (_, {rejectWithValue}) => {
        
        try {
            const response = await fetch(`${backendURL}/products/product_list/`)
            const data = await response.json()
            console.log(data,'response');
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const fetchCategoryListData = createAsyncThunk(
    'catalog/fetchCategoryListData',
    async (_, {rejectWithValue}) => {
        try {
            const response = await fetch(`${backendURL}/products/category_list/`)
            const data = await response.json()
            return data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        data: null,
        categoryData:{
            data: null,
            status: null,
            error: null
        }
    },
    status: null,
    error: null,
    reducers: {},
    extraReducers:(builder)=> {
        builder.addCase(fetchCatalogData.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchCatalogData.fulfilled, (state, {payload}) => {
            state.status = 'succeeded'
            state.data = payload
        })
        builder.addCase(fetchCatalogData.rejected, (state, {payload}) => {
            state.status = 'failed'
            state.error = payload
        })
        builder.addCase(fetchCategoryListData.pending, (state) => {
            state.categoryData.status = 'loading'

        })
        builder.addCase(fetchCategoryListData.fulfilled, (state, {payload}) => {
            state.categoryData.status = 'succeeded'
            state.categoryData.data = payload
        })
        builder.addCase(fetchCategoryListData.rejected, (state, {payload}) => {
            state.categoryData.status = 'failed'
            state.categoryData.error = payload
        })
        builder.addCase(fetchCatalogData2.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchCatalogData2.fulfilled, (state, {payload}) => {
            state.status = 'succeeded'
            state.data = payload
        })
        builder.addCase(fetchCatalogData2.rejected, (state, {payload}) => {
            state.status = 'failed'
            state.error = payload
        })
        
    },
})

export const {_} = catalogSlice.actions;
export default catalogSlice.reducer;

