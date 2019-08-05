import React from 'react'
import Aux from '../../hoc/Aux';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import ModalContent from '../../components/Burger/ModalContent/ModalContent';
import Button from '../../components/UI/Button/Button'
import Backdrop from '../../components/UI/Backdrop/BackDrop';

//data
import {INGREDIENTS, INGREDIENTS_PRICES} from '../../data/ingredients';


class BurgerBuilder extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			ingredients : INGREDIENTS,
			totalPrice: 4,
			modal : false
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
			modal: !this.state.modal
		})
	}

	confirmOrder = ()=>{
		this.reset();
		alert("Gracias por su Compra");
	}

	reset = ()=>{
		this.setState({
			ingredients : INGREDIENTS,
			totalPrice: 4,
			modal : false
		})
	}

	render(){
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
				<Modal show={ this.state.modal }>
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
				</Modal>
				<Backdrop show={ this.state.modal }  
					click= { this.toggleModal }
				/>
			</Aux>
		)
	}
}

export default BurgerBuilder;

