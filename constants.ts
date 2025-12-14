import { MenuCategory, MenuGroup } from './types';

// Emojis
const EMOJI_PIZZA = "🍕"; 
const EMOJI_PLATS = "🍽️"; 
const EMOJI_GRATIN = "🥘"; 
const EMOJI_SOUFFLES = "🥟"; 
const EMOJI_FAJITAS = "🌯"; 
const EMOJI_TACOS = "🌮"; 
const EMOJI_SANDWICH = "🥪"; 
const EMOJI_BURGER = "🍔"; 
const EMOJI_CREPES = "🥞"; 
const EMOJI_WAFFLE = "🧇"; 
const EMOJI_CROUST = "🥐"; 
const EMOJI_DRINKS = "🥤";

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'pizza',
    title: 'PIZZA',
    image: EMOJI_PIZZA,
    items: [
      { id: 'z1', name: 'Pizza Simple', price: 400 },
      { id: 'z2', name: 'Pizza Végétarienne', price: 500 },
      { id: 'z3', name: 'Pizza Poulet', price: 500 },
      { id: 'z4', name: 'Pizza Poulet Fumé', price: 550 },
      { id: 'z5', name: 'Pizza 3 Fromage', price: 500 },
      { id: 'z6', name: 'Pizza Mozzarella', price: 550 },
      { id: 'z7', name: 'Pizza Viande', price: 600 },
      { id: 'z8', name: 'Pizza Thon', price: 600 },
      { id: 'z9', name: 'Pizza 2 Saisons', price: 700 },
      { id: 'z10', name: 'Pizza 4 Fromage', price: 800 },
      { id: 'z11', name: 'Pizza 4 Saisons', price: 900 },
      { id: 'z12', name: 'Pizza La Madré', price: 1000 },
      { id: 'z13', name: 'Pizza La Madré Plus', price: 1500 },
    ]
  },
  {
    id: 'semi-mega',
    title: 'SEMI MEGA PIZZA',
    image: EMOJI_PIZZA,
    items: [
      { id: 'sm1', name: 'Pizza Poulet', price: 1000 },
      { id: 'sm2', name: 'Pizza Viande', price: 1200 },
      { id: 'sm3', name: 'Pizza 2 Saisons', price: 1400 },
      { id: 'sm4', name: 'Pizza 4 Saisons', price: 1800 },
      { id: 'sm5', name: 'Pizza La Madré', price: 2000 },
    ]
  },
  {
    id: 'mega-pizza',
    title: 'MEGA PIZZA',
    image: EMOJI_PIZZA,
    items: [
      { id: 'mp1', name: 'Pizza Poulet', price: 1600 },
      { id: 'mp2', name: 'Pizza Viande', price: 1800 },
      { id: 'mp3', name: 'Pizza 2 Saisons', price: 2200 },
      { id: 'mp4', name: 'Pizza 4 Saisons', price: 2500 },
      { id: 'mp5', name: 'Pizza La Madré', price: 3000 },
    ]
  },
  {
    id: 'plats',
    title: 'PLATS',
    image: EMOJI_PLATS,
    items: [
      { id: 'p1', name: 'Plat Escalope', price: 500 },
      { id: 'p2', name: 'Plat Mariné', price: 600 },
      { id: 'p3', name: 'Plat Viande', price: 700 },
      { id: 'p4', name: 'Plat Mexicain', price: 700 },
      { id: 'p5', name: 'Plat Kebab', price: 700 },
      { id: 'p6', name: 'Plat Pané', price: 700 },
      { id: 'p7', name: 'Plat Poulet Farci', price: 800 },
      { id: 'p8', name: 'Plat Cordon Bleu', price: 800 },
      { id: 'p9', name: 'Plat La Madré', price: 1000 },
      { id: 'p10', name: 'Plat La Madré Famille', price: 2000 },
      { id: 'p11', name: 'Plat Big Family', price: 3500 },
    ]
  },
  {
    id: 'gratin',
    title: 'GRATIN',
    image: EMOJI_GRATIN,
    items: [
      { id: 'g1', name: 'Gratin Poulet', price: 500 },
      { id: 'g2', name: 'Gratin Mix', price: 700 },
    ]
  },
  {
    id: 'souffles',
    title: 'SOUFFLES',
    image: EMOJI_SOUFFLES,
    items: [
      { id: 'so1', name: 'Soufflés Poulet', price: 600 },
      { id: 'so2', name: 'Soufflés Viande', price: 700 },
      { id: 'so3', name: 'Soufflés Mix', price: 800 },
      { id: 'so4', name: 'Soufflés La Madré', price: 900 },
    ]
  },
  {
    id: 'fajitas',
    title: 'FAJITAS',
    image: EMOJI_FAJITAS, 
    items: [
      { id: 'f1', name: 'Fajitas Poulet', price: 350 },
      { id: 'f2', name: 'Fajitas Viande', price: 400 },
      { id: 'f3', name: 'Fajitas La Madré', price: 500 },
    ]
  },
  {
    id: 'tacos',
    title: 'TACOS',
    image: EMOJI_TACOS,
    items: [
      { id: 't1', name: 'Tacos (M)', price: 350 },
      { id: 't2', name: 'Tacos (L)', price: 500 },
      { id: 't3', name: 'Tacos (XL)', price: 800 },
      { id: 't4', name: 'Tacos Giga', price: 1500 },
      { id: 't5', name: 'Tacos La Madré', price: 500 },
      { id: 't6', name: 'Tacos La Madré Plus', price: 600 },
    ]
  },
  {
    id: 'sandwich',
    title: 'SANDWICH',
    image: EMOJI_SANDWICH,
    items: [
      { id: 's1', name: 'Sandwich Poulet', price: 300 },
      { id: 's2', name: 'Sandwich Viande', price: 400 },
      { id: 's3', name: 'Sandwich Mexicain', price: 400 },
      { id: 's4', name: 'Sandwich 3 Fromages', price: 400 },
      { id: 's5', name: 'Sandwich La Madré', price: 500 },
    ]
  },
  {
    id: 'cheese',
    title: 'CHEESE / BURGER',
    image: EMOJI_BURGER,
    items: [
      { id: 'ch1', name: 'Cheese Poulet', price: 250 },
      { id: 'ch2', name: 'Cheese Viande', price: 300 },
      { id: 'ch3', name: 'Doublé Poulet', price: 350 },
      { id: 'ch4', name: 'Cheese Mix', price: 400 },
      { id: 'ch5', name: 'Doublé Viande', price: 400 },
      { id: 'ch6', name: 'Cheese La Madré', price: 500 },
    ]
  },
  {
    id: 'crepes',
    title: 'CRÊPES / CREPODS',
    image: EMOJI_CREPES,
    items: [
      { id: 'c1', name: 'Crêpes Banane', price: 400 },
      { id: 'c2', name: 'Crêpes Sushi', price: 400 },
      { id: 'c3', name: 'Crêpes Pasta', price: 400 },
      { id: 'c4', name: 'Crêpes Aux Fruits', price: 500 },
      { id: 'c5', name: 'Crêpes La Madré', price: 600 },
      { id: 'c6', name: 'Crepods Dubai', price: 600 },
      { id: 'c7', name: 'Crepods Special', price: 1000 },
    ]
  },
  {
    id: 'bubble',
    title: 'BUBBLE WAFFLE',
    image: EMOJI_WAFFLE,
    items: [
      { id: 'b1', name: 'Bubble Waffle Simple', price: 300 },
      { id: 'b2', name: 'Bubble Waffle Banana', price: 350 },
      { id: 'b3', name: 'Bubble Waffle Aux Fruits', price: 450 },
      { id: 'b4', name: 'Bubble Waffle La Madré', price: 600 },
    ]
  },
  {
    id: 'mega-croust',
    title: 'MEGA CROUSTILLANTE',
    image: EMOJI_CROUST,
    items: [
      { id: 'mc1', name: 'Croustillante Simple', price: 1500 },
      { id: 'mc2', name: 'Croustillante Nutella', price: 2000 },
      { id: 'mc3', name: 'Croustillante Banana', price: 2000 },
      { id: 'mc4', name: 'Croustillante Aux Fruits', price: 500 }, 
      { id: 'mc5', name: 'Croustillante La Madré', price: 600 },
    ]
  },
  {
    id: 'drinks',
    title: 'DRINKS',
    image: EMOJI_DRINKS,
    items: [
      { id: 'd1', name: 'Jus Naturel', price: 150 },
      { id: 'd2', name: 'Boisson 33 CL', price: 60 },
      { id: 'd3', name: 'Boisson 1L', price: 150 },
      { id: 'd4', name: 'Eau', price: 30 },
      { id: 'd5', name: 'Canette', price: 100 },
    ]
  }
];

export const MENU_GROUPS: MenuGroup[] = [
  { id: 'g_pizza', title: 'The Pizza Collection', emoji: EMOJI_PIZZA, categoryIds: ['pizza', 'semi-mega', 'mega-pizza'] },
  { id: 'g_plats', title: 'Plats & Gratins', emoji: EMOJI_PLATS, categoryIds: ['plats', 'gratin'] },
  { id: 'g_souffles', title: 'Soufflés', emoji: EMOJI_SOUFFLES, categoryIds: ['souffles'] },
  { id: 'g_tacos', title: 'Tacos', emoji: EMOJI_TACOS, categoryIds: ['tacos'] },
  { id: 'g_fajitas', title: 'Fajitas', emoji: EMOJI_FAJITAS, categoryIds: ['fajitas'] },
  { id: 'g_sandwich', title: 'Sandwiches', emoji: EMOJI_SANDWICH, categoryIds: ['sandwich'] },
  { id: 'g_burger', title: 'Burgers', emoji: EMOJI_BURGER, categoryIds: ['cheese'] },
  { id: 'g_dessert', title: 'Desserts', emoji: EMOJI_CREPES, categoryIds: ['crepes', 'bubble', 'mega-croust'] },
  { id: 'g_drinks', title: 'Drinks', emoji: EMOJI_DRINKS, categoryIds: ['drinks'] },
];