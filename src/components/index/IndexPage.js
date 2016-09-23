import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';

class IndexPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        browserHistory.push('/home');
    }

    render() { return null; }

}

export default IndexPage;