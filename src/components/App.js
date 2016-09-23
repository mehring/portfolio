import React, {PropTypes} from 'react';
import Header from './common/header/Header';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="ms-bg"></div>
                <div className="ms-main-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;