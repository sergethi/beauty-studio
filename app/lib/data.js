const customers = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    occupation: "Model",
    image_url: "https://nextui.org/avatars/avatar-1.png",
    message: ``,
    stars: 5,
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    occupation: "Actress",
    image_url: "https://i.pravatar.cc/150?u=a042f81f4e29026024d",
    message: ``,
    stars: 5,
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    occupation: "Singer",
    image_url:
      "https://images.unsplash.com/photo-1577806934037-32d94e326e84?q=80&w=1462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message: ``,
    stars: 5,
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    occupation: "Producer",
    image_url: "https://i.pravatar.cc/300?u=a042581f4e29026704f",
    message: ``,
    stars: 5,
  },
];

const services = [
  {
    id: "3958dc9e-712f-4377-85e59-fec4b6a6442a",
    name: "Makeup",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus.`,
    image_url:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4eb6a6442a",
    name: "Bridal styling",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus.`,
    image_url:
      "https://images.unsplash.com/photo-1612883695890-f2ab22e65215?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6ac6442a",
    name: "Hair styling",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus.`,
    image_url:
      "https://images.unsplash.com/flagged/photo-1569842587338-6d1de8e498e4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fecc4b6a6442a",
    name: "Hair Coloring",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus.`,
    image_url:
      "https://images.unsplash.com/photo-1551727974-8af20a3322f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const team = [
  {
    id: "3958dc9e-712f-4377-85e59-fec4b6a6442a",
    name: "Fatima",
    about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus.`,
    image_url:
      "https://images.unsplash.com/photo-1603988089669-c041ac2fe196?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3958dc9e-712f-4377-85e59-fec4b6a6442ac",
    name: "Whitney",
    about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus.`,
    image_url:
      "https://images.unsplash.com/photo-1534008757030-27299c4371b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3958dc9e-712f-4377-85e59-fec4b6a6442ar",
    name: "Aicha",
    about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus.`,
    image_url:
      "https://images.unsplash.com/photo-1495490140452-5a226aef25d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
  },
];

const hairColor = [
  { name: "Color", price: "$129+" },
  { name: "Colour & Balayage or Highlights", price: "$229+" },
  { name: "Balayage or Highlights", price: "$159+" },
  { name: "Post Colour Blow Dry", price: "$100+" },
];
const hairStyle = [
  { name: "Color", price: "$129+" },
  { name: "Colour & Balayage or Highlights", price: "$229+" },
  { name: "Balayage or Highlights", price: "$159+" },
  { name: "Post Colour Blow Dry", price: "$100+" },
];
const bridalStyle = [
  { name: "Color", price: "$129+" },
  { name: "Colour & Balayage or Highlights", price: "$229+" },
  { name: "Balayage or Highlights", price: "$159+" },
  { name: "Post Colour Blow Dry", price: "$100+" },
];
const makeup = [
  { name: "Color", price: "$129+" },
  { name: "Colour & Balayage or Highlights", price: "$229+" },
  { name: "Balayage or Highlights", price: "$159+" },
  { name: "Post Colour Blow Dry", price: "$100+" },
];
const openHours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday – Friday", time: "10am – 8pm" },
  { day: "Saturday", time: "9am – 6pm" },
  { day: "Sunday", time: "12pm – 6pm" },
];

module.exports = {
  customers,
  services,
  team,
  hairColor,
  hairStyle,
  bridalStyle,
  makeup,
  openHours,
};
