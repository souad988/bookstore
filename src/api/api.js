const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const apiKey = 'NFW2eCDtGC3JrEHY1wjY';
const axios = require('axios');

export default axios.create({
  baseURL: apiUrl + apiKey,
  headers: {
    'Content-type': 'application/json',
  },
});
