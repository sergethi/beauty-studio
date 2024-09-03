const customers = [
  {
    id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
    name: "Delba de Oliveira",
    occupation: "Model",
    image_url: "https://nextui.org/avatars/avatar-1.png",
    message: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos`,
    stars: 5,
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    occupation: "Actress",
    image_url: "https://i.pravatar.cc/150?u=a042f81f4e29026024d",
    message: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos`,
    stars: 5,
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    occupation: "Singer",
    image_url:
      "/images/hair-style-clarissa-unsplash.jpg",
    message: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos`,
    stars: 5,
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
    name: "Lee Robinson",
    occupation: "Producer",
    image_url: "https://i.pravatar.cc/300?u=a042581f4e29026704f",
    message: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos`,
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
      "/images/makeup-unsplash.jpg",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4eb6a6442a",
    name: "Bridal styling",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus.`,
    image_url:
      "/images/bridal-styling-wedding-dreamz-unsplash.jpg",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fec4b6ac6442a",
    name: "Hair styling",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus.`,
    image_url:
      "/images/hair-styling-olhar-angolano-unsplash.jpg",
  },
  {
    id: "3958dc9e-742f-4377-85e9-fecc4b6a6442a",
    name: "Hair Coloring",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus.`,
    image_url:
      "/images/hair-coloring-gabrielle-henderson-unsplash.jpg",
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
      "/images/team-fatima-andrey-zvyagintsev-unsplash.jpg",
  },
  {
    id: "3958dc9e-712f-4377-85e59-fec4b6a6442ac",
    name: "Whitney",
    about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus.`,
    image_url:
      "/images/team-whitney-ayo-ogunseinde-unsplash.jpg",
  },
  {
    id: "3958dc9e-712f-4377-85e59-fec4b6a6442ar",
    name: "Aicha",
    about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sequi
          tenetur nam ipsam excepturi enim voluptate beatae veniam quos
          deleniti, doloribus libero illo? Nobis perspiciatis maxime similique
          consequuntur dolores natus.`,
    image_url:
      "/images/team-aicha-clarke-sanders-unsplash.jpg",
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
