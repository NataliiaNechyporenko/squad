import React, { Component } from 'react';
import axios from 'axios';
import Card from '../Card';
import Header from '../Header';
import List from '../List';
import Panel from '../Panel';
import { getVisibleHeroes } from '../../utils/selectors';
import styles from './styles.css';

class App extends Component {
    state = {
        heroes: [],
        squadEditorList: [],
        searchValue: ''
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

    searchByName = (evt) => {
        const value = evt.target.value;
        this.setState({
            searchValue: value
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

    deleteHero = heroId => {
        this.setState(prevState => ({
            heroes: prevState.heroes.filter(hero => hero.id !== heroId)
        }), () => {
            // TODO: axios POST delete
            // eslint-disable-next-line
            console.log(this.state);
        });
    };

    showHeroInfo = heroId => {
        const currentHero = this.state.heroes.filter(hero => hero.id === heroId)[0];
        const heroInfo = `[Hero Info] 
        name: ${currentHero.name}
        str: ${currentHero.strength}
        int: ${currentHero.intelligence}
        spd: ${currentHero.speed}`;
        // eslint-disable-next-line
        console.log(heroInfo);
    };

    render() {
        const {heroes, searchValue} = this.state;
        
        const visibleHeroes = getVisibleHeroes(heroes, searchValue)

        return (
            <div className={styles.App}>
                <Header titleText='Super Squad' />
                <Panel title='Create Hero' >
                    <div>Create Block</div>
                </Panel>
                <Panel title='Heroes' >
                    <Card>
                        <input className={styles.searchInput} 
                            placeholder="Search by name"
                            onChange={this.searchByName}
                            value={searchValue} />
                    </Card>
                    <List 
                        heroes={visibleHeroes}
                        addHeroToSquad={this.addHeroToSquad}
                        deleteHero={this.deleteHero}
                        showHeroInfo={this.showHeroInfo}
                    />
                </Panel>
                <Panel title='Squad Editor' >
                    <List />
                </Panel>
            </div>
        );
    }
}

export default App;
