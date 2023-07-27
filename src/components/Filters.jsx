import React, {useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom'

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    setSearchValue(searchParams.get('search') || '')
  }, [searchParams])

  const inputHandler = e => {
    e.preventDefault()
    const query = e.target.value
    setSearchValue(query)

    let timer = null
    clearTimeout(timer)
    timer = setTimeout(() => {
      if(query.length) {
        let params = {}
        params.search = query
        setSearchParams(prev => {
          return new URLSearchParams({
            ...Object.fromEntries(prev.entries()),
            ...params,
          })
        })
      } else {
        setSearchParams(prev => {
          return new URLSearchParams([...prev].filter(item => !item.includes('search')))
        })
      }
    }, 1000)
  }

  return (
    <div className="search_body">
      <input className="search_input"
             type='text'
             name='search'
             placeholder='Поиск'
             autoComplete='off'
             onInput={inputHandler}
             value={searchValue} />
      <img src={require("../assets/img/search.png")} alt="Search"/>
    </div>
  )
}

export default Filters
