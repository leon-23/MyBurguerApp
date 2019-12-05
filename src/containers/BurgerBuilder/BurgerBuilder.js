import React from 'react'
import { connect } from 'react-redux'
import * as options from '../../store/actions';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import ModalContent from '../../components/Burger/ModalContent/ModalContent';
import Button from '../../components/UI/Button/Button'
import Spinner from '../../components/UI/Spinner/spinner';


//import axios from '../../axios-orders';
import orderService from '../../service/OrderService';

class BurgerBuilder extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			modal : false,
			spinner : false
		}
	}

	componentDidMount(){
		console.log("BurgerBuilder DidMount");
		orderService.getIngredientes()
		.then(resp=>{
			this.props.setAll(resp.data, 4)
		})
		.catch(err => { console.log(err)})
	}


	removeIngredient = (key)=>{
		const ingredients = { ...this.props.ing };

		if(ingredients[key].cant < 1)
			return;

		let price = this.props.tp;

		ingredients[key].cant = ingredients[key].cant - 1;
		price -= ingredients[key].price;

		this.props.removeIngredient(ingredients, price);


	}
	//habilita, deshabilita el boton de quitar ingredientes
	disabledButtonLess = (key)=>(
		this.props.ing[key].cant ===  0 ? true : false
	)

	//habilita, deshabilita el boton de ordenar
	orderNow = ()=>(
		this.props.tp <= 4 ? true : false
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
		this.props.setAll(this.props.ing, this.props.tp)
		this.props.history.push('/checkout');
	}


	render(){
		const content = this.state.spinner ?
		 					<Spinner /> :
							<Aux>
								<ModalContent
										ingredients = { this.props.ing }
										price= { this.props.tp.toFixed(2) }
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

		return(
			<Aux>
				<Burger ingredients= { this.props.ing }/>
				<BuildControls clickMore = { this.props.addIngredient }
					clickLess = { this.removeIngredient }
					price = { this.props.tp }
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

const mapStateToProps = state =>({

	ing : state.ingredients,
	tp : state.totalPrice
})

const mapDispatchToProps = dispatch => ({

	setAll: (ingredients, totalPrice)=> dispatch({
	 		type: options.setAll,
	 		ingredients: ingredients,
	 		totalPrice: totalPrice
	 }),
	addIngredient: (key) => dispatch({type: options.add , key: key }),
	removeIngredient: (ingredients, totalPrice) => dispatch({
			type: options.remove ,
			ingredients: ingredients,
			totalPrice: totalPrice
	}),
})

export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);