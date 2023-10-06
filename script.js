const axios = require('axios');
 
// Declaring this axios instance...
const api = axios.create({
  baseURL: 'http://api.openweathermap.org'
});
 
// ...allows you to only argument the rest of each URL on every call
api
  .get('/data/2.5/weather?q=London&appid=a807bb0de93aaae556d029221d70fec0')
  .then(response => console.log(response.data))
  .catch(error => console.log(error));