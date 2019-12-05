import React from 'react';

import Button  from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

import classes from './ContactData.css';
import inputsConfig from './inputsConfig';

const contactData = (
    class  extends React.Component {

        constructor(props){
            super(props);

            this.state={
                inputs: inputsConfig
            }   
        }

        onChangeHandler = (event)=>{
            let key = event.target.name;

           const inputs = {...this.state.inputs };
           const inputEdit = {...inputs[key] } ;

           if(!inputEdit.touched)
                inputEdit.touched = true;

            inputEdit.valid = event.target.value.length > 3 ? true : false; 
            
            inputs[key] = inputEdit;
            
            this.setState({
                inputs : inputs
            })
        }

        order =(event)=>{
            event.preventDefault();
            let form = event.target;
            
        let customer= {
                name: form.name.value,
                email: form.email.value,
                adress: {
                    country: form.country.value,
                    city: form.city.value
                }
            }

            this.props.ordenar(customer)
            form.reset();
        }
       
        render(){
            const inputs = [];
            let disabled = false; //habililar Boton de ordernar

            for(let key in this.state.inputs){
                inputs.push( 
                    <Input 
                        key={ key }
                         inputType={ this.state.inputs[key].inputType }
                         config={ this.state.inputs[key].config } 
                         change={ this.onChangeHandler }
                         valid={ this.state.inputs[key].valid }
                         touched={ this.state.inputs[key].touched }
                    />
                )
                
                if(!this.state.inputs[key].valid)
                    disabled = true
            }
            

            return(
                <div className={ classes.ContactData}>
                    <h3> Ingrese sus Datos de Contacto </h3>

                    <form onSubmit={ this.order }>
                       
                       { inputs }

                        <Button type="submit" btnType="Success" disabled={ disabled }> Ordenar </Button>  
                    </form>

                </div>
            )
        }
    }
)

export default contactData;