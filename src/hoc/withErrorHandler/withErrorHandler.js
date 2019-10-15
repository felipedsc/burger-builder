import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Wrapper from '../Wrapper/Wrapper';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = { error: null };

        constructor() {
            super();

            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null });

                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount() {
            console.log('[withErrorHandler] Will Unmount', this.reqInterceptor, this.resInterceptor);
            
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Wrapper>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>

                    <WrappedComponent {...this.props} />
                </Wrapper>
            );
        }
    };
}

export default withErrorHandler;