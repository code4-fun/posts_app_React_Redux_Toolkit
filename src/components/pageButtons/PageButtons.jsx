import React, {useEffect} from 'react'
import classes from './PageButtons.module.css';
import {useSelector, useDispatch} from 'react-redux'
import {setCurrentPage} from '../../store/postSlice'
import {useSearchParams} from 'react-router-dom'

const PageButtons = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const {currentPage, totalPosts} = useSelector(state => state.posts)
  const dispatch = useDispatch()

  const totalPages = Math.ceil(totalPosts/10)
  const pageNumbers = Array.from(Array(totalPages).keys(), item => item + 1)

  useEffect(() => {
    dispatch(setCurrentPage(searchParams.get('page') || 1))
  }, [searchParams])

  return (
    <div className={classes.pages}>
      <div className={classes.forthBack}
           onClick={() => setSearchParams({page: Math.max(Number(currentPage) - 1, 1)})}>Назад</div>
      <div className = {classes.pageWrapper}>
        {
          pageNumbers.map(i => <div
            key = {i}
            onClick={() => {
              setSearchParams({page: i})
            }}
            className = {
              Number(currentPage) === i
                ? [classes.pageButton, classes.currentPageButton].join(' ')
                : classes.pageButton}>{i}</div>)
        }
      </div>
      <div className={classes.forthBack}
           onClick={() => setSearchParams({page: Math.min(Number(currentPage) + 1, totalPages)})}>Далее</div>
    </div>

  )
}

export default PageButtons
