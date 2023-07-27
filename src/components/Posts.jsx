import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts} from '../store/postSlice'
import Filters from "./Filters"
import {useSearchParams} from 'react-router-dom'
import CustomTitle from './customTitle/CustomTitle'

const Posts = () => {
  const {posts, status, currentPage, sortCol} = useSelector(store => store.posts)
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()
  const postQuery = searchParams.get('search') || ''

  useEffect(() => {
    dispatch(fetchPosts({
      page: currentPage
    }))
  }, [currentPage])

  return(
    <div>
      <Filters />
      {
        status === 'loading'
          ?
          <h3>Loading...</h3>
          :
          <table>
            <thead>
            <tr>
              <th><CustomTitle additionalClass={'idHeader'}>ID</CustomTitle></th>
              <th><CustomTitle additionalClass={'titleHeader'}>Заголовок</CustomTitle></th>
              <th><CustomTitle additionalClass={'descriptionHeader'}>Описание</CustomTitle></th>
            </tr>
            </thead>
            <tbody>
            {
              [...posts]
                .sort((a, b) => {
                  if(sortCol === 'id'){
                    return b[sortCol] - a[sortCol]
                  } else if (sortCol === '') {
                    return a[sortCol] - b[sortCol]
                  } else {
                    return b[sortCol].localeCompare(a[sortCol])
                  }
                })
                .filter(post => post.title.includes(postQuery.toLowerCase())
                  || post.body.includes(postQuery.toLowerCase())
                  || post.id.toString().includes(postQuery))

                .map(post =><tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>)
            }
            </tbody>
          </table>
      }
    </div>
  )
}

export default Posts
