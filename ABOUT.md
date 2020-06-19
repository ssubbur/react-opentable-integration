
## Application overview

Open Table has a public API available at https://opentable.herokuapp.com/

As an example, http://opentable.herokuapp.com/api/restaurants?city=toronto returns a list of restaurants that deliver to Toronto, including some basic restaurant information.
 
The task is to create an application that accepts a City as a parameter. The application should then display the following information about each restaurant that delivers to that City:
- Name
- Address
- Price 

**How long did you spend on the coding assignment?**  - 8 - 12 hours 

**What would you add to your solution if you had more time?** 
  - I would add auto complete feature for City Name search
  - Since the response has location details I would have integrated Google maps to display thumbnails for each restaurants
  - I would have used React saga and other new features
  - Unit test cases
  - Common exception handling mechanism
  - Styles
If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

**What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.**

**React hook** - Helps to get access to states for functional component

   ```
    const { selctedCity } = useSelector(state => state.search, shallowEqual);
    const [errorMessage, setError] = useState('');
    const dispatch = useDispatch();
    const onSubmit = (event) => {
        event.preventDefault();
        // console.log('Submit',city);
        if (selctedCity) {
            dispatch(searchRestaurants(selctedCity));
        } else {
            setError('Please enter city')
        }
    };
    useEffect(() => {
        fetchCities();
    }, []);`
  ```

**How would you track down a performance issue in production?**
Using tools like lighthouse, profiler, Yslow Have you ever had to do this? Yes have used Yslow from Firefox and lighthouse in Chrome to check performance.


**How would you improve the API that you just used?**

  - Needs pagination support
  - Partial match support while passing multiple parameters. Currently API is returning results only for exact match. If      that is provided refine logic written in front end application can be moved to backend.

**Please describe yourself using JSON.**

```
  {
    "firstName": "SenthilKumar",
    "lastName": "Subburaj",
    "state": "ON",
    “country": “Canada",
    “gender”:”Male”,
    “occupation”: “Software Engineer”
  }
 ```
