import React from 'react';

import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/spinner';

import orderService from '../../service/OrderService';
import OrdersTable from '../../components/Order/OrderTable/ordersTable';

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
            orders.push({...response.data[key], id:key, price: response.data[key].price.toFixed(2) })

        this.setState({
            orders: orders,
            spinner: false
        })

        console.log(this.state.orders)
        
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
                { this.state.orders.length ? <OrdersTable data= { this.state.orders }/> : null }

                <h1 style={{ textAlign: 'center'}}> Listado de Ordenes </h1>
                
                { orders }
                
            </div>
        )
    }
}
export default Orders;

