import INGREDIENTS from '../../data/ingredients'
import * as options from '../actions';

const initialState = {
	ingredients: INGREDIENTS,
	totalPrice : 4
}

const add = (state, key)=> {
	const ingredients = { ...state.ingredients };
	const totalPrice = state.totalPrice +  ingredients[key].price;		
	ingredients[key].cant++

	return {
		ingredients,
		totalPrice 
	}
}

const reducer = ( state = initialState, action) =>{

	switch(action.type){

		case options.setAll:
			return{
				ingredients : action.ingredients,
				totalPrice: action.totalPrice
			}

		case options.add:
			return add(state, action.key )

		/*case options.remove :

			return {
				ingredients : action.ingredients,
				totalPrice : action.totalPrice
			}*/		
		default:
			return state;
	}
}


export default reducer;