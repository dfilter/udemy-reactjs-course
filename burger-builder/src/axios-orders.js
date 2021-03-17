import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://udemy-reactjs-course-9fb41-default-rtdb.firebaseio.com/',
})

export default instance
