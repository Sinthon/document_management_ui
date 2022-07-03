import store from "@/store";
import axios from "axios";

axios.defaults.baseURL = 'https://localhost:44327'

let refresh = false;

axios.interceptors.response.use(resp => resp, async error =>{
    if(error.response.status == 401 && !refresh){
        refresh = true
        const {status , data} = await axios.post('/api/AuthManagement/RefreshToken',{
            token: store.getters['auth/token'],
            refreshToken: store.getters['auth/refreshToken']
          },{
            withCredentials: true
          })
        if(status === 200){
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
            console.log(data)
            return axios(error.config);
        }
    }

    console.log(store.getters['auth/token'])
    console.log(store.getters['auth/refreshToken'])
    return error;
})