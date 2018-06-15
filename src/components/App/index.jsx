import React, { Component } from 'react';
import axios from 'axios';
import CreateHeroForm from '../CreateHeroForm'
import Header from '../Header';
import HeroesList from '../HeroesList';
import Panel from '../Shared/Panel';
import SavedSquadsList from '../SavedSquadsList';
import SquadEditor from '../SquadEditor';
import { getFilteredHeroes } from '../../utils/selectors';
import styles from './styles.css';

const INITIAL_STATE = {
    heroes: [],
    visibleHeroes: [],
    squadEditorList: [],
    searchValue: '',
    squads: [],
    currentSquadStat: {
        str: 0,
        int: 0,
        spd: 0
    }
};

class App extends Component {
    state = {
        ...INITIAL_STATE
    };

    componentDidMount() {
        axios.get('/heroes')
            .then(({data, status}) => {
                if (status === 200) {
                    this.setState({
                        heroes: data,
                        visibleHeroes: data
                    })
                }
        });
        axios.get('/squads')
            .then(({data, status}) => {
                if (status === 200) {
                    this.setState({
                        squads: data,
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
        const addedHero = this.state.heroes.filter(hero => hero.id === heroId);
        this.setState(prevState => ({
            squadEditorList: prevState.squadEditorList.concat(addedHero),
            visibleHeroes: prevState.visibleHeroes.filter(hero => hero.id !== heroId),
            currentSquadStat: {
                str: prevState.currentSquadStat.str + addedHero[0].strength,
                int: prevState.currentSquadStat.int + addedHero[0].intelligence,
                spd: prevState.currentSquadStat.spd + addedHero[0].speed
            }
        }), () => {
            // eslint-disable-next-line
            console.log(this.state);
        });
    };

    deleteHero = heroId => {
        axios.delete(`/heroes/${heroId}`).then( ({status}) => {
            // eslint-disable-next-line
            console.log(status)
            if (status === 200) {
                this.setState(prevState => ({
                    heroes: prevState.heroes.filter(hero => hero.id !== heroId),
                    visibleHeroes: prevState.visibleHeroes.filter(hero => hero.id !== heroId)
                }))
            } else {
                // eslint-disable-next-line
                alert(`Oops.. something went wrong!`);
            }
        }).then( () => {// eslint-disable-next-line
            console.log(this.state);});
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

    addNewHero = newHero => {
        axios.post('/heroes', newHero).then(( { data, status } ) => {
            if (status === 201) {
                this.setState(prevState => ({
                    heroes: [ ...prevState.heroes, data ],
                    visibleHeroes: [ ...prevState.visibleHeroes, data ]
                }))
            } else {
                // eslint-disable-next-line
                alert(`Oops.. something went wrong!`);
            }
        })
    };

    deleteSquad = squadId => {
        this.setState(prevState => ({
            squads: prevState.squads.filter(squad => squad.id !== squadId)
        }), () => {
            // TODO: axios POST delete
            // eslint-disable-next-line
            console.log(this.state);
        });
    };

    saveSquad = () => {
        if (this.state.squadEditorList.length !== 0) {
        const newSquad = { 
            heroes: this.state.squadEditorList,
            stats: this.state.currentSquadStat,
            id: Math.floor(Math.random() * 1000) };

        this.setState(prevState => ({
            squads: prevState.squads.concat(newSquad)
        }), () => {
            this.resetEditor();
        })}
    };

    resetEditor = () => {
        this.setState({
            squadEditorList: [],
            currentSquadStat: {
                str: 0,
                int: 0,
                spd: 0
            },
            visibleHeroes: this.state.heroes
        });
    };

    deleteHeroFromSquad = (heroId) => {
        const returnedHero = this.state.heroes.filter(hero => hero.id === heroId);
        this.setState(prevState => ({
            squadEditorList: prevState.squadEditorList.filter(hero => hero.id !== heroId),
            visibleHeroes: prevState.visibleHeroes.concat(returnedHero),
            currentSquadStat: {
                str: prevState.currentSquadStat.str - returnedHero[0].strength,
                int: prevState.currentSquadStat.int - returnedHero[0].intelligence,
                spd: prevState.currentSquadStat.spd - returnedHero[0].speed
            }
        }), () => {
            // eslint-disable-next-line
            console.log(this.state);
        });
    }

    render() {
        const { searchValue, visibleHeroes, squadEditorList, squads, currentSquadStat } = this.state;
        
        const filteredHeroes = getFilteredHeroes(visibleHeroes, searchValue)

        return (
            <div className={styles.App}>
                <Header titleText='Super Squad' />
                <Panel title='Create Hero' >
                    <Panel>
                        <CreateHeroForm addNewHero={this.addNewHero} />
                    </Panel>
                </Panel>
                <Panel title='Heroes' >
                    <Panel>
                        <input className={styles.searchInput} 
                            placeholder="Search by name"
                            onChange={this.searchByName}
                            value={searchValue} />
                    </Panel>
                    <HeroesList 
                        heroes={filteredHeroes}
                        addHeroToSquad={this.addHeroToSquad}
                        deleteHero={this.deleteHero}
                        showHeroInfo={this.showHeroInfo}
                    />
                </Panel>
                <Panel title='Squad Editor' >
                    <SquadEditor 
                        heroes={squadEditorList}
                        resetEditor={this.resetEditor}
                        saveSquad={this.saveSquad}
                        currentSquadStat={currentSquadStat}
                        showHeroInfo={this.showHeroInfo}
                        deleteHeroFromSquad={this.deleteHeroFromSquad}
                    />
                </Panel>
                <Panel title='Saved Squads' >
                    <SavedSquadsList squads={squads} deleteSquad={this.deleteSquad} />
                </Panel>                
            </div>
        );
    }
}

export default App;
