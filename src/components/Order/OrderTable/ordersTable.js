import React from 'react'
import DataTable from 'react-data-table-component';
import columns from './colums';

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <React.Fragment>
    <input  id="search" type="text" placeholder="Filter By Customer" value={filterText} onChange={onFilter} />
    <button onClick={onClear}>X </button>
  </React.Fragment>
);



const OrderTable = ( {data} )=>{

	const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	const filteredItems = data.filter(item => item.customer.name && item.customer.name.includes(filterText));
	
	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
      		if (filterText) {
        		setResetPaginationToggle(!resetPaginationToggle);
        		setFilterText('');
      		}
    	};

    	return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
  	}, [filterText, resetPaginationToggle]);

	return(
		 <DataTable
	        title="Listado de Ordenes"
	        columns={ columns }
	        data={ filteredItems }
	        pagination
	      	subHeader
	      	subHeaderComponent={subHeaderComponentMemo}
	      	selectableRows
	      	persistTableHead
	     />
	)
}

export default OrderTable;