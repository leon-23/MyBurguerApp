import React from 'react';

import Button  from '../../UI/Button/Button';

import classes from './ContactData.css';

const contactData = (
    class  extends React.Component {

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
            return(
                <div className={ classes.ContactData}>
                    <h3> Ingrese sus Datos de Contacto </h3>

                    <form onSubmit={ this.order }>
                        <input className={ classes.Input } type="text" name="name" placeholder="Su nombre" />
                        <input className={ classes.Input } type="email" name="email" placeholder="Su email" />
                        <input className={ classes.Input } type="text" name="country" placeholder="País" />
                        <input className={ classes.Input } type="text" name="city" placeholder="Ciudad" />

                        <Button type="submit" btnType="Success" > Ordenar </Button>  
                    </form>

                </div>
            )
        }
    }
    )

export default contactData;