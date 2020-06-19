This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


**How long did you spend on the coding assignment?**  - 8 - 12 hours 
**What would you add to your solution if you had more time?** 
  I would add auto complete feature for City Name search
  Since the response has location details I would have integrated Google maps to display thumbnails for each restaurants
  I would have used React saga and other new features
  Unit test cases
  Common exception handling mechanism
  Styles
If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.
**What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.**

**React hook** - Helps to get access to states for functional component
   `const { selctedCity } = useSelector(state => state.search, shallowEqual);
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

**How would you track down a performance issue in production?** Using tools like lighthouse, profiler, Yslow Have you ever had to do this? Yes have used Yslow from Firefox and lighthouse in Chrome to check performance.
**How would you improve the API that you just used?**
Needs pagination support
Partial match support while passing multiple parameters. Currently API is returning results only for exact match. If that is provided refine logic written in front end application can be moved to backend.
**Please describe yourself using JSON.**
`{
  "firstName": "SenthilKumar",
  "lastName": "Subburaj",
  "state": "ON",
   “country": “Canada",
  “gender”:”Male”,
 “occupation”: “Software Engineer”
 }`

