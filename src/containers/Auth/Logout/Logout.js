import React from 'react';
import { connect } from 'react-redux';

import actions from '../../../store/actions/index';

class Logout extends React.Component {
    render() {
        return (

        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps)(Logout);