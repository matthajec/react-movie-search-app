# React Movie Search
## Description
React Movie Search is a simple app that allows the user to lookup movies using [TMDb's](themovidedb.com) REST API.

## Framework(s)/Package(s)
* ReactJS
* SCSS
* .env

## Challenges
The biggest challenge I had when creating this app was fixing a bug where the page would not update upon searching for a new query. It was causing a bug because the app would send a request for a page that didn't exist on a new serch. This is how I fixed it (with irrlevant info ommited):
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
I put current page and the current search string together in a state. This means that whenever a new query is searched (search()) currentPage can be set to 1 and the effect will trigger. If somoene just changes pages then the effect will also trigger, but it won't run the search function and set currentPage to 0.
