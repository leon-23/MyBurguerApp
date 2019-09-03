import React from 'react';
import { Route } from 'react-router-dom';

import Checkout from '../../components/Checkout/Checkout';
import Spinner from '../../components/UI/Spinner/spinner';
import ContactData from '../../components/Checkout/ContactData/ContactData';

import orderService from '../../service/OrderService';

class CheckoutSumary extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            ingredients : {},
            totalPrice : 0,
            customer : {},
            spinner: true
        }
    }

    componentDidMount(){  
        let data;
        
        try {
             data = JSON.parse(this.props.match.params.ingredients);

             this.setState({
                ingredients: data['ingredients'],
                totalPrice : data['price'],
                spinner: false
            }); 
        }catch(error) {
            console.log(error)
            this.cancelar()
        }
    }

    cancelar = ()=>{        
        this.props.history.replace('/')  
    }

    continuar = ()=>{
       this.props.history.replace('/checkout/contact')
        
    }

    ordenar =(customer) =>{
        const order = {
            ingredients: this.state.ingredients,
            price : this.state.totalPrice,
            customer: customer
        }

        orderService.saveOrder(order)
			.then(response=>{
				console.log(response)
                alert("Gracias por su Compra")
                this.props.history.push("/")

			})
			.catch(err =>{
				console.log(err)
		})        
    }


    render(){   
       const  content =  this.state.spinner ? <Spinner /> 
            : <Checkout 
                ingredients= { this.state.ingredients }
                cancel={ this.cancelar } 
                continue={ this.continuar }   
            />; 
        
        return(
            <div>
                { content }
                <Route exact path={ '/checkout/contact' }
                     render={()=> (<ContactData ordenar={ this.ordenar }/> )}
                />
            </div>  
        )   
    }
}

export default CheckoutSumary;