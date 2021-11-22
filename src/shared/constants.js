class Constants{
    static api = 'https://pokedexapirest.herokuapp.com/RotaPokemon';
    static b1 = '#E5E5E5';
    static b2 = '#F5F5F5';
    static b3 = '#DEE0E0';
    static fire = '#F46363';
    static fire2 = '#FD8686';
    static glass = '#42BFA2';
    static glass2 = '#3DD1AF';
    static ice = '#A1CCF2';
    static ice2 = '#CEE6FC';
    static water = '#76BDFE';
    static water2 = '#97CDFF';
    static fairy = '#F0A8DC';
    static fairy2 = '#FCC7ED';
    static electric = '#FBC638';
    static electric2 = '#FFD86F';
    static psychic = '#7C538C';
    static psychic2 = '#B58DC5';
    static dragon = '#E18836';
    static dragon2 = '#EEB27A';
    static ghost = '#343B3E';
    static ghost2 = '#7A7D7D';
    static steel = '#494F4D';
    static rock = '#B1736C';
    static rock2 = '#AC8480';
    static ground = '#B78F6A';
    static ground2 = '#CF9D6F';
    static bug = '#2B826E';
    static bug2 = '#1EB491';
    static fighting = '#755B59';
    static fighting2 = '#A18683';
    static dark = '#222424';
    static pokeball = 'M54.5 0C25.2106 0 1.24777 23.1743 0 52.1304H33.1503H33.2893C34.4707 41.4674 43.512 33.1739 54.5 33.1739C65.488 33.1739 74.5293 41.4674 75.7107 52.1304H109C107.752 23.1743 83.7894 0 54.5 0ZM54.5 42.6522C51.3543 42.6522 48.3374 43.9004 46.1131 46.1223C43.8887 48.3442 42.6391 51.3578 42.6391 54.5C42.6391 57.6422 43.8887 60.6558 46.1131 62.8777C48.3374 65.0996 51.3543 66.3478 54.5 66.3478C57.6457 66.3478 60.6626 65.0996 62.8869 62.8777C65.1113 60.6558 66.3609 57.6422 66.3609 54.5C66.3609 51.3578 65.1113 48.3442 62.8869 46.1223C60.6626 43.9004 57.6457 42.6522 54.5 42.6522ZM0 56.8696C1.24777 85.8257 25.2106 109 54.5 109C83.7894 109 107.752 85.8257 109 56.8696H75.8497H75.7107C74.5293 67.5326 65.488 75.8261 54.5 75.8261C43.512 75.8261 34.4707 67.5326 33.2893 56.8696H33.1503H0Z';
    static plus = 'M10.5 0C4.70138 0 0 4.70138 0 10.5C0 16.2986 4.70138 21 10.5 21C16.2986 21 21 16.2986 21 10.5C21 4.70138 16.2986 0 10.5 0ZM14.875 11.375H11.375V14.875C11.375 15.3589 10.983 15.75 10.5 15.75C10.017 15.75 9.625 15.3589 9.625 14.875V11.375H6.125C5.642 11.375 5.25 10.9839 5.25 10.5C5.25 10.0161 5.642 9.625 6.125 9.625H9.625V6.125C9.625 5.64113 10.017 5.25 10.5 5.25C10.983 5.25 11.375 5.64113 11.375 6.125V9.625H14.875C15.358 9.625 15.75 10.0161 15.75 10.5C15.75 10.9839 15.358 11.375 14.875 11.375Z';
    static filter = 'M0.97083 9.54611e-05C0.84399 -0.00169339 0.718058 0.021675 0.600354 0.0688425C0.482649 0.11601 0.375518 0.186036 0.285188 0.27485C0.194857 0.363665 0.123129 0.469498 0.0741701 0.586197C0.0252117 0.702897 0 0.828136 0 0.954637C0 1.08114 0.0252117 1.20638 0.0741701 1.32308C0.123129 1.43978 0.194857 1.54561 0.285188 1.63442C0.375518 1.72324 0.482649 1.79326 0.600354 1.84043C0.718058 1.8876 0.84399 1.91097 0.97083 1.90918H1.73734L8.62841 10.5H14.3716L21.2627 1.90918H22.0292C22.156 1.91097 22.2819 1.8876 22.3996 1.84043C22.5174 1.79326 22.6245 1.72324 22.7148 1.63442C22.8051 1.54561 22.8769 1.43978 22.9258 1.32308C22.9748 1.20638 23 1.08114 23 0.954637C23 0.828136 22.9748 0.702897 22.9258 0.586197C22.8769 0.469498 22.8051 0.363665 22.7148 0.27485C22.6245 0.186036 22.5174 0.11601 22.3996 0.0688425C22.2819 0.021675 22.156 -0.00169339 22.0292 9.54611e-05H0.97083ZM8.62841 12.4091V21L14.3716 19.0909V12.4091H8.62841Z';
    static types = [{"name": "grass"},{"name": "fire"},{"name": "water"},{"name": "ice"},{"name": "electric"},{"name": "fairy"},{"name": "dragon"},{"name": "psychic"},{"name": "steel"},{"name": "ghost"},{"name": "ground"},{"name": "rock"},{"name": "fighting"},{"name": "bug"},{"name": "dark"},{"name": "normal"},{"name": "flying"},{"name": "poison"}];

    static GetColor(type) {
        switch (type) {
            case 'grass':
                return {"primary": this.glass, "secundary": this.glass2}
            case 'fire':
                return {"primary": this.fire, "secundary": this.fire2}
            case 'water':
                return {"primary": this.water, "secundary": this.water2}
            case 'ice':
                return {"primary": this.ice, "secundary": this.ice2}
            case 'electric':
                return {"primary": this.electric, "secundary": this.electric2}
            case 'fairy':
                return {"primary": this.fairy, "secundary": this.fairy2}
            case 'dragon':
                return {"primary": this.dragon, "secundary": this.dragon2}
            case 'psychic':
                return {"primary": this.psychic, "secundary": this.psychic2}
            case 'steel':
                return {"primary": this.steel, "secundary": this.ghost2}
            case 'ghost':
                return {"primary": this.ghost, "secundary": this.ghost2}
            case 'ground':
                return {"primary": this.ground, "secundary": this.ground2}
            case 'rock':
                return {"primary": this.rock, "secundary": this.rock2}
            case 'fighting':
                return {"primary": this.fighting, "secundary": this.fighting2}
            case 'bug':
                return {"primary": this.bug, "secundary": this.bug2}
            case 'dark':
                return {"primary": this.dark, "secundary": this.steel}
            case 'normal':
                return {"primary": this.ghost2, "secundary": this.steel}
            case 'flying':
                return {"primary": this.ghost2, "secundary": this.b2}
            case 'poison':
                return {"primary": this.psychic, "secundary": this.psychic2}
            default:
                return {"primary": this.b1, "secundary": this.b2}
        }
    }
}

export default Constants