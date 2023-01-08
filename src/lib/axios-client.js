import axios from 'axios'

const axiosClient = axios.create({
    baseURL:`${process.env.REACT_APP_API_BASE_URL}/api/admin`
});

axiosClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`
    config.headers['Access-Control-Allow-Origin'] = '*';
    config.headers['Access-Control-Allow-Credentials'] = 'true'
    return config;
})
axiosClient.interceptors.response.use((response)=>{
    return response;
},(error)=>{
    const {response} = error
    if(response.status === 401){
        localStorage.removeItem('ACCESS_TOKEN');
    }
    throw error;
});
export default axiosClient;