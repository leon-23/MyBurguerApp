import axios from '../axios-orders';

 class OrderService {

    constructor(){
        console.log("OrderService instance");
    }

    getIngredientes = ()=>{
        return axios.get('/ingredients.json');
    }

    saveOrder = (order)=>{
        return axios.post('/orders.json',order);
    }

    findAll(){
        return axios.get('/orders.json');
    }
}

const orderService = new OrderService();

export default orderService;