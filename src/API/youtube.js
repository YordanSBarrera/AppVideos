import axios from 'axios';

const KEY='AIzaSyD7uk_JKQIJdVqmvKnZ5l8IJaPjYPfLmJk';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResult:5,
        key:KEY
    }
});