# React Movie Search
## Description
React Movie Search is a simple app that allows the user to lookup movies using [TMDb's](themovidedb.com) REST API.

## Framework(s)/Package(s)
* ReactJS
* SCSS
* .env

## Challenges
The biggest challenge I had when creating this app was getting the pages to reset to 1 whenever a user submitted a new query. It was causing a bug because the app would send a request for a page that didn't exist on a new serch. This is how I fixed it (with irrlevant info ommited):
```javascript
  const [currentQuery, setCurrentQuery] = useState({
    currentPage: null,
    currentSearch: null
  })
  
  useEffect(() => {
    // fetch the resource and set the propper states here
  }, [currentQuery])

  function search() => {
    setCurrentQuery({
      currentPage: 1,
      currentSearch: query //"query" is the value of the search input box
    })
  }
```
I put current page and the current search string togehter so that the use effect runs when both change (since they change together), so the current page it fetches it always 1 if a new search is initiated. My solution also had the added benefit of preventing repeat requests (if the user is already on page one and the query hasn't changed then the search is stopped before it ever sends a request to the server or rerenders any components)
