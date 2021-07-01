import exhaustionTable from "./tables/exhaustion";

const conditions = [
  {
    title: 'Blinded',
    description: [
      `A blinded creature can't see and automatically fails any ability check that requirs sight.`,
      `Attack rolls against the blinded creature have advantage, and the creature's attack rolls have disadvantage`,
    ],
    table: null,
  },
  {
    title: 'Charmed',
    description: [
      `A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects.`,
      `The charmer has advantage on any abiity check to interact socially with the charmed creature.`,
    ],
    table: null,
  },
  {
    title: 'Deafened',
    description: [
      `A defeaned creature can't hear and automatically fails any ability check that requires hearing`
    ],
    table: null,
  },
  {
    title: 'Frightened',
    description: [
      `A frightened creature has disadvantage on ability checks and attack rolls while the source of its fears is within line of sight`,
      `The creature can't willingly move closer to the source of its fear.`
    ],
    table: null,
  },
  {
    title: 'Grappled',
    description: [
      `A grappled creature's speed becomes 0, and it can't benefit from any bonsus to its speed.`,
      `The condition ends if the grappler is incapacitated (see the condition).`,
      `The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect.`
    ],
    table: null,
  },
  {
    title: 'Incapacitated',
    description: [`An incapacitated creature can't take actions or reactions.`],
    table: null,
  },
  {
    title: 'Invisible',
    description: [
      `An invisible creature is impossibl to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. the creature's location can be detected by any noise it makes or any tracks it leaves.`,
      `Attack rolls against the creature have disadvantage, and the creature's attack rolls have advantage.`
    ],
    table: null,
  },
  {
    title: 'Paralyzed',
    description: [
      `A paralyzed creature is incapacitated (see the condition) and can't move or speak.`,
      `The creature automatically fails Strength and Dexterity saving throws.`,
      `Attack rolls against the creature have advantage.`,
      `Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.`
    ],
    table: null,
  },
  {
    title: 'Petrified',
    description: [
      `A petrified creature is transformed, along with any non-magical object it is wearing or carrying, into a solid inanimate substance (such as stone). Its weight increases by a factor of 10 and it ceases aging.`,
      `The creature is incapacitated (see condition), can't move or speak, ad is unaware of its surroundings.`,
      `Attack rolls against the creature have advantage.`,
      `The creature automatically fails Strength and Dexterity saving throws.`,
      `The creature has resistance to all damage`,
      `The creature is immune to poison and disease, although poison or disease already in its system is suspended, not neutralized.`
    ],
    table: null
  },
  {
    title: 'Exhaustion',
    description:[
      `If an already exhausted creature suffers another effect that causes exhaustion, its current level of exhaustion increases by the amount specified in the effect's description`,
      `A creature suffers the effects of its current level of exhaustion as well as all lower levels`,
      `An effect that removes exhaustion reduces its level as specified in the effect's description`,
      `Finishing a long rest reduces a creature's exhaustion level by 1, provided the creature hs also ingested some food and water.`,
      `Being raised from the dead redues a creature's exhaustion level by 1.`,
    ],
    table: exhaustionTable,
  }
];

export default conditions