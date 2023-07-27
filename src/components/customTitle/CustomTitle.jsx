import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setSortAttribute} from '../../store/postSlice'
import classes from './CustomTitle.module.css'

const CustomTitle = ({additionalClass, children}) => {
  const {sortBy} = useSelector(state => state.posts)
  const dispatch = useDispatch()

  return (
    <div className={[classes.customHeader, additionalClass].join(' ') }
         onClick={() => dispatch(setSortAttribute(sortBy === additionalClass ? '' : additionalClass))}>
      <div>{children}</div>
      <div className={sortBy === additionalClass
        ? [classes.chevron, classes.bottom, classes.show].join(' ')
        : [classes.chevron, classes.bottom].join(' ')}></div>
    </div>
  )
}

export default CustomTitle
