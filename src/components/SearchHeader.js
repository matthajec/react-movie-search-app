import React from 'react'

export default function SearchHeader(props) {
  return (
    <header>
      <h1 className="title">React Movie Search</h1>
      <form className="input-form">

        <label
          className="input-label"
          htmlFor="query"
        >Search here:</label>

        <input
          type="text"
          name="query"
          id="query"
          className="input"
          placeholder="i.e. The Wizard of Oz"
          onChange={props.onChange}
          value={props.query}
        />

        <button
          className="input-btn"
          type="submit"
          onClick={props.search}
        >Search</button>
      </form>


    </header>
  )
}