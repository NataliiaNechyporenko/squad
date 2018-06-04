import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header';
import List from '../List';
import Panel from '../Panel';
import styles from './styles.css';

class App extends Component {
    state = {
        heroes: []
    };

    componentDidMount() {
        axios.get('/heroes')
            .then(({data, status}) => {
                if (status === 200) {
                    this.setState({
                        heroes: data
                    })
                }
            });
    };

    render() {
        const {heroes} = this.state;
        return (
            <div className={styles.App}>
                <Header titleText='Super Squad' />
                <Panel title='Create Hero' >
                    <div>Create Block</div>
                </Panel>
                <Panel title='Heroes' >
                    <List heroes={heroes} />
                </Panel>
            </div>
        );
    }
}

export default App;
