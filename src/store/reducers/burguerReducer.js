import INGREDIENTS from '../../data/ingredients'
import * as options from '../actions';

const initialState = {
	ingredients: INGREDIENTS,
	totalPrice : 4
}

const reducer = ( state = initialState, action) =>{

	switch(action.type){

		case options.setAll :
			return{
				ingredients : action.ingredients,
				totalPrice: action.totalPrice
			}

		case options.add :
			const ingredients = { ...state.ingredients };
			let price = state.totalPrice;
			
			ingredients[action.key].cant = ingredients[action.key].cant + 1;
			price += ingredients[action.key].price;

			return {
				ingredients : ingredients,
				totalPrice : price
			}

		case options.remove :

			return {
				ingredients : action.ingredients,
				totalPrice : action.totalPrice
			}
			
		default:
			return state;
	}
}


export default reducer;