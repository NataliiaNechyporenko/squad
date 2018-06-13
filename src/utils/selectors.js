export const getFilteredHeroes = (heroes, searchValue) => 
heroes.filter(hero => hero.name.toLowerCase().includes(searchValue.toLowerCase()));

export const x=5;