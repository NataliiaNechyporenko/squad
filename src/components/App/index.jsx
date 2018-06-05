import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header';
import List from '../List';
import Panel from '../Panel';
import styles from './styles.css';

class App extends Component {
    state = {
        heroes: [],
        squadEditorList: []
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

    addHeroToSquad = heroId => {
        this.setState(prevState => ({
            squadEditorList: prevState.squadEditorList.concat(heroId),
            heroes: prevState.heroes.filter(hero => hero.id !== heroId)
        }), () => {
            // eslint-disable-next-line
            console.log(this.state);
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
                    <List heroes={heroes} addHeroToSquad={this.addHeroToSquad} />
                </Panel>
                <Panel title='Squad Editor' >
                    <List />
                </Panel>
            </div>
        );
    }
}

export default App;
