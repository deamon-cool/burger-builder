import React from 'react';
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../../high-order-components/Auxiliary';

const withErrorHandler = (WrappedComponent) => {
    return class extends React.Component {
        state = {
            error: null
        }

        componentDidMount() {

        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux >
            );
        }
    }
}

export default withErrorHandler;