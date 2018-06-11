export const getVisibleHeroes = (heroes, searchValue) => 
heroes.filter(hero => hero.name.includes(searchValue));

export const getHeroesInSquadEditor = (heroes, squadEditorList) => 
squadEditorList.map(id => heroes.filter(hero => hero.id === id ));
