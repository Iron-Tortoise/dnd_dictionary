import travelPace from "./tables/travelPace"

const adventuringDictionary = {
  movement: [
    {
      title: 'Forced March',
      tags: ['Travel Pace', 'Movement'],
      di: 'Exhaustion - Constitution saving throw. DC is 10 +1 for each hour of travel over 8.',
      shortDescription: 'Travel for 8 hours in a day, beyond that they risk exhaustion.',
      longDescription: 'See travel pace table for speeds and distances and any effects.  Characters travel for 8 hours a day but can push beyond that limit at the risk of exhaustion. For each additional hour beyond the 8 each character must ake a Constitution savign throw at the end of the hour.  The DC is 10 + 1 for each hour past the 8. On a failed saving throw, a character suffers one level of exhaustion.',
      table: travelPace,
    },
    {
      title: 'Mounts and Vehicles',
      tags: ['Travel Pace', 'Movement'],
      di: null,
      shortDescription: 'Mounted characters (on animal) can ride at a gallop for up to an hour, covering twice the distance of fast pace.',
      longDescription: 'For shorts span oof time (up to an hour) many animals move much faster than humanoids. If fresh mounts are available every 8-10 miles than layers can cover larger distances.\nCarriages and vehicles have normal pace where as waterborne vessel speeds are determined by the vessel and do not suffer penalties for fast nor gain benefits for slow.',
      table: travelPace,
    },
    // {
    //   title: '',
    //   tags: [],
    //   di: null,
    //   shortDescription: '',
    //   longDescription: '',
    //   table: null
    // },
  ]
}

export default adventuringDictionary