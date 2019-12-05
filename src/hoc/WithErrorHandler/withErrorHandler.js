import React from 'react';
import axios from '../../axios-orders';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux';

const withErrorHandler = ( WrappedComponent)=>{

     return class extends React.Component {
       
        constructor(props){
            super(props);
            
            this.state = {
                error: null
            }
        }
        
        UNSAFE_componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req =>{
                this.setState({
                    error: null
                })
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res =>  res , err=>{
                this.setState({
                    error : err
                })
                return Promise.reject(err);
            }
            )
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = ()=>{
            this.setState({
                error: null
            })
        }

        render(){
            return (
                <Aux>
                    <Modal show={ this.state.error } click={ this.errorConfirmedHandler }>
                        
                        { this.state.error ? this.state.error.message : null }

                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}

export default withErrorHandler;