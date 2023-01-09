export const heroes = [
  {
    id: 1,
    name: 'Mage',
    avatar: '/heroes/mage.png',
    description: 'Mage with a pointy hat',
  },
  {
    id: 2,
    name: 'Warrior',
    avatar: '/heroes/warrior.png',
    description: 'Old warrior',
  },
  {
    id: 3,
    name: 'Hunter',
    avatar: '/heroes/hunter.png',
    description: 'Hunter with a pistol',
  },
] as const

export const heroImg = {
  Mage: '/heroes/mage.png',
  Warrior: '/heroes/warrior.png',
  Hunter: '/heroes/hunter.png',
}
