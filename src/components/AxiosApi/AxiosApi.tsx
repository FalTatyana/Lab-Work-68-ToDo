import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://fal-tatyana-lab-work-68-todo-default-rtdb.europe-west1.firebasedatabase.app'
})

export default axiosApi
