import axios from 'axios';

const countriesAPI = axios.create({
    baseURL: 'https://restcountries.com/v2/all'
})

export default countriesAPI