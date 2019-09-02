import React from 'react';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/spinner';

import orderService from '../../service/OrderService';

class Orders extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            orders: [],
            spinner: true
        }
    }

    componentDidMount(){

        orderService.findAll().then(response=>{
            const orders = []

        for(let key in response.data)
            orders.push({...response.data[key], id:key })

        this.setState({
            orders: orders,
            spinner: false
        })
        
        }).catch(err => console.log(err))
    }

    render(){
        const orders = this.state.spinner ? <Spinner /> :
             this.state.orders.map(order=>(
                <Order key={ order.id }
                    ingredients = { order.ingredients } 
                    price = { order.price }
                    customer = { order.customer }
                />
            ))
        
        return(
            <div>
                <h1 style={{ textAlign: 'center'}}> Listado de Ordenes </h1>
                { orders }
            </div>
        )
    }
}
export default Orders;

