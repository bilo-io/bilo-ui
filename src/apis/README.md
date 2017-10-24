# APIs

## WhereIsMyTransport API

This is a utility that makes it slightly easier to connect to the [WhereIsMyTransport API](https://developer.whereismytransport.com/documentation) from javascript applications.

### Initialisation

You will need [client credentials](https://developer.whereismytransport.com/clients) in order to initialise the api client.

```js
import Tapi from 'bilo-ui'

const tapi = new Tapi();

// initialise tapi client with your client credentials
tapi.init({
  client_id: 'YOUR_CLIENT_ID',
  client_secret: 'YOUR_CLIENT_SECRET'
}, // callback, invoked once token has been received
 () => {
  tapi
    .getAgencies()
    .then( (response) => console.log('agencies: ', response.data))
    .catch( (error) => console.error({error}))
})
```

### Available Endpoints:

You can view the entire set of endpoints in the documentation. This is a list of the more commonly used ones.

#### Agencies

```js
tapi.getAgencies()
  .then( (response) => console.log('agencies:', response.data))
  .catch( (error) => console.error({error}))
```

#### Lines

```js
tapi.getLines()
  .then( (response) => console.log('lines:', response.data))
  .catch( (error) => console.error({error}))
```

#### Stops

```js
tapi.getStops()
  .then( (response) => console.log('stops:', response.data))
  .catch( (error) => console.error({error}))
```

