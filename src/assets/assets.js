import p_img1_1 from './ghee1.1.png';
import p_img1_2 from './ghee1.2.png';
import p_img1_3 from './ghee1.3.png';
import p_img1_4 from './ghee1.4.png';
import p_img2_1 from './redchilli1a.jpeg';
import p_img2_2 from './redchilli1b.png';
import p_img2_3 from './redchilli1c.png';
import p_img3_1 from './haldi1a.png';
import p_img3_2 from './haldi1b.png';
import p_img3_3 from './haldi1c.png';
import p_img3_4 from './haldi1d.png';
import p_img4_1 from './masala1a.png';
import p_img4_2 from './masala1b.png';
import p_img4_3 from './masala1c.png';
import p_img4_4 from './masala1d.png';
import musturdoil1 from './musturdoil.webp';
import musturdoil2 from './musturdseed.png';
import musturdoil3 from './musturdtree.png';
import p_img5_4 from './oil1.jpeg'

import p_img6_1 from './almond11.png';
import p_img6_2 from './almond12.png';
import p_img6_3 from './almond14.png';

import p_img7_1 from './oilking.png';
import p_img7_2 from './woil3.png';
import p_img7_3 from './woil.png';

import p_img8_1 from './oliveoil.png';

import p_img9_1 from './coco1.png';
import blackpaper1 from './black.avif';
import blackpaper2 from './black2.jpg';
import coriander1 from './coriander.webp';
import coriander2 from './coriander2.jpg';
import cumin1 from './cumin.jpg';
import cumin2 from './cumin2.jpg';
import fenugreek1 from './fenugreek.avif';
import fenugreek2 from './fenugreek2.jpg';
import fenugreek3 from './fenugreek3.jpg';
import ginger1 from './ginger2.jpg';
import ginger2 from './gingerp.jpg';
import honey1 from './honey.jpeg';
import honey2 from './honey2.jpeg';
import honey3 from './honey3.jpeg';
import honey4 from './honey4.jpeg';
import jaggery1 from './jaggery.webp';
import jaggery2 from './jaggery2.webp';
import flexseed1 from './oilflex.jpg';
import flexseed2 from './oilflex2.avif';
import peanutoil1 from './oilp.webp';
import peanutoil2 from './oilp.webp';
import sesame1 from './oilseasame.jpg';
import sunflower1 from './oilsunflower.webp';
import sunflower2 from './oilsun1.jpeg';
import rocksalt1 from './rock.webp';
import rocksalt2 from './rock2.jpg';



import logo from './logo1.jpg' ;
import hero from './hero1.png'
// import logo1 from './logo1.png';
import stripe from './stripe.png';
import razorpay from './razorpay.png';
import about from './gheeabout.jpg';
import contact from './contact.webp'

export const assets =  {
     logo,
    
     hero,
     stripe,
     razorpay,
     about,
     contact,
    }

export const products = [
  {
    _id: "aaaa",
    name: "Ghee",
    price: 1500,
    image: [p_img1_1, p_img1_2, p_img1_3, p_img1_4],
    description: "Ghee is a type of clarified butter that is commonly used in Indian cuisine.",
    category: "Ghee",
    topPick: "ghee",
    size: ["250ml Glass Jar", "500ml Glass Jar", "1000ml Glass Jar"],
    bestseller: true,
    date: 12345677383
  },
  {
    _id: "aaab",
    name: "Musturd Oil",
    price: 400,
    image: [musturdoil1, musturdoil2, musturdoil3],
    description: "Mustard oil is rich in monounsaturated fatty acids, which could mean that it benefits cardiovascular health. It also contains a compound that may have anti-inflammatory properties.",
    category: "Oil",
    topPick: "oil",
    size: ["250ml", "500ml", "1000ml"],
    bestseller: false,
    date: 1234567345
  },
  {
    _id: "aaac",
    name: "Almond Oil",
    price: 800,
    image: [p_img6_1, p_img6_2, p_img6_3],
    description: "Almond oil is good for health.",
    category: "Oil",
    topPick: "oil",
    size: ["250ml", "500ml", "1000ml"],
    bestseller: true,
    date: 123456789
  },
  {
    _id: "aaad",
    name: "Walnut Oil",
    price: 700,
    image: [p_img7_1, p_img7_2, p_img7_3],
    description: "This article highlights 7 promising benefits of walnut oil. Can boost skin health. The nutrients in walnut oil may promote good skin health. … May decrease inflammation. … Helps lower blood pressure. … Improves blood sugar control. … Improves cholesterol levels. … May have anticancer effects. … Easy to add to your diet",
    category: "Oil",
    topPick: "oil",
    size: ["250ml", "500ml", "1000ml"],
    bestseller: false,
    date: 1234567
  },
  {
    _id: "aaae",
    name: "Musturd Oil",
    price: 400,
    image: [musturdoil1, musturdoil2, musturdoil3],
    description: "Mustard oil is rich in monounsaturated fatty acids, which could mean that it benefits cardiovascular health. It also contains a compound that may have anti-inflammatory properties.",
    category: "Oil",
    topPick: "oil",
    size: ["250ml", "500ml", "1000ml"],
    bestseller: false,
    date: 1234567345
  },
  {
    _id: "aaaf",
    name: "Almond Oil",
    price: 800,
    image: [p_img6_1, p_img6_2, p_img6_3],
    description: "Almond oil is full of vitamin E, and it's a great source of magnesium, phosphorus, and copper.",
    category: "Oil",
    topPick: "oil",
    size: ["250ml", "500ml", "1000ml"],
    bestseller: false,
    date: 123456789
  },
  {
    _id: "aaag",
    name: "Olive Oil",
    price: 500,
    image: [p_img8_1],
    description: "Olive oil is a vegetable oil that comes from the fleshy part of olives, the fruit of the olive tree",
    category: "Oil",
    topPick: "oil",
    size: ["250ml", "500ml", "1000ml"],
    bestseller: false,
    date: 123456789
  },
  {
    _id: "aaah",
    name: "Coconut Oil",
    price: 800,
    image: [p_img9_1],
    description: "Coconut oil comes from the nut (fruit) of the coconut palm. It contains medium-chain fatty acids, including capric acid, caprylic acid, and lauric acid.",
    category: "Oil",
    topPick: "oil",
    size: ["250ml", "500ml", "1000ml"],
    bestseller: false,
    date: 123456789
  },
  {
    _id: "aaai",
    name: "Red Chilli",
    price: 399,
    image: [p_img2_2, p_img2_1, p_img2_3],
    description: "Extra Red , Extra Tikha",
    category: "Spices",
    topPick: "spices",
    size: ["250gm", "500gm", "1000gm"],
    bestseller: false,
    date: 123456767483
  },
  {
    _id: "aaaj",
    name: "Haldi Powder",
    price: 499,
    image: [p_img3_3, p_img3_1, p_img3_2, p_img3_4],
    description: "Natural and Pure..",
    category: "Spices",
    topPick: "spices",
    size: ["250gm", "500gm", "1000gm"],
    bestseller: true,
    date: 123456767483
  },
  {
    _id: "aaak",
    name: "Indian Garam Masala",
    price: 800,
    image: [p_img4_4, p_img4_2, p_img4_3, p_img4_1],
    description: "Garam masala is a spice blend widely used in Indian cuisine, from curries and lentil dishes to soups. Whole spices of cinnamon, mace, peppercorns, coriander seeds, cumin seeds, and cardamon pods are toasted in a pan to release their aromatic flavors, then ground to a powder.",
    category: "Spices",
    topPick: "spices",
    size: ["200gm", "500gm", "1000gm"],
    bestseller: true,
    date: 1234567892
  },
  {
    _id: "aaal",
    name: "Kashmiri Red Chilli",
    price: 450,
    image: [p_img2_2, p_img2_1, p_img2_3],
    description: "Extra Red , Kam Tikha",
    category: "Spices",
    topPick: "spices",
    size: ["250gm", "500gm", "1000gm"],
    bestseller: true,
    date: 123456767483
  },
  {
    _id: "aaam",
    name: "Mustard Oil",
    price: 300,
    image: [musturdoil1, musturdoil2, musturdoil3],
    description: "Mustard oil is rich in monounsaturated fatty acids, good for heart health.",
    category: "Oil",
    topPick: "oil",
    size: ["250ml", "500ml", "1000ml"],
    bestseller: true,
    date: 123456790
  },
  {
    _id: "aaan",
    name: "Sesame Oil",
    price: 450,
    image: [sesame1],
    description: "Sesame oil is packed with antioxidants and has anti-inflammatory properties.",
    category: "Oil",
    topPick: "oil",
    size: ["250ml", "500ml", "1000ml"],
    bestseller: false,
    date: 123456791
  },
  {
    _id: "aaao",
    name: "Peanut Oil",
    price: 400,
    image: [peanutoil1, peanutoil2],
    description: "Peanut oil is a good source of vitamin E and has a mild nutty flavor.",
    category: "Oil",
    topPick: "peanutoil",
    size: ["250ml", "500ml", "1000ml"],
    bestseller: true,
    date: 123456792
  },
  {
    _id: "aaap",
    name: "Sunflower Oil",
    price: 350,
    image: [sunflower2, sunflower1],
    description: "Sunflower oil is high in polyunsaturated fats and vitamin E.",
    category: "Oil",
    topPick: "oil",
    size: ["250ml", "500ml", "1000ml"],
    bestseller: false,
    date: 123456793
  },
  {
    _id: "aaaq",
    name: "Flaxseed Oil",
    price: 600,
    image: [flexseed1, flexseed2],
    description: "Flaxseed oil is rich in omega-3 fatty acids, supporting heart health.",
    category: "Oil",
    topPick: "oil",
    size: ["250ml", "500ml", "1000ml"],
    bestseller: false,
    date: 123456794
  },
  {
    _id: "aaar",
    name: "Buffalo Ghee",
    price: 800,
    image: [p_img1_1],
    description: "Pure desi ghee is made from buffalo's milk and is rich in healthy fats.",
    category: "Ghee",
    topPick: "ghee",
    size: ["250g", "500g", "1kg"],
    bestseller: true,
    date: 123456795
  },
  {
    _id: "aaas",
    name: "Organic Honey",
    price: 700,
    image: [honey1, honey2, honey3, honey4],
    description: "Organic honey is raw, unfiltered, and packed with natural antioxidants.",
    category: "Sweeteners",
    topPick: "honey",
    size: ["250g", "500g", "1kg"],
    bestseller: true,
    date: 123456796
  },
  {
    _id: "aaat",
    name: "Turmeric Powder",
    price: 200,
    image: [p_img2_1],
    description: "Turmeric powder is known for its anti-inflammatory properties and vibrant color.",
    category: "Spices",
    topPick: "powder",
    size: ["100g", "250g", "500g"],
    bestseller: false,
    date: 123456797
  },
  {
    _id: "aaau",
    name: "Red Chilli Powder",
    price: 250,
    image: [p_img2_2],
    description: "Red chilli powder adds heat and flavor to dishes with its natural spiciness.",
    category: "Spices",
    topPick: "powder",
    size: ["100g", "250g", "500g"],
    bestseller: false,
    date: 123456798
  },
  {
    _id: "aaav",
    name: "Cumin Seeds",
    price: 180,
    image: [cumin2, cumin1],
    description: "Cumin seeds enhance the flavor of food and aid digestion.",
    category: "Spices",
    topPick: "seeds",
    size: ["100g", "250g", "500g"],
    bestseller: false,
    date: 123456799
  },
  {
    _id: "aaaw",
    name: "Coriander Powder",
    price: 220,
    image: [coriander1, coriander2],
    description: "Coriander powder has a fresh aroma and enhances curries and dals.",
    category: "Spices",
    topPick: "Powdered Spices",
    size: ["100g", "250g", "500g"],
    bestseller: false,
    date: 123456800
  },
  {
    _id: "aaax",
    name: "Rock Salt",
    price: 150,
    image: [rocksalt2, rocksalt1],
    description: "Rock salt is unrefined and contains essential minerals for the body.",
    category: "Spices",
    topPick: "Salt",
    size: ["250g", "500g", "1kg"],
    bestseller: false,
    date: 123456801
  },
  {
    _id: "aaay",
    name: "Jaggery Powder",
    price: 180,
    image: [jaggery1, jaggery2],
    description: "Jaggery powder is a natural sweetener packed with iron and minerals.",
    category: "Sweeteners",
    topPick: "Jaggery",
    size: ["250g", "500g", "1kg"],
    bestseller: true,
    date: 123456802
  },
  {
    _id: "aaaz",
    name: "Black Pepper",
    price: 450,
    image: [blackpaper1, blackpaper2],
    description: "Black pepper has a strong aroma and enhances the taste of food.",
    category: "Spices",
    topPick: "spices",
    size: ["100g", "250g", "500g"],
    bestseller: false,
    date: 123456803
  },
  {
    _id: "aaa1",
    name: "Dry Ginger Powder",
    price: 350,
    image: [ginger2, ginger1],
    description: "Dry ginger powder is great for digestion and boosts immunity.",
    category: "Spices",
    topPick: "powder",
    size: ["100g", "250g", "500g"],
    bestseller: false,
    date: 123456804
  },
  {
    _id: "aaa2",
    name: "Fenugreek Seeds",
    price: 160,
    image: [fenugreek1, fenugreek2, fenugreek3],
    description: "Fenugreek seeds are great for digestion and help control blood sugar levels.",
    category: "Spices",
    topPick: "seeds",
    size: ["100g", "250g", "500g"],
    bestseller: false,
    date: 123456805
  }
];




