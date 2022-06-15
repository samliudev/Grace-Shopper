const pokemonArr = [
  {
    pokemon_name: 'bulbasaur',
    type: ['Grass', 'Poison'],
    imageUrl: 'https://i.imgur.com/VN6df4o.jpeg',
    price: 9.99,
    description: 'Description to be added here',
    quantity: 10,
  },
  {
    pokemon_name: 'ivysaur',
    type: ['Grass', 'Poison'],
    imageUrl: 'https://i.imgur.com/gktbDGb.jpeg',
    price: 9.99,
    description: 'Description to be added here',
    quantity: 10,
  },
  {
    pokemon_name: 'venusaur',
    type: ['Grass', 'Poison'],
    iamgeUrl: 'https://i.imgur.com/0liEa8F.jpeg',
    price: 9.99,
    description: 'Description to be added here',
    quantity: 10,
  },
  {
    pokemon_name: 'charmander',
    type: ['Fire'],
    imageUrl: 'https://i.imgur.com/HOjIuKA.jpeg',
    price: 9.99,
    description: 'Description to be added here',
    quantity: 10,
  },
  {
    pokemon_name: 'charmeleon',
    type: ['Fire'],
    imageUrl: 'https://i.imgur.com/kKSB3U3.jpeg',
    price: 9.99,
    quantity: 10,
  },
  {
    pokemon_name: 'charizard',
    type: ['Fire'],
    imageUrl: 'https://i.imgur.com/4mI8dBA.jpeg',
    price: 9.99,
    description: 'Description to be added here',
    quantity: 10,
  },
  {
    pokemon_name: 'squirtle',
    type: ['Water'],
    imageUrl: 'https://i.imgur.com/lHHHiNh.jpeg',
    price: 9.99,
    description: 'Description to be added here',
    quantity: 10,
  },
  {
    pokemon_name: 'wartortle',
    type: ['Water'],
    imageUrl: 'https://i.imgur.com/Yd3LVZI.jpeg',
    price: 9.99,
    description: 'Description to be added here',
    quantity: 10,
  },
  {
    pokemon_name: 'blastoise',
    type: ['Water'],
    imageUrl: 'https://i.imgur.com/EXJDRhw.jpeg',
    price: 9.99,
    description: 'Description to be added here',
    quantity: 10,
  },
];
//   {
//     pokemon_name: 'caterpie',
//     type: ['Bug'],
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/10/',
//   },
//   {
//     pokemon_name: 'metapod',
//     type: ['Bug'],
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/11/',
//   },
//   {
//     pokemon_name: 'butterfree',
//     type: ['Bug', 'Flying'],
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/12/',
//   },
//   {
//     pokemon_name: 'weedle',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/13/',
//   },
//   {
//     pokemon_name: 'kakuna',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/14/',
//   },
//   {
//     pokemon_name: 'beedrill',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/15/',
//   },
//   {
//     pokemon_name: 'pidgey',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/16/',
//   },
//   {
//     pokemon_name: 'pidgeotto',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/17/',
//   },
//   {
//     pokemon_name: 'pidgeot',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/18/',
//   },
//   {
//     pokemon_name: 'rattata',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/19/',
//   },
//   {
//     pokemon_name: 'raticate',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/20/',
//   },
//   {
//     pokemon_name: 'spearow',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/21/',
//   },
//   {
//     pokemon_name: 'fearow',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/22/',
//   },
//   {
//     pokemon_name: 'ekans',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/23/',
//   },
//   {
//     pokemon_name: 'arbok',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/24/',
//   },
//   {
//     pokemon_name: 'pikachu',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/25/',
//   },
//   {
//     pokemon_name: 'raichu',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/26/',
//   },
//   {
//     pokemon_name: 'sandshrew',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/27/',
//   },
//   {
//     pokemon_name: 'sandslash',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/28/',
//   },
//   {
//     pokemon_name: 'nidoran-f',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/29/',
//   },
//   {
//     pokemon_name: 'nidorina',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/30/',
//   },
//   {
//     pokemon_name: 'nidoqueen',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/31/',
//   },
//   {
//     pokemon_name: 'nidoran-m',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/32/',
//   },
//   {
//     pokemon_name: 'nidorino',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/33/',
//   },
//   {
//     pokemon_name: 'nidoking',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/34/',
//   },
//   {
//     pokemon_name: 'clefairy',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/35/',
//   },
//   {
//     pokemon_name: 'clefable',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/36/',
//   },
//   {
//     pokemon_name: 'vulpix',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/37/',
//   },
//   {
//     pokemon_name: 'ninetales',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/38/',
//   },
//   {
//     pokemon_name: 'jigglypuff',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/39/',
//   },
//   {
//     pokemon_name: 'wigglytuff',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/40/',
//   },
//   {
//     pokemon_name: 'zubat',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/41/',
//   },
//   {
//     pokemon_name: 'golbat',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/42/',
//   },
//   {
//     pokemon_name: 'oddish',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/43/',
//   },
//   {
//     pokemon_name: 'gloom',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/44/',
//   },
//   {
//     pokemon_name: 'vileplume',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/45/',
//   },
//   {
//     pokemon_name: 'paras',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/46/',
//   },
//   {
//     pokemon_name: 'parasect',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/47/',
//   },
//   {
//     pokemon_name: 'venonat',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/48/',
//   },
//   {
//     pokemon_name: 'venomoth',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/49/',
//   },
//   {
//     pokemon_name: 'diglett',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/50/',
//   },
//   {
//     pokemon_name: 'dugtrio',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/51/',
//   },
//   {
//     pokemon_name: 'meowth',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/52/',
//   },
//   {
//     pokemon_name: 'persian',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/53/',
//   },
//   {
//     pokemon_name: 'psyduck',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/54/',
//   },
//   {
//     pokemon_name: 'golduck',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/55/',
//   },
//   {
//     pokemon_name: 'mankey',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/56/',
//   },
//   {
//     pokemon_name: 'primeape',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/57/',
//   },
//   {
//     pokemon_name: 'growlithe',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/58/',
//   },
//   {
//     pokemon_name: 'arcanine',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/59/',
//   },
//   {
//     pokemon_name: 'poliwag',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/60/',
//   },
//   {
//     pokemon_name: 'poliwhirl',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/61/',
//   },
//   {
//     pokemon_name: 'poliwrath',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/62/',
//   },
//   {
//     pokemon_name: 'abra',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/63/',
//   },
//   {
//     pokemon_name: 'kadabra',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/64/',
//   },
//   {
//     pokemon_name: 'alakazam',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/65/',
//   },
//   {
//     pokemon_name: 'machop',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/66/',
//   },
//   {
//     pokemon_name: 'machoke',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/67/',
//   },
//   {
//     pokemon_name: 'machamp',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/68/',
//   },
//   {
//     pokemon_name: 'bellsprout',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/69/',
//   },
//   {
//     pokemon_name: 'weepinbell',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/70/',
//   },
//   {
//     pokemon_name: 'victreebel',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/71/',
//   },
//   {
//     pokemon_name: 'tentacool',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/72/',
//   },
//   {
//     pokemon_name: 'tentacruel',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/73/',
//   },
//   {
//     pokemon_name: 'geodude',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/74/',
//   },
//   {
//     pokemon_name: 'graveler',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/75/',
//   },
//   {
//     pokemon_name: 'golem',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/76/',
//   },
//   {
//     pokemon_name: 'ponyta',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/77/',
//   },
//   {
//     pokemon_name: 'rapidash',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/78/',
//   },
//   {
//     pokemon_name: 'slowpoke',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/79/',
//   },
//   {
//     pokemon_name: 'slowbro',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/80/',
//   },
//   {
//     pokemon_name: 'magnemite',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/81/',
//   },
//   {
//     pokemon_name: 'magneton',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/82/',
//   },
//   {
//     pokemon_name: 'farfetchd',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/83/',
//   },
//   {
//     pokemon_name: 'doduo',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/84/',
//   },
//   {
//     pokemon_name: 'dodrio',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/85/',
//   },
//   {
//     pokemon_name: 'seel',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/86/',
//   },
//   {
//     pokemon_name: 'dewgong',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/87/',
//   },
//   {
//     pokemon_name: 'grimer',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/88/',
//   },
//   {
//     pokemon_name: 'muk',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/89/',
//   },
//   {
//     pokemon_name: 'shellder',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/90/',
//   },
//   {
//     pokemon_name: 'cloyster',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/91/',
//   },
//   {
//     pokemon_name: 'gastly',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/92/',
//   },
//   {
//     pokemon_name: 'haunter',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/93/',
//   },
//   {
//     pokemon_name: 'gengar',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/94/',
//   },
//   {
//     pokemon_name: 'onix',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/95/',
//   },
//   {
//     pokemon_name: 'drowzee',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/96/',
//   },
//   {
//     pokemon_name: 'hypno',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/97/',
//   },
//   {
//     pokemon_name: 'krabby',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/98/',
//   },
//   {
//     pokemon_name: 'kingler',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/99/',
//   },
//   {
//     pokemon_name: 'voltorb',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/100/',
//   },
//   {
//     pokemon_name: 'electrode',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/101/',
//   },
//   {
//     pokemon_name: 'exeggcute',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/102/',
//   },
//   {
//     pokemon_name: 'exeggutor',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/103/',
//   },
//   {
//     pokemon_name: 'cubone',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/104/',
//   },
//   {
//     pokemon_name: 'marowak',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/105/',
//   },
//   {
//     pokemon_name: 'hitmonlee',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/106/',
//   },
//   {
//     pokemon_name: 'hitmonchan',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/107/',
//   },
//   {
//     pokemon_name: 'lickitung',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/108/',
//   },
//   {
//     pokemon_name: 'koffing',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/109/',
//   },
//   {
//     pokemon_name: 'weezing',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/110/',
//   },
//   {
//     pokemon_name: 'rhyhorn',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/111/',
//   },
//   {
//     pokemon_name: 'rhydon',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/112/',
//   },
//   {
//     pokemon_name: 'chansey',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/113/',
//   },
//   {
//     pokemon_name: 'tangela',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/114/',
//   },
//   {
//     pokemon_name: 'kangaskhan',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/115/',
//   },
//   {
//     pokemon_name: 'horsea',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/116/',
//   },
//   {
//     pokemon_name: 'seadra',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/117/',
//   },
//   {
//     pokemon_name: 'goldeen',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/118/',
//   },
//   {
//     pokemon_name: 'seaking',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/119/',
//   },
//   {
//     pokemon_name: 'staryu',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/120/',
//   },
//   {
//     pokemon_name: 'starmie',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/121/',
//   },
//   {
//     pokemon_name: 'mr-mime',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/122/',
//   },
//   {
//     pokemon_name: 'scyther',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/123/',
//   },
//   {
//     pokemon_name: 'jynx',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/124/',
//   },
//   {
//     pokemon_name: 'electabuzz',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/125/',
//   },
//   {
//     pokemon_name: 'magmar',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/126/',
//   },
//   {
//     pokemon_name: 'pinsir',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/127/',
//   },
//   {
//     pokemon_name: 'tauros',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/128/',
//   },
//   {
//     pokemon_name: 'magikarp',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/129/',
//   },
//   {
//     pokemon_name: 'gyarados',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/130/',
//   },
//   {
//     pokemon_name: 'lapras',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/131/',
//   },
//   {
//     pokemon_name: 'ditto',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/132/',
//   },
//   {
//     pokemon_name: 'eevee',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/133/',
//   },
//   {
//     pokemon_name: 'vaporeon',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/134/',
//   },
//   {
//     pokemon_name: 'jolteon',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/135/',
//   },
//   {
//     pokemon_name: 'flareon',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/136/',
//   },
//   {
//     pokemon_name: 'porygon',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/137/',
//   },
//   {
//     pokemon_name: 'omanyte',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/138/',
//   },
//   {
//     pokemon_name: 'omastar',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/139/',
//   },
//   {
//     pokemon_name: 'kabuto',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/140/',
//   },
//   {
//     pokemon_name: 'kabutops',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/141/',
//   },
//   {
//     pokemon_name: 'aerodactyl',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/142/',
//   },
//   {
//     pokemon_name: 'snorlax',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/143/',
//   },
//   {
//     pokemon_name: 'articuno',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/144/',
//   },
//   {
//     pokemon_name: 'zapdos',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/145/',
//   },
//   {
//     pokemon_name: 'moltres',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/146/',
//   },
//   {
//     pokemon_name: 'dratini',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/147/',
//   },
//   {
//     pokemon_name: 'dragonair',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/148/',
//   },
//   {
//     pokemon_name: 'dragonite',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/149/',
//   },
//   {
//     pokemon_name: 'mewtwo',
//     imageUrl: 'https://pokeapi.co/api/v2/pokemon/150/',
//   },
// ];
module.exports = pokemonArr;
