import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'

import Checkout from '../../components/Checkout/Checkout';
import Spinner from '../../components/UI/Spinner/spinner';
import ContactData from '../../components/Checkout/ContactData/ContactData';


import orderService from '../../service/OrderService';

class CheckoutSumary extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            customer : {},
            spinner: false
        }
    }


    cancelar = ()=>{        
        this.props.history.replace('/')  
    }

    continuar = ()=>{
       this.props.history.replace('/checkout/contact')     
    }

    ordenar =(customer) =>{
        this.setState({ spinner : true})
        
        const order = {
            ingredients: this.props.ing,
            price : this.props.tp,
            customer: customer
        }

        orderService.saveOrder(order)
			.then(response=>{
				console.log(response)
                alert("Gracias por su Compra")                

			})
			.catch(err =>{
				console.log(err)
                 alert("Lo sentimos, Ocurrio un error")
		    })
            .finally(()=>{
                this.setState({ spinner : false})
                this.props.history.push('/')
            })      
    }


    render(){   
       const  content =  this.state.spinner ? <Spinner /> 
            : <Checkout 
                ingredients= { this.props.ing }
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

const mapStateToProps = state =>({

    ing : state.ingredients,
    tp : state.totalPrice
})

export default connect(mapStateToProps,null)(CheckoutSumary);