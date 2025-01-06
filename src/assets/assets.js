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
import p_img5_1 from './musturdoil.webp';
import p_img5_2 from './musturdseed.png';
import p_img5_3 from './musturdtree.png';
import p_img5_4 from './oil1.jpeg'

import p_img6_1 from './almond11.png';
import p_img6_2 from './almond12.png';
import p_img6_3 from './almond14.png';

import p_img7_1 from './oilking.png';
import p_img7_2 from './woil3.png';
import p_img7_3 from './woil.png';

import p_img8_1 from './oliveoil.png';

import p_img9_1 from './coco1.png';

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
        _id : "aaaa",
        name : "Ghee" , 
        price : 1000 ,
        image : [p_img1_1,p_img1_2,p_img1_3,p_img1_4],
        description : "Ghee is a type of clarified butter that is commonly used in Indian cuisine.",
        category : "Ghee",
        subCategory:"Ghee",
        size : ['250ml Glass Jar','500ml Glass Jar','1000ml Glass Jar'],
        bestseller:true,
        date:12345677383
    },
    {
        _id : "aaab",
        name : "Musturd Oil" , 
        price : 400 ,
        image : [p_img5_1,p_img5_2,p_img5_3],
        description : "Mustard oil is rich in monounsaturated fatty acids, which could mean that it benefits cardiovascular health. It also contains a compound that may have anti-inflammatory properties.",
        category : "Oil",
        subCategory:"Oil",
        size : ['250ml','500ml','1000ml'],
        bestseller:false,
        date:1234567345
    },
    {
        _id : "aaac",
        name : "Almond Oil" , 
        price : 800 ,
        image : [p_img6_1,p_img6_2,p_img6_3],
        description : "Almond oil is good for health.",
        category : "Oil",
        subCategory:"Oil",
        size : ['250ml','500ml','1000ml'],
        bestseller:true,
        date:123456789
    },
    {
        _id : "aaad",
        name : "Walnut Oil" , 
        price : 700 ,
        image : [p_img7_1,p_img7_2,p_img7_3],
        description : "This article highlights 7 promising benefits of walnut oil. Can boost skin health. The nutrients in walnut oil may promote good skin health. … May decrease inflammation. … Helps lower blood pressure. … Improves blood sugar control. … Improves cholesterol levels. … May have anticancer effects. … Easy to add to your diet",
        category : "Oil",
        subCategory:"Oil",
        size : ['250ml','500ml','1000ml'],
        bestseller:false,
        date:1234567
    },
    {
        _id : "aaae",
        name : "Musturd Oil" , 
        price : 400 ,
        image : [p_img5_1,p_img5_2,p_img5_3],
        description : "Mustard oil is rich in monounsaturated fatty acids, which could mean that it benefits cardiovascular health. It also contains a compound that may have anti-inflammatory properties.",
        category : "Oil",
        subCategory:"Oil",
        size : ['250ml','500ml','1000ml'],
        bestseller:false,
        date:1234567345
    },
    {
        _id : "aaaf",
        name : "Almond Oil" , 
        price : 800 ,
        image : [p_img6_1,p_img6_2,p_img6_3],
        description : "Almond oil is full of vitamin E, and it's a great source of magnesium, phosphorus, and copper.",
        category : "Oil",
        subCategory:"Oil",
        size : ['250ml','500ml','1000ml'],
        bestseller:false,
        date:123456789
    },
    {
        _id : "aaag",
        name : "Olive Oil" , 
        price : 500 ,
        image : [p_img8_1],
        description : "Olive oil is a vegetable oil that comes from the fleshy part of olives, the fruit of the olive tree",
        category : "Oil",
        subCategory:"Oil",
        size : ['250ml','500ml','1000ml'],
        bestseller:false,
        date:123456789
    },
    {
        _id : "aaah",
        name : "Coconut Oil" , 
        price : 800 ,
        image : [p_img9_1],
        description : "Coconut oil comes from the nut (fruit) of the coconut palm. It contains medium-chain fatty acids, including capric acid, caprylic acid, and lauric acid.",
        category : "Oil",
        subCategory:"Oil",
        size : ['250ml','500ml','1000ml'],
        bestseller:false,
        date:123456789
    },
    {
        _id : "aaai",
        name : "Red Chilli" , 
        price : 399 ,
        image : [p_img2_2,p_img2_1,p_img2_3],
        description : "Extra Red , Extra Tikha",
        category : "Spices",
        subCategory:"Spices",
        size : ['250gm','500gm','1000gm'],
        bestseller:false,
        date:123456767483
    },
    {
        _id : "aaaj",
        name : "Haldi Powder" , 
        price : 499 ,
        image : [p_img3_3,p_img3_1,p_img3_2,p_img3_4],
        description : "Natural and Pure..",
        category : "Spices",
        subCategory:"Spices",
        size : ['250gm','500gm','1000gm'],
        bestseller:true,
        date:123456767483
    },
    {
        _id : "aaak",
        name : "Indian Garam Masala" , 
        price : 800 ,
        image : [p_img4_4,p_img4_2,p_img4_3,p_img4_1],
        description : "Garam masala is a spice blend widely used in Indian cuisine, from curries and lentil dishes to soups. Whole spices of cinnamon, mace, peppercorns, coriander seeds, cumin seeds, and cardamon pods are toasted in a pan to release their aromatic flavors, then ground to a powder.",
        category : "Spices",
        subCategory:"Spices",
        size : ['200gm','500gm','1000gm'],
        bestseller:true,
        date:1234567892
    },
    {
        _id : "aaal",
        name : "Kashmiri Red Chilli" , 
        price : 450 ,
        image : [p_img2_2,p_img2_1,p_img2_3],
        description : "Extra Red , Kam Tikha",
        category : "Spices",
        subCategory:"Spices",
        size : ['250gm','500gm','1000gm'],
        bestseller:true,
        date:123456767483
    },
]    


