import axios from "axios";
import { PRODUCTS_API_URL } from "../constants/ApiConstansts";

export function getAllProducts(){
    return axios.get(`${PRODUCTS_API_URL}/getAll`);
}

export function saveProduct(product){
    return axios.post(`${PRODUCTS_API_URL}/save`,product);
}

