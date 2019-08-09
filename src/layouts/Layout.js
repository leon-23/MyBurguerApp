import React from 'react'
import Aux  from '../hoc/Aux';

import classes from './Layout.css'

import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../components/Navigation/SideDrawer/SideDrawer';
import Backdrop from '../components/UI/Backdrop/BackDrop';

class Layout extends React.Component{

	constructor(props){
		super(props);

		this.state ={
			show : true
		}
	}

	toogleSideDrawer = ()=>{

		this.setState({
			show: !this.state.show
		})
	}
	render(){
			
		return(

			<Aux> 
				<Toolbar click={ this.toogleSideDrawer }/> 
				<SideDrawer show={ this.state.show } />

				<main className = { classes.Content }> { this.props.children }</main>

				<Backdrop
					show={ this.state.show }
					click = { this.toogleSideDrawer }
				/>
			</Aux>
		);
	}	
}
export default Layout;