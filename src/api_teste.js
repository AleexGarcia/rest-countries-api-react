const axios = require('axios').default;
let cards = [];
axios.get('https://restcountries.com/v2/all')
  .then(function (response) {
    cards = response.data;

  })
  .catch(function (error) {
  
    console.log(error);
  })
  .then(function () {
  
   
});
export default cards;
