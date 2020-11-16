import axios from 'axios'

axios.defaults.url="39.104.52.111:8006/";

export function get(obj){
    return axios.get(obj)
}