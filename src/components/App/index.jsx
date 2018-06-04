import React, { Component } from 'react';
import styles from './styles.css';

class App extends Component {
    state = {
        in: ''
    }

    render() {
        return (
            <div className={styles.App}>
                Hello World!
            </div>

        );
    }
}

export default App;
