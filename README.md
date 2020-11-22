# Api

### Weather API

The following API get the weather passing the name of the city. You can also pass a query param
to change the units (imperial, metric, standard).
```
http://localhost:3010/api/weather/{city}?units=metric
```

Using the following endpoint you are going to get the mitycal hello world.
```
http://localhost:3010/api/greeting
```

## Installation

To use the API, be sure to have node.
Clone the repository, then move to the root directory and run:
`npm install`

This will install all the dependencies.

To start the server, run: `npm start`. By default it runs on `http://localhost:3010/`

## Test

Run `npm test`
