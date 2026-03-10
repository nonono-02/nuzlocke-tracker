'use strict';

const POKEMON_IDS = {
  Sandshrew:27, Sandslash:28, Pikachu:25, Raichu:26,
  Jigglypuff:39, Wigglytuff:40, Zubat:41, Golbat:42,
  Oddish:43, Gloom:44, Vileplume:45, Bellossom:182,
  Abra:63, Kadabra:64, Alakazam:65,
  Machop:66, Machoke:67, Machamp:68,
  Tentacool:72, Tentacruel:73,
  Geodude:74, Graveler:75, Golem:76,
  Magnemite:81, Magneton:82,
  Grimer:88, Muk:89,
  Voltorb:100, Electrode:101,
  Koffing:109, Weezing:110,
  Rhyhorn:111, Rhydon:112,
  Pinsir:127,
  Marill:183, Azumarill:184,
  Natu:177, Xatu:178,
  Girafarig:203,
  Wobbuffet:202,
  Heracross:214,
  Slugma:218, Magcargo:219,
  Skarmory:227,
  Treecko:252, Grovyle:253, Sceptile:254,
  Torchic:255, Combusken:256, Blaziken:257,
  Mudkip:258, Marshtomp:259, Swampert:260,
  Poochyena:261, Mightyena:262,
  Zigzagoon:263, Linoone:264,
  Wurmple:265, Silcoon:266, Beautifly:267, Cascoon:268, Dustox:269,
  Lotad:270, Lombre:271, Ludicolo:272,
  Seedot:273, Nuzleaf:274, Shiftry:275,
  Taillow:276, Swellow:277,
  Wingull:278, Pelipper:279,
  Ralts:280, Kirlia:281, Gardevoir:282,
  Surskit:283, Masquerain:284,
  Shroomish:285, Breloom:286,
  Slakoth:287, Vigoroth:288, Slaking:289,
  Nincada:290, Ninjask:291, Shedinja:292,
  Whismur:293, Loudred:294, Exploud:295,
  Makuhita:296, Hariyama:297,
  Azurill:298, Nosepass:299,
  Skitty:300, Delcatty:301,
  Sableye:302, Mawile:303,
  Aron:304, Lairon:305, Aggron:306,
  Meditite:307, Medicham:308,
  Electrike:309, Manectric:310,
  Plusle:311, Minun:312,
  Volbeat:313, Illumise:314,
  Roselia:315,
  Gulpin:316, Swalot:317,
  Carvanha:318, Sharpedo:319,
  Wailmer:320, Wailord:321,
  Numel:322, Camerupt:323,
  Torkoal:324,
  Spoink:325, Grumpig:326,
  Spinda:327,
  Trapinch:328, Vibrava:329, Flygon:330,
  Cacnea:331, Cacturne:332,
  Swablu:333, Altaria:334,
  Zangoose:335, Seviper:336,
  Lunatone:337, Solrock:338,
  Barboach:339, Whiscash:340,
  Corphish:341, Crawdaunt:342,
  Baltoy:343, Claydol:344,
  Lileep:345, Cradily:346,
  Anorith:347, Armaldo:348,
  Feebas:349, Milotic:350,
  Castform:351,
  Kecleon:352,
  Shuppet:353, Banette:354,
  Duskull:355, Dusclops:356,
  Tropius:357,
  Chimecho:358,
  Absol:359,
  Snorunt:361, Glalie:362,
  Spheal:363, Sealeo:364, Walrein:365,
  Clamperl:366, Huntail:367, Gorebyss:368,
  Relicanth:369, Luvdisc:370,
  Bagon:371, Shelgon:372, Salamence:373,
  Beldum:374, Metang:375, Metagross:376,
  Regirock:377, Regice:378, Registeel:379,
  Latias:380, Latios:381,
  Kyogre:382, Groudon:383, Rayquaza:384,
};

function spriteUrl(name) {
  const id = POKEMON_IDS[name];
  if (!id) return null;
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

const EVOLUTIONS = {
  Treecko:['Grovyle'], Grovyle:['Sceptile'],
  Torchic:['Combusken'], Combusken:['Blaziken'],
  Mudkip:['Marshtomp'], Marshtomp:['Swampert'],
  Poochyena:['Mightyena'],
  Zigzagoon:['Linoone'],
  Wurmple:['Silcoon','Cascoon'], Silcoon:['Beautifly'], Cascoon:['Dustox'],
  Lotad:['Lombre'], Lombre:['Ludicolo'],
  Seedot:['Nuzleaf'], Nuzleaf:['Shiftry'],
  Taillow:['Swellow'],
  Wingull:['Pelipper'],
  Ralts:['Kirlia'], Kirlia:['Gardevoir'],
  Surskit:['Masquerain'],
  Shroomish:['Breloom'],
  Slakoth:['Vigoroth'], Vigoroth:['Slaking'],
  Nincada:['Ninjask'],
  Whismur:['Loudred'], Loudred:['Exploud'],
  Makuhita:['Hariyama'],
  Skitty:['Delcatty'],
  Aron:['Lairon'], Lairon:['Aggron'],
  Meditite:['Medicham'],
  Electrike:['Manectric'],
  Gulpin:['Swalot'],
  Carvanha:['Sharpedo'],
  Wailmer:['Wailord'],
  Numel:['Camerupt'],
  Spoink:['Grumpig'],
  Trapinch:['Vibrava'], Vibrava:['Flygon'],
  Cacnea:['Cacturne'],
  Swablu:['Altaria'],
  Barboach:['Whiscash'],
  Corphish:['Crawdaunt'],
  Baltoy:['Claydol'],
  Lileep:['Cradily'],
  Anorith:['Armaldo'],
  Feebas:['Milotic'],
  Shuppet:['Banette'],
  Duskull:['Dusclops'],
  Snorunt:['Glalie'],
  Spheal:['Sealeo'], Sealeo:['Walrein'],
  Clamperl:['Huntail','Gorebyss'],
  Bagon:['Shelgon'], Shelgon:['Salamence'],
  Beldum:['Metang'], Metang:['Metagross'],
  Zubat:['Golbat'],
  Oddish:['Gloom'], Gloom:['Vileplume','Bellossom'],
  Abra:['Kadabra'], Kadabra:['Alakazam'],
  Machop:['Machoke'], Machoke:['Machamp'],
  Geodude:['Graveler'], Graveler:['Golem'],
  Tentacool:['Tentacruel'],
  Voltorb:['Electrode'],
  Koffing:['Weezing'],
  Magnemite:['Magneton'],
  Jigglypuff:['Wigglytuff'],
  Marill:['Azumarill'],
  Slugma:['Magcargo'],
  Grimer:['Muk'],
  Sandshrew:['Sandslash'],
  Natu:['Xatu'],
  Rhyhorn:['Rhydon'],
};

const EMERALD_ENCOUNTERS = [
  { id:'starter',    location:'Littleroot Town', area:'Professor Birch', available:['Treecko','Torchic','Mudkip'] },
  { id:'route101',   location:'Route 101', area:'Tall Grass', available:['Poochyena','Zigzagoon'] },
  { id:'route102',   location:'Route 102', area:'Tall Grass', available:['Poochyena','Zigzagoon','Lotad','Seedot','Wurmple'] },
  { id:'route103',   location:'Route 103', area:'Tall Grass', available:['Poochyena','Zigzagoon'] },
  { id:'route104s',  location:'Route 104 (S)', area:'Tall Grass', available:['Marill','Wingull','Tentacool'] },
  { id:'pburg_woods',location:'Petalburg Woods', area:'Forest', available:['Shroomish','Slakoth','Wurmple','Silcoon','Cascoon'] },
  { id:'route104n',  location:'Route 104 (N)', area:'Tall Grass', available:['Poochyena','Wingull','Taillow'] },
  { id:'route116',   location:'Route 116', area:'Tall Grass', available:['Skitty','Whismur','Nincada','Abra','Zigzagoon'] },
  { id:'rusturf',    location:'Rusturf Tunnel', area:'Cave', available:['Whismur'] },
  { id:'route110',   location:'Route 110', area:'Tall Grass', available:['Plusle','Minun','Electrike','Wingull','Zigzagoon'] },
  { id:'route117',   location:'Route 117', area:'Tall Grass', available:['Marill','Poochyena','Plusle','Minun','Roselia','Volbeat','Illumise'] },
  { id:'route111g',  location:'Route 111 (Grass)', area:'Tall Grass', available:['Numel','Lairon'] },
  { id:'route111d',  location:'Route 111 (Desert)', area:'Sand', available:['Sandshrew','Sandslash','Cacnea','Trapinch'] },
  { id:'route112',   location:'Route 112', area:'Tall Grass', available:['Marill','Numel'] },
  { id:'fiery_path', location:'Fiery Path', area:'Cave', available:['Koffing','Torkoal','Grimer'] },
  { id:'jagged',     location:'Jagged Pass', area:'Tall Grass', available:['Numel','Machop','Spoink'] },
  { id:'route113',   location:'Route 113', area:'Ash Grass', available:['Spinda','Skarmory','Slugma','Sandshrew'] },
  { id:'route114',   location:'Route 114', area:'Tall Grass', available:['Poochyena','Lombre','Nuzleaf','Seviper','Zangoose'] },
  { id:'route115',   location:'Route 115', area:'Tall Grass', available:['Swablu','Jigglypuff','Wingull'] },
  { id:'route118',   location:'Route 118', area:'Tall Grass', available:['Electrike','Wingull','Zigzagoon','Kecleon'] },
  { id:'route119',   location:'Route 119', area:'Tall Grass', available:['Tropius','Zigzagoon','Kecleon','Oddish'] },
  { id:'route120',   location:'Route 120', area:'Tall Grass', available:['Absol','Oddish','Kecleon','Gloom'] },
  { id:'route121',   location:'Route 121', area:'Tall Grass', available:['Shuppet','Zigzagoon','Kecleon'] },
  { id:'safari',     location:'Safari Zone', area:'Safari', available:['Pikachu','Natu','Girafarig','Oddish','Wobbuffet','Pinsir','Heracross','Rhyhorn'] },
  { id:'mt_pyre',    location:'Mt. Pyre (Inside)', area:'Cave', available:['Shuppet','Duskull'] },
  { id:'route123',   location:'Route 123', area:'Tall Grass', available:['Shuppet','Roselia','Oddish','Gloom'] },
  { id:'shoal',      location:'Shoal Cave', area:'Cave', available:['Spheal','Snorunt','Zubat'] },
  { id:'new_mauville',location:'New Mauville', area:'Building', available:['Voltorb','Electrike','Magneton'] },
  { id:'seafloor',   location:'Seafloor Cavern', area:'Cave', available:['Zubat','Golbat','Wailmer','Tentacruel'] },
  { id:'cave_origin',location:'Cave of Origin', area:'Cave', available:['Zubat','Golbat'] },
  { id:'sky_pillar', location:'Sky Pillar', area:'Tower', available:['Claydol','Banette','Mawile','Altaria','Golbat'] },
  { id:'vict_road',  location:'Victory Road', area:'Cave', available:['Golbat','Hariyama','Mightyena','Medicham','Lairon','Geodude'] },
];

const EMERALD_TRAINERS = [
  {
    id:'roxanne', name:'Roxanne', title:'Gym Leader', location:'Rustboro City',
    badge:'Stone Badge', type:'Rock', levelCap:18,
    pokemon:[
      { name:'Geodude', level:15, moves:['Rock Throw','Defense Curl','Tackle','Harden'] },
      { name:'Geodude', level:15, moves:['Rock Throw','Defense Curl','Tackle','Harden'] },
      { name:'Nosepass', level:18, moves:['Rock Throw','Harden','Block','Tackle'] },
    ]
  },
  {
    id:'brawly', name:'Brawly', title:'Gym Leader', location:'Dewford Town',
    badge:'Knuckle Badge', type:'Fight', levelCap:20,
    pokemon:[
      { name:'Machop', level:17, moves:['Low Kick','Leer','Focus Energy','Karate Chop'] },
      { name:'Meditite', level:17, moves:['Confusion','Detect','Hidden Power','Endure'] },
      { name:'Makuhita', level:20, moves:['Arm Thrust','Vital Throw','Fake Out','Sand Attack'] },
    ]
  },
  {
    id:'wattson', name:'Wattson', title:'Gym Leader', location:'Mauville City',
    badge:'Dynamo Badge', type:'Electric', levelCap:24,
    pokemon:[
      { name:'Voltorb', level:20, moves:['Rollout','Spark','Screech','Charge'] },
      { name:'Electrike', level:20, moves:['Quick Attack','Spark','Leer','Howl'] },
      { name:'Magneton', level:22, moves:['Thunder Wave','Supersonic','Spark','Metal Sound'] },
      { name:'Manectric', level:24, moves:['Spark','Quick Attack','Leer','Howl'] },
    ]
  },
  {
    id:'flannery', name:'Flannery', title:'Gym Leader', location:'Lavaridge Town',
    badge:'Heat Badge', type:'Fire', levelCap:29,
    pokemon:[
      { name:'Numel', level:26, moves:['Magnitude','Ember','Focus Energy','Sunny Day'] },
      { name:'Slugma', level:26, moves:['Smog','Ember','Rock Slide','Amnesia'] },
      { name:'Camerupt', level:28, moves:['Rock Slide','Ember','Attract','Amnesia'] },
      { name:'Torkoal', level:29, moves:['Body Slam','Flamethrower','Attract','Overheat'] },
    ]
  },
  {
    id:'norman', name:'Norman', title:'Gym Leader', location:'Petalburg City',
    badge:'Balance Badge', type:'Normal', levelCap:31,
    pokemon:[
      { name:'Spinda', level:27, moves:['Psybeam','Facade','Teeter Dance','Encore'] },
      { name:'Vigoroth', level:27, moves:['Slash','Facade','Faint Attack','Encore'] },
      { name:'Linoone', level:29, moves:['Slash','Belly Drum','Facade','Headbutt'] },
      { name:'Slaking', level:31, moves:['Yawn','Facade','Swagger','Blizzard'] },
    ]
  },
  {
    id:'winona', name:'Winona', title:'Gym Leader', location:'Fortree City',
    badge:'Feather Badge', type:'Flying', levelCap:35,
    pokemon:[
      { name:'Swablu', level:31, moves:['Peck','Safeguard','Mist','Mirror Move'] },
      { name:'Tropius', level:31, moves:['Magical Leaf','Synthesis','Stomp','Whirlwind'] },
      { name:'Pelipper', level:30, moves:['Surf','Protect','Ice Beam','Shock Wave'] },
      { name:'Skarmory', level:33, moves:['Steel Wing','Sand Attack','Spikes','Fly'] },
      { name:'Altaria', level:35, moves:['Dragon Dance','Dragonbreath','Sing','Aerial Ace'] },
    ]
  },
  {
    id:'tate_liza', name:'Tate & Liza', title:'Gym Leaders', location:'Mossdeep City',
    badge:'Mind Badge', type:'Psychic', levelCap:42,
    pokemon:[
      { name:'Lunatone', level:42, moves:['Confusion','Hypnosis','Calm Mind','Light Screen'] },
      { name:'Solrock', level:42, moves:['Confusion','Sunny Day','Calm Mind','Flamethrower'] },
    ]
  },
  {
    id:'juan', name:'Juan', title:'Gym Leader', location:'Sootopolis City',
    badge:'Rain Badge', type:'Water', levelCap:46,
    pokemon:[
      { name:'Luvdisc', level:41, moves:['Attract','Sweet Kiss','Water Pulse','Flail'] },
      { name:'Whiscash', level:41, moves:['Tickle','Surf','Amnesia','Earthquake'] },
      { name:'Sealeo', level:43, moves:['Surf','Ice Ball','Body Slam','Aurora Beam'] },
      { name:'Crawdaunt', level:43, moves:['Surf','Crabhammer','Swords Dance','Taunt'] },
      { name:'Kingdra', level:46, moves:['Surf','Double Team','Dragon Dance','Hyper Beam'] },
    ]
  },
  {
    id:'sidney', name:'Sidney', title:'Elite Four', location:'Ever Grande City',
    badge:null, type:'Dark', levelCap:49,
    pokemon:[
      { name:'Mightyena', level:46, moves:['Crunch','Roar','Taunt','Sand Attack'] },
      { name:'Shiftry', level:48, moves:['Extrasensory','Fake Out','Swagger','Torment'] },
      { name:'Sharpedo', level:48, moves:['Surf','Ice Beam','Crunch','Slash'] },
      { name:'Cacturne', level:46, moves:['Faint Attack','Spikes','Needle Arm','Cotton Spore'] },
      { name:'Absol', level:49, moves:['Slash','Bite','Swords Dance','Future Sight'] },
    ]
  },
  {
    id:'phoebe', name:'Phoebe', title:'Elite Four', location:'Ever Grande City',
    badge:null, type:'Ghost', levelCap:51,
    pokemon:[
      { name:'Dusclops', level:48, moves:['Shadow Ball','Confuse Ray','Ice Beam','Will-O-Wisp'] },
      { name:'Banette', level:49, moves:['Shadow Ball','Spite','Skill Swap','Grudge'] },
      { name:'Sableye', level:50, moves:['Shadow Ball','Faint Attack','Fake Out','Recover'] },
      { name:'Banette', level:49, moves:['Shadow Ball','Curse','Will-O-Wisp','Skill Swap'] },
      { name:'Dusclops', level:51, moves:['Shadow Ball','Confuse Ray','Ice Beam','Will-O-Wisp'] },
    ]
  },
  {
    id:'glacia', name:'Glacia', title:'Elite Four', location:'Ever Grande City',
    badge:null, type:'Ice', levelCap:53,
    pokemon:[
      { name:'Sealeo', level:50, moves:['Surf','Ice Ball','Body Slam','Sheer Cold'] },
      { name:'Glalie', level:50, moves:['Ice Beam','Hail','Crunch','Light Screen'] },
      { name:'Sealeo', level:52, moves:['Surf','Ice Ball','Body Slam','Sheer Cold'] },
      { name:'Glalie', level:52, moves:['Ice Beam','Hail','Crunch','Explosion'] },
      { name:'Walrein', level:53, moves:['Surf','Blizzard','Sheer Cold','Body Slam'] },
    ]
  },
  {
    id:'drake', name:'Drake', title:'Elite Four', location:'Ever Grande City',
    badge:null, type:'Dragon', levelCap:55,
    pokemon:[
      { name:'Shelgon', level:52, moves:['DragonBreath','Protect','Scary Face','Headbutt'] },
      { name:'Altaria', level:54, moves:['Dragon Dance','DragonBreath','Sing','Earthquake'] },
      { name:'Flygon', level:53, moves:['Crunch','DragonBreath','Flamethrower','Screech'] },
      { name:'Flygon', level:53, moves:['Crunch','DragonBreath','Earthquake','Sand Attack'] },
      { name:'Salamence', level:55, moves:['Fly','Crunch','DragonBreath','Blaze Kick'] },
    ]
  },
  {
    id:'steven', name:'Steven Stone', title:'Champion', location:'Ever Grande City',
    badge:null, type:'Normal', levelCap:58,
    pokemon:[
      { name:'Skarmory', level:57, moves:['Aerial Ace','Toxic','Sand Attack','Spikes'] },
      { name:'Claydol', level:55, moves:['Psychic','Earth Power','Cosmic Power','AncientPower'] },
      { name:'Aggron', level:56, moves:['Iron Tail','Rock Slide','Protect','Double Team'] },
      { name:'Cradily', level:56, moves:['AncientPower','Recover','Confuse Ray','Ingrain'] },
      { name:'Armaldo', level:56, moves:['Slash','AncientPower','X-Scissor','Iron Defense'] },
      { name:'Metagross', level:58, moves:['Meteor Mash','Earthquake','Psychic','Hyper Beam'] },
    ]
  },
];

const EMERALD_BADGES = [
  { id:'stone',   name:'Stone Badge',   color:'#b0a080' },
  { id:'knuckle', name:'Knuckle Badge', color:'#c06030' },
  { id:'dynamo',  name:'Dynamo Badge',  color:'#f8d030' },
  { id:'heat',    name:'Heat Badge',    color:'#f08030' },
  { id:'balance', name:'Balance Badge', color:'#98a8b8' },
  { id:'feather', name:'Feather Badge', color:'#6890f0' },
  { id:'mind',    name:'Mind Badge',    color:'#f878a8' },
  { id:'rain',    name:'Rain Badge',    color:'#6890f0' },
];

const TRAINER_BADGE_MAP = {
  roxanne:'stone', brawly:'knuckle', wattson:'dynamo',
  flannery:'heat', norman:'balance', winona:'feather',
  tate_liza:'mind', juan:'rain'
};

const GAMES = [
  {
    id:'emerald',
    name:'Pokémon Emerald',
    shortName:'Emerald',
    available: true,
    coverUrl:'https://upload.wikimedia.org/wikipedia/en/9/9b/Pokemon_Emerald_Version.png',
  },
  {
    id:'ruby',
    name:'Pokémon Ruby',
    shortName:'Ruby',
    available: false,
    coverUrl:'https://upload.wikimedia.org/wikipedia/en/1/1a/Pokemon_Ruby_EN_boxart.png',
  },
  {
    id:'sapphire',
    name:'Pokémon Sapphire',
    shortName:'Sapphire',
    available: false,
    coverUrl:'https://upload.wikimedia.org/wikipedia/en/6/60/Pokemon_Sapphire_EN_boxart.png',
  },
  {
    id:'firered',
    name:'Pokémon FireRed',
    shortName:'FireRed',
    available: false,
    coverUrl:'https://upload.wikimedia.org/wikipedia/en/f/f3/Pokemon_FireRed_EN_boxart.png',
  },
  {
    id:'leafgreen',
    name:'Pokémon LeafGreen',
    shortName:'LeafGreen',
    available: false,
    coverUrl:'https://upload.wikimedia.org/wikipedia/en/c/ce/Pokemon_LeafGreen_EN_boxart.png',
  },
];

const LS_KEY = 'nuztrack_v1';

let state = {
  runs: {},
  currentRunId: null,
  selectedGame: null,
};

function loadState() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state = { ...state, ...parsed };
    }
  } catch(e) { console.warn('Failed to load state', e); }
}

function saveState() {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(state));
  } catch(e) { console.warn('Failed to save state', e); }
}

function getCurrentRun() {
  if (!state.currentRunId) return null;
  return state.runs[state.currentRunId] || null;
}

function makeRunId() {
  return 'run_' + Date.now() + '_' + Math.random().toString(36).slice(2,7);
}

function createNewRun(game, name) {
  const id = makeRunId();
  const encounters = {};
  EMERALD_ENCOUNTERS.forEach(e => {
    encounters[e.id] = { pokemon: '', nickname: '', status: 'none' };
  });
  const run = {
    id, game, name,
    createdAt: Date.now(),
    encounters,
    defeatedTrainers: [],
    badges: [],
  };
  state.runs[id] = run;
  state.currentRunId = id;
  saveState();
  return run;
}

function deleteRun(id) {
  delete state.runs[id];
  if (state.currentRunId === id) state.currentRunId = null;
  saveState();
}

function updateEncounterField(locationId, field, value) {
  const run = getCurrentRun();
  if (!run) return;
  if (!run.encounters[locationId]) run.encounters[locationId] = { pokemon:'', nickname:'', status:'none' };
  run.encounters[locationId][field] = value;
  if (field === 'pokemon' && !value) {
    run.encounters[locationId].nickname = '';
    run.encounters[locationId].status = 'none';
  }
  saveState();
}

function setEncounterStatus(locationId, status) {
  const run = getCurrentRun();
  if (!run) return;
  if (!run.encounters[locationId]) run.encounters[locationId] = { pokemon:'', nickname:'', status:'none' };
  run.encounters[locationId].status = status;
  saveState();
}

function evolveEncounter(locationId, newPokemon) {
  const run = getCurrentRun();
  if (!run) return;
  run.encounters[locationId].pokemon = newPokemon;
  saveState();
}

function toggleTrainerDefeated(trainerId) {
  const run = getCurrentRun();
  if (!run) return;
  const idx = run.defeatedTrainers.indexOf(trainerId);
  if (idx === -1) {
    run.defeatedTrainers.push(trainerId);
    const badgeId = TRAINER_BADGE_MAP[trainerId];
    if (badgeId && !run.badges.includes(badgeId)) {
      run.badges.push(badgeId);
    }
  } else {
    run.defeatedTrainers.splice(idx, 1);
    const badgeId = TRAINER_BADGE_MAP[trainerId];
    if (badgeId) {
      run.badges = run.badges.filter(b => b !== badgeId);
    }
  }
  saveState();
}

let currentView = 'home';

function navigate(view) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const el = document.getElementById('view-' + view);
  const navEl = document.getElementById('nav-' + view);
  if (el) el.classList.add('active');
  if (navEl) navEl.classList.add('active');

  currentView = view;

  if (view === 'home')  renderHome();
  if (view === 'game')  renderGame();
  if (view === 'box')   renderBox();
  if (view === 'grave') renderGrave();
}

function renderHome() {
  renderGameGrid();
  if (state.selectedGame) renderSaves(state.selectedGame);
}

function renderGameGrid() {
  const grid = document.getElementById('game-grid');
  grid.innerHTML = GAMES.map(g => {
    const selected = state.selectedGame === g.id ? 'selected' : '';
    const cs = g.available ? '' : 'coming-soon';
    return `
      <div class="game-tile ${selected} ${cs}" data-game="${g.id}" data-available="${g.available}" title="${g.name}">
        <img src="${g.coverUrl}" alt="${g.name}" onerror="this.style.display='none'"/>
        <div class="game-tile-label">${g.shortName}</div>
        ${g.available ? '' : `<div class="game-tile-overlay"><span>COMING<br/>SOON</span></div>`}
      </div>`;
  }).join('');

  grid.querySelectorAll('.game-tile').forEach(tile => {
    tile.addEventListener('click', () => {
      const { game: gid, available } = tile.dataset;
      if (available !== 'true') {
        const game = GAMES.find(g => g.id === gid);
        showComingSoonModal(game.name);
        return;
      }
      state.selectedGame = gid;
      saveState();
      renderGameGrid();
      renderSaves(gid);
    });
  });
}

function renderSaves(gameId) {
  const container = document.getElementById('saves-list');
  const runs = Object.values(state.runs).filter(r => r.game === gameId);

  let html = '';
  if (runs.length === 0) {
    html = `<p class="empty-state">No saves for this game yet. Start a new run!</p>`;
  } else {
    html = `<div class="saves-list-inner">` + runs.sort((a,b) => b.createdAt - a.createdAt).map(r => {
      const alive  = Object.values(r.encounters).filter(e => e.status === 'alive').length;
      const dead   = Object.values(r.encounters).filter(e => e.status === 'dead').length;
      const badges = r.badges.length;
      const date   = new Date(r.createdAt).toLocaleDateString();
      return `
        <div class="save-item">
          <div class="save-info">
            <h3>${escHtml(r.name)}</h3>
            <p>${date} &nbsp;·&nbsp; ${badges} badge${badges!==1?'s':''} &nbsp;·&nbsp; ${alive} alive &nbsp;·&nbsp; ${dead} fallen</p>
          </div>
          <div class="save-actions">
            <button class="btn btn-primary btn-sm" data-action="load" data-id="${r.id}">Load</button>
            <button class="btn btn-danger btn-sm" data-action="delete" data-id="${r.id}">Delete</button>
          </div>
        </div>`;
    }).join('') + `</div>`;
  }

  html += `<button class="btn-new-run" id="new-run-btn">＋ Start New Run</button>`;
  container.innerHTML = html;

  container.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const { action, id } = btn.dataset;
      if (action === 'load') {
        state.currentRunId = id;
        saveState();
        navigate('game');
      } else if (action === 'delete' && confirm(`Delete "${state.runs[id]?.name}"? This cannot be undone.`)) {
        deleteRun(id);
        renderSaves(gameId);
        showToast('Run deleted.', 'red');
      }
    });
  });

  document.getElementById('new-run-btn')?.addEventListener('click', () => {
    showNewRunModal(gameId);
  });
}

function renderGame() {
  const run = getCurrentRun();
  if (!run) {
    document.getElementById('game-view-header').innerHTML = noRunState('game');
    document.getElementById('encounters-section').innerHTML = '';
    document.getElementById('trainers-section').innerHTML = '';
    return;
  }

  renderRunHeader(run);
  renderEncounters(run);
  renderTrainers(run);
}

function renderRunHeader(run) {
  const game = GAMES.find(g => g.id === run.game);
  const badgeHtml = EMERALD_BADGES.map(b => {
    const earned = run.badges.includes(b.id) ? 'earned' : '';
    const style = earned ? `style="color:${b.color};border-color:${b.color};background:${b.color}22"` : '';
    return `<div class="badge-chip ${earned}" ${style}><div class="badge-dot"></div>${b.name}</div>`;
  }).join('');

  document.getElementById('game-view-header').innerHTML = `
    <div class="run-header">
      <img class="run-header-game-icon" src="${game?.coverUrl||''}" alt="${game?.name||''}"/>
      <div>
        <div class="run-header-name">${escHtml(run.name)}</div>
        <div class="run-header-meta">${game?.name||''} &nbsp;·&nbsp; Started ${new Date(run.createdAt).toLocaleDateString()}</div>
      </div>
    </div>
    <div class="badge-row">${badgeHtml}</div>`;
}

function renderEncounters(run) {
  const container = document.getElementById('encounters-section');
  const rows = EMERALD_ENCOUNTERS.map(enc => {
    const data = run.encounters[enc.id] || { pokemon:'', nickname:'', status:'none' };
    return buildEncRow(enc, data);
  }).join('');

  container.innerHTML = `
    <div class="section-label">Encounter Log</div>
    <div class="encounter-table">${rows}</div>`;

  container.querySelectorAll('.enc-row').forEach(row => {
    const locId = row.dataset.loc;
    const enc = EMERALD_ENCOUNTERS.find(e => e.id === locId);
    if (!enc) return;

    const sel = row.querySelector('.enc-poke-select');
    sel?.addEventListener('change', () => {
      updateEncounterField(locId, 'pokemon', sel.value);
      updateSpriteInRow(row, sel.value);
      renderGame();
    });

    const nick = row.querySelector('.enc-nick-input');
    nick?.addEventListener('change', () => {
      updateEncounterField(locId, 'nickname', nick.value);
    });

    row.querySelectorAll('.act-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const { act } = btn.dataset;
        const currentRun = getCurrentRun();
        const data = currentRun?.encounters[locId] || {};

        if (act === 'catch') {
          if (!data.pokemon) { showToast('Choose a Pokémon first!', 'red'); return; }
          setEncounterStatus(locId, 'alive');
          showToast(`${data.pokemon} caught!`, 'green');
        } else if (act === 'miss') {
          setEncounterStatus(locId, 'failed');
          showToast('No encounter recorded.', '');
        } else if (act === 'kill') {
          if (!confirm(`Mark ${data.nickname || data.pokemon} as fainted?`)) return;
          setEncounterStatus(locId, 'dead');
          showToast(`${data.nickname || data.pokemon} has fallen... 💀`, 'red');
        } else if (act === 'release') {
          if (!confirm(`Release ${data.nickname || data.pokemon}?`)) return;
          setEncounterStatus(locId, 'released');
          showToast(`${data.nickname || data.pokemon} was released.`, '');
        } else if (act === 'evolve') {
          showEvolveModal(locId, data.pokemon);
          return;
        }
        renderGame();
      });
    });
  });
}

function buildEncRow(enc, data) {
  const status = data.status || 'none';
  const pokemon = data.pokemon || '';
  const rowClass = status === 'dead' ? 'row-dead' : status === 'failed' ? 'row-failed' : status === 'released' ? 'row-released' : '';

  const spriteHtml = pokemon
    ? `<img class="enc-sprite" src="${spriteUrl(pokemon)||''}" alt="${pokemon}" onerror="this.style.display='none'">`
    : `<div class="enc-sprite-empty">?</div>`;

  const options = `<option value="">Choose…</option>` + enc.available.map(p =>
    `<option value="${p}" ${p===pokemon?'selected':''}>${p}</option>`
  ).join('');

  const statusPill = buildStatusPill(status);
  const actionBtns = buildActionBtns(status, pokemon);

  return `
    <div class="enc-row ${rowClass}" data-loc="${enc.id}">
      <div class="enc-location">
        ${escHtml(enc.location)}
        <div class="enc-location-area">${escHtml(enc.area)}</div>
      </div>
      <div class="enc-pokemon">
        ${spriteHtml}
        <select class="enc-poke-select">${options}</select>
      </div>
      <div class="enc-nickname">
        <input type="text" class="enc-nick-input" placeholder="Nickname" value="${escHtml(data.nickname||'')}" maxlength="12"/>
      </div>
      <div class="enc-status">${statusPill}</div>
      <div class="enc-actions">${actionBtns}</div>
    </div>`;
}

function buildStatusPill(status) {
  const map = {
    none:    ['sp-none',    'Not Yet'],
    alive:   ['sp-alive',   'Alive'],
    dead:    ['sp-dead',    'Fainted'],
    failed:  ['sp-failed',  'Missed'],
    released:['sp-released','Released'],
  };
  const [cls, label] = map[status] || map.none;
  return `<span class="status-pill ${cls}">${label}</span>`;
}

function buildActionBtns(status, pokemon) {
  if (status === 'none') {
    return `
      <button class="act-btn act-catch" data-act="catch" title="Mark caught">Catch</button>
      <button class="act-btn act-miss"  data-act="miss"  title="No encounter">Miss</button>`;
  }
  if (status === 'alive') {
    const evos = pokemon ? (EVOLUTIONS[pokemon] || []) : [];
    const evoBtn = evos.length ? `<button class="act-btn act-evolve" data-act="evolve" title="Evolve">Evolve</button>` : '';
    return `
      ${evoBtn}
      <button class="act-btn act-kill"    data-act="kill"    title="Mark fainted">Faint</button>
      <button class="act-btn act-release" data-act="release" title="Release">Release</button>`;
  }
  return '';
}

function updateSpriteInRow(row, pokemonName) {
  const old = row.querySelector('.enc-sprite, .enc-sprite-empty');
  if (!old) return;
  if (pokemonName) {
    old.outerHTML = `<img class="enc-sprite" src="${spriteUrl(pokemonName)||''}" alt="${pokemonName}" onerror="this.style.display='none'">`;
  } else {
    old.outerHTML = `<div class="enc-sprite-empty">?</div>`;
  }
}

function renderTrainers(run) {
  const container = document.getElementById('trainers-section');
  container.innerHTML = `
    <div class="section-label" style="margin-top:0.5rem">Trainer Battles</div>
    <div class="trainers-wrap">
      ${EMERALD_TRAINERS.map(t => buildTrainerCard(t, run)).join('')}
    </div>`;

  container.querySelectorAll('.defeat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const { trainer } = btn.dataset;
      toggleTrainerDefeated(trainer);
      renderGame();
    });
  });
}

function buildTrainerCard(trainer, run) {
  const defeated = run.defeatedTrainers.includes(trainer.id);
  const defClass  = defeated ? 'defeated' : '';
  const defBadge  = defeated ? `<span class="defeated-badge">✓ Defeated</span>` : '';
  const btnLabel  = defeated ? 'Mark Active' : 'Mark Defeated';

  const pokeCards = trainer.pokemon.map(p => {
    const spr = spriteUrl(p.name);
    const movesHtml = p.moves.map(m => `<div class="move-tag">${m}</div>`).join('');
    return `
      <div class="trainer-poke-card">
        ${spr ? `<img src="${spr}" alt="${p.name}" onerror="this.style.display='none'">` : ''}
        <div class="tpc-info">
          <div class="tpc-name">${p.name}</div>
          <div class="tpc-lv">Lv. ${p.level}</div>
          <div class="moves-grid">${movesHtml}</div>
        </div>
      </div>`;
  }).join('');

  return `
    <div class="trainer-card ${defClass}">
      <div class="trainer-head">
        <div class="trainer-name-row">
          <span class="trainer-name">${escHtml(trainer.name)}</span>
          <span class="trainer-type-badge type-${trainer.type}">${trainer.type}</span>
          <span style="font-size:0.78rem;color:var(--muted-light)">${trainer.title} · ${trainer.location}</span>
          ${defBadge}
        </div>
        <div class="trainer-meta-row">
          <span class="level-cap-badge">⬆ Level Cap: ${trainer.levelCap}</span>
          ${trainer.badge ? `<span class="level-cap-badge" style="color:var(--accent);border-color:var(--accent)">${trainer.badge}</span>` : ''}
          <button class="btn btn-ghost btn-sm defeat-btn" data-trainer="${trainer.id}">${btnLabel}</button>
        </div>
      </div>
      <div class="trainer-poke-grid">${pokeCards}</div>
    </div>`;
}

function renderBox() {
  const container = document.getElementById('box-grid');
  const countEl   = document.getElementById('box-count');
  const run = getCurrentRun();

  if (!run) {
    container.innerHTML = noRunState('box');
    countEl.textContent = '';
    return;
  }

  const alive = Object.entries(run.encounters)
    .filter(([,e]) => e.status === 'alive' && e.pokemon)
    .map(([locId, e]) => ({...e, locId}));

  countEl.textContent = `${alive.length} Pokémon`;
  container.innerHTML = alive.length === 0
    ? `<p class="empty-state" style="grid-column:1/-1">No Pokémon in your box yet. Go catch some!</p>`
    : alive.map(e => buildPokeCard(e, false)).join('');
}

function renderGrave() {
  const container = document.getElementById('grave-grid');
  const countEl   = document.getElementById('grave-count');
  const run = getCurrentRun();

  if (!run) {
    container.innerHTML = noRunState('grave');
    countEl.textContent = '';
    return;
  }

  const dead = Object.entries(run.encounters)
    .filter(([,e]) => e.status === 'dead' && e.pokemon)
    .map(([locId, e]) => ({...e, locId}));

  countEl.textContent = `${dead.length} fallen`;
  container.innerHTML = dead.length === 0
    ? `<p class="empty-state" style="grid-column:1/-1">No fallen Pokémon. Long may they live!</p>`
    : dead.map(e => buildPokeCard(e, true)).join('');
}

function buildPokeCard(enc, isDead) {
  const spr = spriteUrl(enc.pokemon);
  const locData = EMERALD_ENCOUNTERS.find(e => e.id === enc.locId);
  const locName = locData?.location || enc.locId;
  const nickname = enc.nickname || enc.pokemon;

  return `
    <div class="poke-card ${isDead?'grave-card':''}">
      ${spr ? `<img class="poke-sprite" src="${spr}" alt="${enc.pokemon}" onerror="this.style.display='none'">` : ''}
      <div class="poke-nickname">${escHtml(nickname)}</div>
      <div class="poke-species">${escHtml(enc.pokemon)}</div>
      <div class="poke-loc-tag">${escHtml(locName)}</div>
    </div>`;
}

let pendingRunGame = null;

function showNewRunModal(gameId) {
  pendingRunGame = gameId;
  const input = document.getElementById('run-name-input');
  input.value = '';
  document.getElementById('modal-new-run').classList.remove('hidden');
  setTimeout(() => input.focus(), 50);
}

function hideNewRunModal() {
  document.getElementById('modal-new-run').classList.add('hidden');
  pendingRunGame = null;
}

let pendingEvolveLoc = null;
let pendingEvolveSelection = null;

function showEvolveModal(locationId, pokemonName) {
  const evos = EVOLUTIONS[pokemonName] || [];
  if (!evos.length) { showToast('No evolutions available.', ''); return; }

  pendingEvolveLoc = locationId;
  pendingEvolveSelection = evos[0];

  const body = document.getElementById('evolve-modal-body');
  body.innerHTML = `
    <p class="field-label" style="margin-bottom:0.75rem">${pokemonName} → </p>
    <div class="evolve-options">
      ${evos.map(evo => {
        const spr = spriteUrl(evo);
        return `
          <div class="evolve-opt ${evo===evos[0]?'selected':''}" data-evo="${evo}">
            ${spr ? `<img src="${spr}" alt="${evo}" onerror="this.style.display='none'">` : ''}
            <span>${evo}</span>
          </div>`;
      }).join('')}
    </div>`;

  body.querySelectorAll('.evolve-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      body.querySelectorAll('.evolve-opt').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      pendingEvolveSelection = opt.dataset.evo;
    });
  });

  document.getElementById('modal-evolve').classList.remove('hidden');
}

function hideEvolveModal() {
  document.getElementById('modal-evolve').classList.add('hidden');
  pendingEvolveLoc = null;
  pendingEvolveSelection = null;
}

function showComingSoonModal(gameName) {
  document.getElementById('cs-game-name').textContent = `${gameName} — Coming Soon`;
  document.getElementById('modal-coming-soon').classList.remove('hidden');
}

function hideComingSoonModal() {
  document.getElementById('modal-coming-soon').classList.add('hidden');
}

let toastTimer = null;

function showToast(msg, type) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast';
  if (type === 'green') el.classList.add('toast-green');
  if (type === 'red')   el.classList.add('toast-red');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.add('hidden'), 2800);
}

function escHtml(str) {
  return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function noRunState(view) {
  const msgs = {
    game:  ['No Active Run', 'Head to <b>Home</b> to select a game and start or load a run.'],
    box:   ['No Active Run', 'Start a run from <b>Home</b> to track your team.'],
    grave: ['No Active Run', 'Start a run from <b>Home</b> to track your fallen Pokémon.'],
  };
  const [h, p] = msgs[view]||['No Active Run',''];
  return `<div class="no-run-state"><span class="nrs-icon">⬛</span><h2>${h}</h2><p>${p}</p></div>`;
}

document.addEventListener('DOMContentLoaded', () => {
  loadState();

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      navigate(link.dataset.view);
    });
  });

  document.getElementById('modal-cancel-btn').addEventListener('click', hideNewRunModal);
  document.getElementById('modal-create-btn').addEventListener('click', () => {
    const name = document.getElementById('run-name-input').value.trim() || 'New Run';
    if (!pendingRunGame) return;
    createNewRun(pendingRunGame, name);
    hideNewRunModal();
    navigate('game');
    showToast(`Run "${name}" started! Good luck! 🍀`, 'green');
  });
  document.getElementById('run-name-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('modal-create-btn').click();
  });

  document.getElementById('evolve-cancel-btn').addEventListener('click', hideEvolveModal);
  document.getElementById('evolve-confirm-btn').addEventListener('click', () => {
    if (!pendingEvolveLoc || !pendingEvolveSelection) return;
    const run = getCurrentRun();
    const old = run?.encounters[pendingEvolveLoc]?.pokemon;
    evolveEncounter(pendingEvolveLoc, pendingEvolveSelection);
    hideEvolveModal();
    showToast(`${old} evolved into ${pendingEvolveSelection}! ✨`, 'green');
    renderGame();
  });

  document.getElementById('cs-close-btn').addEventListener('click', hideComingSoonModal);

  ['modal-new-run','modal-evolve','modal-coming-soon'].forEach(id => {
    document.getElementById(id)?.addEventListener('click', (e) => {
      if (e.target !== e.currentTarget) return;
      if (id==='modal-new-run') hideNewRunModal();
      if (id==='modal-evolve')  hideEvolveModal();
      if (id==='modal-coming-soon') hideComingSoonModal();
    });
  });

  navigate('home');
});