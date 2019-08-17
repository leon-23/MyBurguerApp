import React from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Modal.css';


class Modal extends React.Component{
    
    shouldComponentUpdate(nextProps, nextState) {
<<<<<<< HEAD
        return nextProps.show !== this.props.show;
=======
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
        
>>>>>>> 353169824bb9bbe90761987b1f27d1258631cbd6
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
            </Aux>
        )
    }
} 
export default Modal;