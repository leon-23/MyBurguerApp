
const columns = [
	{
		name: 'ID',
		selector: 'id',
		sortable:  true

	},
	{
		name: 'Customer',
		selector: 'customer.name',
		sortable:  true

	},
	{
		name: 'Bacon',
		selector: 'ingredients.bacon.cant',
	},
	{
		name: 'Salad',
		selector: 'ingredients.salad.cant',
	},
	{
		name: 'Chesse',
		selector: 'ingredients.cheese.cant',
	},
	{
		name: 'Meat',
		selector: 'ingredients.meat.cant',
	},
	{
		name: 'Country',
		selector: 'customer.adress.country',
		sortable:  true
	},
	{
		name: 'City',
		selector: 'customer.adress.city',
		sortable:  true
	},
	{
		name: 'Price (USD)',
		selector: `price`,
		sortable:  true
	},

]

export default columns;