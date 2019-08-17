import React from 'react';
import Aux from '../../../hoc/Aux'; 
import classes from './Modal.css';
import BackDrop from '../Backdrop/BackDrop';


class Modal extends React.Component{
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
        
    }

    render(){
        return(

            <Aux>
                <div className= { classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                    { this.props.children }
                </div>

                <BackDrop show={ this.props.show }  
					click= { this.props.click } />
            </Aux>
        )
    }
} 
export default Modal;