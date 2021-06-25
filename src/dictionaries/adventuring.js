import travelPace from "./tables/travelPace"

const adventuringDictionary = [
  {
    title: 'Forced March',
    tags: ['Travel Pace', 'Movement'],
    di: 'Exhaustion - Constitution saving throw. DC is 10 +1 for each hour of travel over 8.',
    shortDescription: 'Travel for 8 hours in a day, beyond that they risk exhaustion.',
    longerDescription: ['See travel pace table for speeds and distances and any effects.  Characters travel for 8 hours a day but can push beyond that limit at the risk of exhaustion. For each additional hour beyond the 8 each character must ake a Constitution savign throw at the end of the hour.  The DC is 10 + 1 for each hour past the 8.',
      'On a failed saving throw, a character suffers one level of exhaustion.'
    ],
    table: travelPace,
  },
  {
    title: 'Mounts and Vehicles',
    tags: ['Travel Pace', 'Movement'],
    di: null,
    shortDescription: 'Mounted characters (on animal) can ride at a gallop for up to an hour, covering twice the distance of fast pace.',
    longerDescription: ['For shorts span of time (up to an hour) many animals move much faster than humanoids. If fresh mounts are available every 8-10 miles than layers can cover larger distances.',
      'Carriages and vehicles have normal pace where as waterborne vessel speeds are determined by the vessel and do not suffer penalties for fast nor gain benefits for slow.'
    ],
    table: travelPace,
  },
  {
    title: 'Difficult Terrain',
    tags: ['Travel Pace', 'Movement'],
    di: null,
    shortDescription: 'You move at half speed in difficult terrain - moving 1 foot in difficult terrain will cost you 2 feet of movement. You can cover half the normal distance',
    longerDescription: [],
    table: travelPace
  },
  {
    title: 'Climbing, Swimming, and Crawling',
    tags: ['Movement'],
    di: 'Potentially Strength (Athletics) check at DM discretion for certain scenarios (ie. climbing a slippery rope or swimming in rough waters.)',
    shortDescription: 'Each foot of movement cost 1 extra movement. To move 1 foot cost 2 feet of movemnt.',
    longerDescription: ['Ignore the extra cost if player has proficiency in that type of movement.'],
    table: null
  },
  {
    title: 'Long Jump',
    tags: ['Jumping', 'Movement'],
    di: 'At the discretion of the DM you must succeed a DC 10 Strength (Athletics) check to clear low obstacles.  When landing on difficult terrain you must succeed on a DC 10 Dexterity (Acrobatics) check. If you fail you land prone.',
    shortDescription: 'Cover a number of feet up to your strength score if you move at least 10 feet on foot leading up to the jump.  Standing long jumps is half the distance.  Each foot cleared cost a foot of movement.',
    longerDescription: [],
    table: null
  },
  {
    title: 'High Jump',
    tags: ['Jumping', 'Movement'],
    di: 'At the discretion of the DM they may have you make a Strength (Athletics) check to see if you jump higher than normal.',
    shortDescription: 'Leap into the air a number of feet equal to 3+ your Strength modifier if you move at least 10 feet on foot before hand. Standing jump is half the distance when not moving ahead of time.  Each foot cleared cost a foot of movement.',
    longerDescription: ['Standing jump is half the distance when not moving ahead of time.  Each foot cleared cost a foot of movement. You can extend your arms half your height above yourself during the jump.  Thus you can reach a height of your jump plus 1.5 times your height.'],
    table: null
  },
  {
    title: 'Marching Order',
    tags: ['Movement'],
    di: null,
    shortDescription: 'As adventures travel through dungeons, wilderness, etc. a marching order should be established to determine effects on the party',
    longerDescription: ['Marching order makes it easier to determine which characters are affected by traps, which ones can spot hidden enemies, and which ones are closest to enemies if a fight breas out.',
      'Characters can occupy the front rank, middle rank, or back rank.  If there is not enough space to travel side by side then marching orders must change.  There will always be a front rank.'
    ],
    table: null
  },
  {
    title: 'Stealth',
    tags: ['Movement'],
    di: null,
    shortDescription: 'While traveling at a slow pace travelers can move stealthy. As long as they are not out in the open they cna try to surprise or sneak past creatures.',
    longerDescription: [],
    table: null
  },
  {
    title: 'Noticing Threats',
    tags: ['Perception', 'Movement'],
    di: null,
    shortDescription: 'Use passive Wisdom (Perception) scores of the characters to determine whether anyone in the group notices a hidden threat',
    longerDescription: [
      'While traveling at a fast pace characters take a -5 penalty to their passive Wisdom (Perception) scores to notice hidden threats',
      'If encountering creatures it is up to both groups to decide what to do - do they engage in combat, have a conversation, runaway?',
      'If adventurers encounter a hositle group or creature then the DM decides if one or the other are surprised'
    ],
    table: null
  },
  {
    title: 'Navigate',
    tags: ['Movement'],
    di: 'Make a Wisdom (Survival) check when the DM calls for it.',
    shortDescription: `A chacater can try to keep the group from getting lost. (The Dungeon Master's guide has rules to determine if a group is getting lost)`,
    longerDescription: [],
    table: null
  },
  {
    title: 'Draw a Map',
    tags: ['Movement'],
    di: 'No ability check required',
    shortDescription: 'A chacater can draw a map that records the groups progress and helps the characters get back on track if they get lost.',
    longerDescription: [],
    table: null
  },
  {
    title: 'Track',
    tags: ['Tracking', 'Movement'],
    di: 'Make a Wisdom (Survival) check when the DM asks for it.',
    shortDescription: `A chacter can follow the tracks of another creature. (The Dungeon Master's guide has rules for tracking)`,
    longerDescription: [],
    table: null
  },
  {
    title: 'Forage',
    tags: ['Movment', ],
    di: null,
    shortDescription: `Characters can keep an eye out for sources of food and water. (The Dungeon Master's guide has rules for foraging)`,
    longerDescription: [],
    table: null
  },
  // {
  //   title: '',
  //   tags: [],
  //   di: null,
  //   shortDescription: '',
  //   longerDescription: [],
  //   table: null
  // },
];

export default adventuringDictionary