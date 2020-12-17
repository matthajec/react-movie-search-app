import React, { useEffect, useState } from 'react'
import SearchHeader from './components/SearchHeader'
// const Results = require('./components/Results/Results')
// const SearchResult = require('./components/Results/SearchResult') - had no effect on performance :/
import Results from './components/Results/Results'
import SearchResult from './components/Results/SearchResult'

export default function App() {
  const apiKey = process.env.REACT_APP_API_KEY

  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState({
    foundResults: null,
    component: null,
  })
  const [totalPages, setTotalPages] = useState()
  const [currentQuery, setCurrentQuery] = useState({
    currentPage: null,
    currentSearch: null
  })


  //makes the search input a controlled input
  function onChange(e) {
    const { value } = e.target
    setQuery(value)
  }

  //fetches data from the api and returns it
  async function fetchData() {
    try {
      let res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${currentQuery.currentPage}`)
      let data = await res.json()
      return data
    } catch (err) {
      console.log(err)
    }
  }

  function goForward() {
    if (currentQuery.currentPage !== totalPages) {
      setCurrentQuery(prev => {
        return {
          ...currentQuery,
          currentPage: prev.currentPage + 1
        }
      })
    }
  }

  function goBackward() {
    if (currentQuery.currentPage !== 1) {
      setCurrentQuery(prev => {
        return {
          ...currentQuery,
          currentPage: prev.currentPage - 1
        }
      })
    }
  }

  useEffect(() => {
    if (query !== '') {

      //displays the loading animation
      setLoading(true)

      fetchData().then(data => {
        //after the promise has been resolved remove the loading animation
        setLoading(false)
        setTotalPages(data.total_pages)

        if (data.results && data.results.length !== 0) {
          setResults({
            foundResults: true,
            component: data.results.map(movie => <SearchResult key={movie.id} movie={movie} />)
          })
        } else {
          setResults({
            foundResults: false,
            component: <h1 className="no-results">No Results were found? Did you type everything correctly?</h1>
          })
        }
      })
    }
  }, [currentQuery])


  function search(e) {
    e.preventDefault()
    setCurrentQuery({
      currentQuery: query,
      currentPage: 1
    })
  }

  return (
    <div className="container">
      <SearchHeader
        onChange={onChange}
        query={query}
        search={search}
      />

      <Results
        loading={loading}
        results={results}
        pages={{ currentQuery, totalPages }}
        navigate={{ goForward, goBackward }}
      />
    </div>
  )
}