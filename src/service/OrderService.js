import axios from '../axios-orders';

export default class OrderService {

    getIngredientes = ()=>{
        return axios.get('/ingredients.json');
    }

    saveOrder = (order)=>{
        return axios.post('/orders.json',order);
    }
}