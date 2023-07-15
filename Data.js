let Restaurant_Information = [{
    id : 102,
    name : "Oru Vadakkan Cafe",
    Sname : 'Kerala,South Indian,Biryani...',
    rating : 3.4,
    DeliveryTime : 50,
    location : 'Koramangala 5th Block,Bangalore',
    image :'oruvadakkecafe.avif',
    image2:'appam1.avif',
    image3 :'appam2.avif',
    image4:'butter1.avif',


    Dishes :{
        BreakFast :[{
            dishname :'BreakFast',
            section :'NonVeg',
            image:'appam1.avif',
            price:169.50,
            names:'Appam With Chicken Curry',
            desc :'3 Appam + chicken curry [half]',
            itemid:1
        },{
            section :'NonVeg',
            image:'appam2.avif',
            price:179.50,
            names:'Appam With Chicken Roast',
            desc :'3 Appam + chicken curry [half]',
            itemid:2
        },{
            section :'NonVeg',
            image:'chapati1.avif',
            price:172.50,
            names:'Chapati+Chicken Roast',
            itemid:3,
            desc :'3 Chapati + chicken curry [half]'
        }
    ],
    ChickenSpecials:[{
        dishname :' ChickenSpecials',
        section :'NonVeg',
        image:'butter1.avif',
        price:210.00,
        itemid:4,
        names:'Butter Chicken Masala',
        desc :'Its creamy and spicy'
    },{
        section :'NonVeg',
        image:'sukka1.avif',
        price:200.00,
        itemid:5,
        names:'Chicken Chukka',
       

    },{
        section :'NonVeg',
        image:'Gheeroast.avif',
        price:240.00,
        itemid:6,
        names:'Chicken Ghee Roast'
    },]
    }
},{
    id : 103,
    name : "Pablo's Sandwiches",
    Sname : 'Sandwich, Healthy Food, American...',
    rating : 3.8,
    DeliveryTime : 34,
   
    location : 'Koramangala 7th Block, Bangalore',
    image :" Pablos.avif",
    image2:'sanwich1.avif',
    image3 :'sandwich2.avif',
    image4:'sanwich3.avif',

    Dishes :{
        Sandwich :[{
            names:'Herbed Garlic Chicken Sandwich',
            price:289,
            image:'sanwich1.avif',
            itemid:7,
            desc:'Garlic-infused chicken breast slices cooked in a creamy sauce. A classic seasoned with ... read more'
        },{
            names:'Classic Ham & Cheese Signature Sandwich',
            price:259,
            image:'sandwich2.avif',
            itemid:8,
            desc : 'A classic signature combination of smoked chicken ham, homemade mayo, and melted cheddar ... read more'
        },{
            names:'Grilled Chicken Tikka Sandwich',
            price:250,
            image:'sanwich3.avif',
            itemid:9,
            desc : 'Grilled chicken cooked in spicy masala with an earthy taste. A classic that’s ... read moreade mayo, and melted cheddar ... read more'
        }],
        SignatureSandwiches:[{
            names:'Tomato Mozzarella Signature Sandwich',
            price:290,
            image:'s3.avif',
            itemid:10,
            desc : 'Our best-seller, crafted with the finest Fresh Italian Mozzarella, plump tomatoes, and world-class ... read more'
        },{
            names:'Bombay Masala Signature Sandwich',
            price:239,
            image:'s2.avif',
            itemid:11,
            desc : 'The Iconic Bombay Sandwich - is stuffed with masala potatoes, veggies, spicy red ... read more'
        },{
            names:'Grilled Paneer Tikka Signature Sandwich',
            price:330,
            image:'s1.avif',
            itemid:12,
            desc : 'Fresh cubes of paneer grilled with spices and fiery yogurt marinade. A delicious ... read more'
        }]
    }

},{
    id : 104,
    name : "Burger King",
    Sname : 'Burger, Fast Food, Desserts, Beverages',
    rating : 4.0,
    DeliveryTime : 30,
    image:'Burger.avif',
    location : 'Basavanagudi, Bangalore',
   
    image2:'bk1.webp',
    image3 :'bk2.avif',
    image4:'bk3.avif',


    Dishes :{
        Burger:[{
            names:'Premium Family Feast for 4- Veg',
            image :'bk1.webp',
            price: 849,
            itemid:13,
            desc :'Save Rs. 261 | Veg Whopper + Paneer Royale + Crispy Veg + ... read more'
        },{
            names:'Premium Family Feast for 4- Chicken',
            image :'bk2.avif',
            price: 899,
            itemid:14,
            desc :'Save Rs. 242 | Chicken Whopper + Fiery Chicken + Crispy Chicken + ... read more'
        },{
            names:'Classic Family Feast for 4- Ve',
            image :'bk3.avif',
            price: 649,
            itemid:15,
            desc :'Save Rs. 238 | 2 Crispy Veg + BK Veggie + Veg Crunchy ... read more'
        }],
        Whopper:[{
            names :'Veg Whopper',
            price:179,
            image:'Burger.avif',
            itemid:16,
            desc : 'Our Signature Whopper With 7 Layers Between The Buns. Extra Crunchy Veg Patty, ... read more'
        },
        {
            names:'Chicken Whopper',
            price : 199,
            image :'whp1.avif',
            itemid:17,
            desc : 'Our Signature Whopper With 7 Layers Between The Buns. Flame Grilled Chicken Patty, ... read more'

            
        }
    ]
    }

},
{
    id : 105,
    name : "Thalassery Restaurant",
    Sname : 'Kerala, North Indian, Chinese, Kebab...',
    rating : 4.0,
    DeliveryTime : 20,
    location : 'Kammanahalli, Bangalore',
    image :'Thala.avif',
    image2:'kp1.avif',
    image3 :'ap1.avif',
    image4:'wheat1.jpg',


    Dishes:{
        BreakFast :[{
            names :'Kerala Parotta [Serves 1]',
            price : 21,
            image :'kp1.avif',
            itemid:18,
        },{
            names :'Appam',
            price : 18,
            itemid:19,
            image :'ap1.avif'
        },{
            names : 'Wheat Parotta',
            price : 25,
            itemid:20,
            image :'wheat1.jpg' 
        }]
    }


},{
    id : 106,
    name : "FreshMenu",
    Sname : 'Continental, Oriental, Asian...',
    rating : 3.9,
    DeliveryTime : 45,
    image:'FreshMenuPic.avif',
    location : 'Richmond Road, Bangalore',
    image2:'Break1.avif',
    image3 :'Break2.avif',
    image4:'Break3.avif',

    Dishes : {
        BreakFast :[{
            names :'High Protein English Breakfast',
            price : 99,
            itemid:21,
            image :'Break1.avif',
            desc : 'Scrambled eggs, sausages tossed in a special seasoning are served alongside a hash ... read more'

        },{
            names :'Creamy Chicken Omelette',
            price : 99,
            image :'Break2.avif',
            itemid:22,
            desc :'This wholesome meal is filled with a rich blend of flavors that includes ... read more'
        },{
            names :'Ghee Roast Chicken Wrap',
            price : 99,
            itemid:23,
            image :'Break3.avif',
            desc :'Savory, meaty, with just a touch of heat! Bite into roasted strips of ... read more'
        }],
        Desert:[{
            names : 'Homemade Chocolate-Cake',
            price : 89,
            image:'cake1.avif',
            itemid:24,
            desc :'A double-layered chocolate sponge and chocolate ganache extravaganza – creamy, chocolatey with indulgence ... read more'
        }]
    }
},{
    id : 107,
    name : "Meghana Foods",
    Sname : 'Biryani, Andhra, North Indian...',
    rating : 4.3,
    DeliveryTime : 24,
    image:'MG1.avif',
    location : 'Residency Road, Bangalore',
    image2:'chilly1.avif',
    image3 :'gobi.avif',
    image4:'ch1.avif',

    Dishes :{
        Vegstarter:[{
            names : 'Chilly Mushroom',
            price : 315,
            itemid:25,
            desc :'12-15 Pieces of mushroom are coated in our andra spice mix batter and ... read more',
            image :'chilly1.avif'

        },{
            names : 'Chilly Babycorn',
            price : 295,
            image :'gobi.avif',
            itemid:26,
            desc :'Babycorn is coated in our andra spice mix and fried with lots of ... read more'
        }],
        Nonveg:[{
            names : 'Chilly Chicken (Boneless)',
            price : 325,
            itemid:27,
            desc :'Boneless pieces of chicken are cooked with a lot of green chilies and ... read more',
            image :'ch1.avif'

        },{
            names : 'Chilly 65',
            price : 320,
            itemid:28,
            desc :'Boneless pieces of chicken are pan-fried to perfection with our andra spice mix ... read more',
            image :'ch2.avif'
        }]
    }

},{

    id : 108,
    name : "KFC",
    Sname : 'Fast Food, Burger, Biryani, Desserts...',
    rating : 4.1,
    DeliveryTime : 29,
    image:'KFC1.avif',
    location : 'Shanti Nagar, Bangalore',
    image2:'r1.avif',
    image3:"snack1.avif",

    Dishes :{
        VegRolls :[{
            names :'Classic Chicken Roll & Pepsi Combo',
            price : 176,
            itemid:29,
            desc :'Our new Classic Chicken Roll served with Pepsi 475ml [serves 1]',
            image :'r1.avif',
        },{
            names :'Double Chicken Roll & Pepsi Combo',
            price : 166,
            image :'r2.avif',
            itemid:30,
            desc :'Our new Double Chicken Roll served with Pepsi 475ml [serves 1]'
        },
    ],
    Snacks :[{
        names :'Strips & Rice Combo',
        price : 356,
        image :'snack1.avif',
        itemid:31,
        desc :'4 chicken peri peri boneless strips, 1 Dips (20gm), flavorful Rice & Gravy ... read more'
    },{
        names :'Popcorn & Fries bucket',
        price : 319,
        image :'snack2.avif',
        itemid:32,
        desc :'Large Chicken Popcorn with Med Fries - at a deal price',
    }]
    }
},
{
    id : 109,
    name : "Truffles",
    Sname : 'Burger, American, Bakery, Italian,...',
    rating : 4.6,
    DeliveryTime : 19,
    image:'Truffle.avif',
    location : 'St. Marks Road, Bangalore',
    image2:'rm1.avif',
    image3:"rm4.avif",

    Dishes :{
        Recommended :[{
            names:'Non Veg Club S/W',
            price : 209,
            image :"rm1.avif",
            itemid:33,
            desc :'Grilled chicken, chicken ham, fried egg, cheese, tomato & jalapenos Serving Size: 330gms ... read more'
        },{
            names:'Poached egg',
            price : 166,
            image :"rm2.avif",
            itemid:34,
            desc :'Served on toast with chicken cold cut, baked beans & grilled tomato Serving ... read more'
        },{
            names:'Egg Scrambled box',
            price : 170,
            image :"rm3.avif",
            itemid:35,
            desc :'Served with chicken sausage, baked beans, toast & fruit salad Serving Size: 571 ... read more'
        },{
            names:'Whole wheat pita Non-veg',
            price : 223.00,
            image :"rm4.avif",
            itemid:36,
            desc :'Our signature whole wheat pita stuffed with peri peri chicken and onion, tomato ... read more'

        }]
    }


},{
    id : 110,
    name : "Domino's Pizza",
    Sname : 'Burger, American, Bakery, Italian,...',
    rating : 3.4,
    DeliveryTime : 39,
    image:'pizza.avif',
    location : 'St. Marks Road, Bangalore',
    image2:"beg1.avif",
    image3:'veg4.avif',


    Dishes :{
        'Veg Pizza' :[{
            names :'Farmhouse Pizza',
            price :269,
            image:'beg1.avif',
            itemid:36,
            desc :'Delightful combination of onion, capsicum, tomato & grilled mushroom. Available in Cheese Burst, ... read more'
        },{
            names :'Veg Extravaganza Pizza',
            price :319,
            image:'veg4.avif',
            itemid:37,
            desc :'Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese. Available ... read more'

        },{
            names :'Pepper Barbecue Chicken Pizza',
            price :219,
            image:'veg5.avif',
            itemid:38,
            desc :'Pepper barbecue chicken for that extra zing. Available in Cheese Burst, Wheat Thin ... read more'

        }],
        "Non-veg":[{
            names :'Blazing Chicken & Paprika',
            image :'ng1.avif',
            price :249,
            itemid:39,
            desc :'Hot & spicy chicken pizza with a new spicy peri peri sauce and ... read more'
        }]
    }

},
    {
        id:111,
        name : "Ayodhya Vihar Pure Veg ",
        Sname : 'North Indian, Chinese, South Indian,...',
        rating : 4.2,
        DeliveryTime : 29,
        image:'ayo1.avif',
        location : 'Jeevan Bhima Nagar, Bangalore',
        image2:'meal1.avif',
        image3:'meal2.avif',
        veg : 'veg',
        Dishes :{
            Recommended :[{
                names :'South Indian Meals',
                image :'meal1.avif',
                price : 105,
                itemid:40,
                desc :'Rice+sambar +rasam+ poori [2 Pieces] +palya+kurma+curd+payasa+curd+papad'
            },{
                names :'North Indian Meals',
                image :'meal2.avif',
                price : 175,
                itemid:41,
                desc :'2 Roti +2 type curry+dal+pulav rice+curd rice+soup+sweet [Subject to availability] + salad+papad'
                
            },
            {
                names :'Masala Dosa',
                itemid:42,
                image :'meal1.avif',
                price : 80,
            }
        ]
        }
},
{
    id:112,
    name : "Punjabi Nukkad Pure Veg",
    Sname : 'North Indian, Chinese,Mughlai,...',
    rating : 3.9,
    DeliveryTime : 20,
    image:'punjab1.jpg',
    location : 'HRS, Bangalore',
    image2:'p1.avif',
    image3 :'p2.avif',
    veg : 'veg',

    Dishes :{
        Recommended :[{
            names :'Shahi Punjabi Thali',
            price : 229,
            image :'p1.avif',
            itemid:43,
            desc :'Dal of the day, paneer subji, veg subji, phulka (3 pcs)/tandoori roti (2 ... read more'
        },{
            names :'Punjabi Choley Bhature',
            price : 179,
            itemid:44,
            image :'p2.avif',
            desc:'Punjabi style cholley served with bhature (2 pcs) and Punjabi salad.'
        },{
            names :'Chur Chur Naan Combo',
            price : 219,
            itemid:45,
            image :'p3.avif',
            desc :'Stuffed chur chur naan (1 pc), dal makhani, veg sabji, raita and salad.'
        }]
    }

},{
    id:113,
    name : "Dwarkamai Pure Veg Restaurant",
    Sname : 'North Indian, Chinese,...',
    rating : 4.0,
    DeliveryTime : 34,
    image:'dp1.avif',
    image2 :'dp2.avif',
    image3:'dp3.avif',
    veg : 'veg',
    location : 'Basavanagudi, Bangalore',

    Dishes :{
        Recommended :[{
            names:'Bamboo Biryani',
            price : 449,
            itemid:46,
            image :'dp2.avif',
            desc :'North indian style of veg biryani cooked in authentic ground pounded masalas and ... read more'
        },{
            names:'Chilli Paneer with Hakka Noodles',
            price : 275,
            itemid:47,
            image :'dp3.avif',
            desc :'Chilli Paneer+Hakka Noodles'
        },{
            names:'Dal Khichdi',
            price : 270,
            itemid:48,
            desc:'A delicious and comforting light meal, made from rice and moong lentils',
            image :'dp4.avif',
        }]
    }
}]











let PureVegRestaurant = [{
    id:111,
    name : "Ayodhya Vihar Pure Veg ",
    Sname : 'North Indian, Chinese, South Indian,...',
    rating : 4.2,
    DeliveryTime : 29,
    image:'ayo1.avif',
    location : 'Jeevan Bhima Nagar, Bangalore',
    image2:'meal1.avif',
    image3 :'meal2.avif',
    image4:'ayo1.avif',

    Dishes :{
        Recommended :[{
            names :'South Indian Meals',
            image :'meal1.avif',
            price : 105,
            itemid:49,
            desc :'Rice+sambar +rasam+ poori [2 Pieces] +palya+kurma+curd+payasa+curd+papad'
        },{
            names :'North Indian Meals',
            image :'meal2.avif',
            itemid:50,
            price : 175,
            desc :'2 Roti +2 type curry+dal+pulav rice+curd rice+soup+sweet [Subject to availability] + salad+papad'
            
        },
        {
            names :'Masala Dosa',
            image :'meal1.avif',
            price : 80,
            itemid:51,
        }
    ]
    }

},
{
    id:112,
    name : "Punjabi Nukkad Pure Veg",
    Sname : 'North Indian, Chinese, Mughlai,...',
    rating : 4.1,
    DeliveryTime : 20,
    image:'punjab1.jpg',
    location : 'HRS, Bangalore',
    image2:'p1.avif',
    image3 :'p2.avif',
    image4:'p3.avif',


    Dishes :{
        Recommended :[{
            names :'Shahi Punjabi Thali',
            price : 229,
            image :'p1.avif',
            itemid:52,
            desc :'Dal of the day, paneer subji, veg subji, phulka (3 pcs)/tandoori roti (2 ... read more'
        },{
            names :'Punjabi Choley Bhature',
            price : 179,
            image :'p2.avif',
            itemid:53,
            desc:'Punjabi style cholley served with bhature (2 pcs) and Punjabi salad.'
        },{
            names :'Chur Chur Naan Combo',
            price : 219,
            image :'p3.avif',
            itemid:54,
            desc :'Stuffed chur chur naan (1 pc), dal makhani, veg sabji, raita and salad.'
        }]
    }

},
{
    id:113,
    name : "Dwarkamai Pure Veg Restaurant",
    Sname : 'North Indian, Chinese,...',
    rating : 3.3,
    DeliveryTime : 34,
    image:'dp1.avif',
    location : 'Basavanagudi, Bangalore',
    image2:'dp2.avif',
    image3 :'dp3.avif',
    image4:'dp4.avif',

    Dishes :{
        Recommended :[{
            names:'Bamboo Biryani',
            price : 449,
            image :'dp2.avif',
            itemid:55,
            desc :'North indian style of veg biryani cooked in authentic ground pounded masalas and ... read more'
        },{
            names:'Chilli Paneer with Hakka Noodles',
            price : 275,
            image :'dp3.avif',
            itemid:56,
            desc :'Chilli Paneer+Hakka Noodles'
        },{
            names:'Dal Khichdi',
            price : 270,
            itemid:57,
            desc:'A delicious and comforting light meal, made from rice and moong lentils',
            image :'dp4.avif',
        }]
    }
}]




localStorage.setItem('mydata',JSON.stringify(Restaurant_Information))


Restaurant_Information.map((x)=>{
    if(x.veg === 'veg')
    console.log(x.id)
})


