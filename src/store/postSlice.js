import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import api from '../api'

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async function(params, {rejectWithValue}){
    try{
      const response = await api.get('/posts', {
        params: {
          _page: params.page
        }
      })
      return {
        data: response.data,
        totalPosts: response.headers['x-total-count']
      }
    } catch(error){
      return rejectWithValue(error.message)
    }
  }
)

const postSlice = createSlice({
  name: 'postSlice',
  initialState: {
    posts: [],
    status: null,
    error: null,
    totalPosts: '',
    currentPage: 1,
    sortBy: '',
    sortCol: ''
  },
  reducers: {
    setCurrentPage(state, action){
      state.currentPage = action.payload
    },
    setSortAttribute(state, action){
      state.sortBy = action.payload
      if(action.payload === 'idHeader'){
        state.sortCol = 'id'
      } else if (action.payload === 'titleHeader'){
        state.sortCol = 'title'
      } else if (action.payload === 'descriptionHeader'){
        state.sortCol = 'body'
      } else {
        state.sortCol = ''
      }
    }
  },
  extraReducers: {
    [fetchPosts.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.posts = action.payload.data
      state.totalPosts = action.payload.totalPosts
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  }
})

export default postSlice.reducer
export const {setCurrentPage, setSortAttribute} = postSlice.actions
