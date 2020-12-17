import React from 'react'
import LoadingAnimation from './LoadingAnimation'
import Navigation from './Navigation'

export default function Navbar(props) {
  return (
    <div className="results">
      { props.results.foundResults ? <Navigation pages={props.pages} navigate={props.navigate} /> : null}
      { props.loading ? <LoadingAnimation /> : props.results.component}
    </div>
  )
}