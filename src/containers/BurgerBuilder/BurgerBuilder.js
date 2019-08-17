import React from 'react'
import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import ModalContent from '../../components/Burger/ModalContent/ModalContent';
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/withErrorHandler';

//data
import {INGREDIENTS, INGREDIENTS_PRICES} from '../../data/ingredients';

import axios from '../../axios-orders';

class BurgerBuilder extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			ingredients : INGREDIENTS,
			totalPrice: 4,
			modal : false,
			spinner : false
		}
	}

	addIngredient = (key)=>{
		const ingredients = { ...this.state.ingredients };
		let price = this.state.totalPrice;

		ingredients[key] = ingredients[key] + 1;
		price += INGREDIENTS_PRICES[key];

		this.setState({
			ingredients : ingredients,
			totalPrice : price
		})
	}
	
	removeIngredient = (key)=>{
		const ingredients = { ...this.state.ingredients };
		
		if(ingredients[key] < 1)
			return;

		let price = this.state.totalPrice;

		ingredients[key] = ingredients[key] - 1;
		price -= INGREDIENTS_PRICES[key];

		this.setState({
			ingredients : ingredients,
			totalPrice : price
		})
	}
	//habilita, deshabilita el boton de quitar ingredientes
	disabledButtonLess = (key)=>(
		this.state.ingredients[key] ===  0 ? true : false
	)
	
	//habilita, deshabilita el boton de ordenar
	orderNow = ()=>(
		this.state.totalPrice <= 4 ? true : false 
	)

	toggleModal = ()=>{
		this.setState({
			modal: !this.state.modal,
		})
	}

	showSpinner = ()=>{
		this.setState({
			spinner : !this.state.spinner
		})
	}

	confirmOrder = ()=>{
		
		this.showSpinner();
		

		  const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: 'Luis León',
				email: 'Leon@test.com',
				adress: {
					city: 'Barquisimeto',
					country: 'Venezuela'
				}
			}
		}
		axios.post('/orders',order)
			.then(response=>{
				console.log(response)
				this.reset()
				alert("Gracias por su Compra")

			})
			.catch(err =>{
				console.log(err)
				this.toggleModal()
				console.log("cathc err work")
			})
	}

	reset = ()=>{
		this.setState({
			ingredients : INGREDIENTS,
			totalPrice: 4,
			modal : false,
			spinner: false
		})
	}

	render(){
		let content = null;
		
		if(this.state.spinner)
			content = (<Spinner />) 
		else{
			content =(
				<Aux>
					<ModalContent 
							ingredients = { this.state.ingredients }
							price= { this.state.totalPrice.toFixed(2) } 
						/>
					<div>
						<Button type="button" 
								btnType= "Success" 
								click = { this.confirmOrder }>
								Confirmar 
						</Button>
						<Button type="button" 
								btnType= "Danger" 
								click = { this.toggleModal }>
								Cancelar 
						</Button>
						</div>
				</Aux>
			)
		}
					
		return(
			<Aux>
				<Burger ingredients= { this.state.ingredients }/>
				<BuildControls clickMore = { this.addIngredient }
					clickLess = { this.removeIngredient }
					price = { this.state.totalPrice }
					disabled = { this.disabledButtonLess }
					order = { this.orderNow() }
					clickModal = { this.toggleModal }
				/>
				<Modal show={ this.state.modal } click= { this.toggleModal } >
					{ content }	
				</Modal>
			</Aux>
		)
	}
}

export default WithErrorHandler(BurgerBuilder, axios);