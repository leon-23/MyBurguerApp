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
}

const orderService = new OrderService();

export default orderService;