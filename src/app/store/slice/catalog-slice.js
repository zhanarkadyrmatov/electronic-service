import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
const backendURL = "https://api.cheberel.kg";
export const fetchCatalogData = createAsyncThunk(
    'catalog/fetchCatalogData',
    async (data, {rejectWithValue}) => {
        const min_price = data[0]
        const max_price = data[1]
        const categoryId = data[2]
        const page = data[3]
        console.log(data,'data');
        console.log(categoryId,'test');
        if (categoryId !== undefined) {
            console.log('categoryIdIs', min_price   ,categoryId);
            if (min_price !== null || max_price !== null) {
                try {
                    const response = await fetch(`${backendURL}/products/product_list/?min_price=${min_price}&max_price=${max_price}&category_id=${categoryId}&page=${page}`)
                    const data = await response.json()
                    console.log(data,'response1');
                    return data
                } catch (error) {
                    return rejectWithValue(error)
                }
                
            } else {
                console.log('categoryIdIs', min_price   ,categoryId);
                try {
                    const response = await fetch(`${backendURL}/products/product_list/?category_id=${categoryId}&page=${page}`)
                    const data = await response.json()
                    console.log(data,'response');
                    return data
                } catch (error) {
                    return rejectWithValue(error)
                }
            }
        }
        if (min_price !== null || max_price !== null) {
            try {
                console.log('min_priceIs', min_price   ,max_price ,categoryId); 
                const response = await fetch(`${backendURL}/products/product_list/?min_price=${min_price}&max_price=${max_price}&page=${page}`)
                const data = await response.json()
                return data
            } catch (error) {
                return rejectWithValue(error)
            }
        }
        
        // if (data === null) {
        //     try {
        //         const response = await fetch(`${backendURL}/products/product_list/&page=${page}`)
        //         const data = await response.json()
        //         console.log(data,'response');
        //         return data
        //     } catch (error) {
        //         return rejectWithValue(error)
        //     }    
        // }else {
          
        //     if (categoryId === undefined || categoryId === null) {

        //         try {
        //             const response = await fetch(`${backendURL}/products/product_list/?min_price=${min_price}&max_price=${max_price}&page=${page}`)
        //             const data = await response.json()
        //             console.log(data,'response1');
        //             return data
        //         } catch (error) {
        //             return rejectWithValue(error)
        //         }
                
        //     } else {
        //           if (categoryId !== null || categoryId !== undefined) {
        //         try {
        //             const response = await fetch(`${backendURL}/products/product_list/?category_id=${categoryId}&page=${page}`)
        //             const data = await response.json()
        //             console.log(data,'response');
        //             return data
        //         } catch (error) {
        //             return rejectWithValue(error)
        //         }
        //     }  else if ( max_price !== null || min_price !== null) {
        //         try {
        //             const response = await fetch(`${backendURL}/products/product_list/?min_price=${min_price}&max_price=${max_price}&page=${page}`)
        //             const data = await response.json()
        //             console.log(data,'response');
        //             return data
        //         } catch (error) {
        //             return rejectWithValue(error)
        //         }
        //     }
        //         try {
        //             const response = await fetch(`${backendURL}/products/product_list/?min_price=${min_price}&max_price=${max_price}&category_id=${categoryId}&page=${page}`)
        //             const data = await response.json()
        //             console.log(data,'response2');
        //             return data
        //         } catch (error) {
        //             return rejectWithValue(error)
        //         }
        //     }   
        // }
    }
)
export const fetchCatalogData2 = createAsyncThunk(
    'catalog/fetchCatalogData2',
    async (page, {rejectWithValue}) => {
        try {
            const response = await fetch(`${backendURL}/products/product_list/?page=${page}`)
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
        dataFilter:null,
        count:null,
        categoryData:{
            data: null,
            status: null,
            error: null
        }
    },
    status: null,
    error: null,
    reducers: {
        filterData : (state, action) => {
            state.data = [action.payload]
            console.log(state.data, 'test1');
        }
    },
    extraReducers:(builder)=> {
        builder.addCase(fetchCatalogData.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(fetchCatalogData.fulfilled, (state, {payload}) => {
            state.status = 'succeeded'
            state.data = payload
            state.count = payload.count
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
            state.count = payload.count
        })
        builder.addCase(fetchCatalogData2.rejected, (state, {payload}) => {
            state.status = 'failed'
            state.error = payload
        })
        
    },
})

export const {filterData} = catalogSlice.actions;
export default catalogSlice.reducer;

