import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PanelHeroes from '../PanelHeroes';
import SquadEditorPanel from '../SquadEditorPanel';
import Title from '../Title';
import CreateHeroPanel from '../CreateHeroPanel';
import List from '../List';
import { getVisibleHeroes, getHeroesInSquadEditor } from '../../utils/selectors';
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

    addNewHero = newHero => {
        this.setState(prevState => ({
            heroes: prevState.heroes.concat(newHero)
        }), () => {
            // TODO: axios POST add
            // eslint-disable-next-line
            console.log(this.state);
        });
    };

    render() {
        const {heroes, searchValue, squadEditorList} = this.state;
        const { classes } = this.props;
        const visibleHeroes = getVisibleHeroes(heroes, searchValue);
        const SquadEditorList = getHeroesInSquadEditor(heroes, squadEditorList);
        // eslint-disable-next-line
        console.log(SquadEditorList);
        return (
            <div className={styles.App}>
                <Title titleText='Super Squad' />
                <Card className={classes.card}>
                    <CardContent>
                        <Title titleText='Create Block' />
                        <CreateHeroPanel addNewHero = { this.addNewHero } />
                    </CardContent>
                </Card>
                <PanelHeroes 
                        searchValue={searchValue}
                        searchByName={this.searchByName}
                        heroes={visibleHeroes}
                        addHeroToSquad={this.addHeroToSquad}
                        deleteHero={this.deleteHero}
                        showHeroInfo={this.showHeroInfo}
                />
                <Card className={classes.card}>
                    <CardContent>
                        <Title titleText='Squad Editor' />
                        <SquadEditorPanel />
                    </CardContent>
                </Card>
                <Card className={classes.card}>
                    <CardContent>
                        <Title titleText='Saved Squads' />
                        <List />
                    </CardContent>
                </Card>
            </div>
        );
    }
}

App.propTypes = {
    // eslint-disable-next-line
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(App);
