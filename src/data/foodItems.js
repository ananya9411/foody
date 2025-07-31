// src/data/foodItems.js

const foodItems = [
  // Main Course
  {
    id: 1,
    name: "Paneer Butter Masala",
    category: "Main Course",
    price: 220,
    description: "Creamy cottage cheese in tomato gravy",
    image:
      "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2-500x500.jpg",
  },
  {
    id: 2,
    name: "Chicken Biryani",
    category: "Main Course",
    price: 250,
    description: "Spicy and aromatic layered rice with chicken",
    image:
      "https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01-750x750.jpg",
  },
  {
    id: 6,
    name: "Veg Thali",
    category: "Main Course",
    price: 180,
    description: "Assorted Indian vegetarian platter",
    image:
      "https://media.istockphoto.com/id/1158623408/photo/indian-hindu-veg-thali-food-platter-selective-focus.jpg?s=612x612&w=0&k=20&c=MOm3sfIfL22URV6juSCxpA3yfr4O63yJUV5vitufR7Y=",
  },
  {
    id: 7,
    name: "Tandoori Chicken",
    category: "Main Course",
    price: 280,
    description: "Charcoal grilled chicken with spices",
    image:
      "https://sinfullyspicy.com/wp-content/uploads/2014/07/1200-by-1200-images-2.jpg",
  },
  {
    id: 9,
    name: "Rajma Chawal",
    category: "Main Course",
    price: 140,
    description: "Kidney beans curry with rice",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZZYV9Eu13fxu8qXT98ovX6SrG3hGOtpqPw&s",
  },
  {
    id: 33,
    name: "Dal Makhani",
    category: "Main Course",
    price: 170,
    description: "Slow-cooked black lentils with butter",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAM_sU4h_Iz_foXrcRwo2H0NBHIgFdCv_KbA&s",
  },
  {
    id: 34,
    name: "Aloo Paratha",
    category: "Main Course",
    price: 90,
    description: "Stuffed potato flatbread with curd",
    image:
      "https://thumbs.dreamstime.com/b/indian-breakfast-aloo-paratha-potato-pancakes-served-yogurt-dip-87658775.jpg",
  },
  {
    id: 35,
    name: "Palak Paneer",
    category: "Main Course",
    price: 210,
    description: "Spinach and cottage cheese curry",
    image:
      "https://desistreetfoods.com/wp-content/uploads/2024/01/Palak-Paneer-2-scaled.jpg",
  },
  {
    id: 36,
    name: "Fish Curry",
    category: "Main Course",
    price: 260,
    description: "Coastal fish curry in coconut gravy",
    image:
      "https://vaya.in/recipes/wp-content/uploads/2018/04/Kerala-Fish-Curry.jpg",
  },
  {
    id: 37,
    name: "Chicken Korma",
    category: "Main Course",
    price: 260,
    description: "Creamy chicken curry with spices",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD95xBT1k3XWyQE-a_FDulj1TjJw39UULrsA&s",
  },
  {
    id: 38,
    name: "Bhindi Masala",
    category: "Main Course",
    price: 150,
    description: "Stir-fried okra with spices",
    image:
      "https://media.istockphoto.com/id/516316282/photo/indian-masala-fried-bhindi-or-ladyfinger-curry.jpg?s=612x612&w=0&k=20&c=IRTS-aCjpujiT5Y62vT3SKDGCcPg5GFtMu4Arl9ETjY=",
  },

  // Pizza
  {
    id: 11,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 199,
    description: "Classic cheese and tomato pizza",
    image:
      "https://media.istockphoto.com/id/1393150881/photo/italian-pizza-margherita-with-cheese-and-tomato-sauce-on-the-board-on-grey-table-macro-close.jpg?s=612x612&w=0&k=20&c=kL0Vhg2XKBjEl__iG8sFv31WTiahdpLc3rTDtNZuD2g=",
  },
  {
    id: 12,
    name: "Farmhouse Pizza",
    category: "Pizza",
    price: 249,
    description: "Loaded with fresh vegetables",
    image:
      "https://grub24s3.s3.eu-west-2.amazonaws.com/upload/1702561436-Pizza.jpg",
  },
  {
    id: 13,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 279,
    description: "Topped with spicy pepperoni slices",
    image:
      "https://media.istockphoto.com/id/521403691/photo/hot-homemade-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=PaISuuHcJWTEVoDKNnxaHy7L2BTUkyYZ06hYgzXmTbo=",
  },
  {
    id: 14,
    name: "Paneer Tikka Pizza",
    category: "Pizza",
    price: 259,
    description: "Desi pizza with paneer tikka toppings",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSBY5SWIFI-pofr5vHT8_kxd1XimTHB52TA&s",
  },

  // Burgers
  {
    id: 15,
    name: "Veg Burger",
    category: "Burgers",
    price: 99,
    description: "Crispy veg patty with fresh veggies",
    image:
      "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmVnJTIwYnVyZ2VyfGVufDB8fDB8fHww",
  },
  {
    id: 16,
    name: "Chicken Burger",
    category: "Burgers",
    price: 129,
    description: "Juicy chicken patty with mayo",
    image:
      "https://media.istockphoto.com/id/521207406/photo/southern-country-fried-chicken-sandwich.jpg?s=612x612&w=0&k=20&c=XfttLSxEO2YAjop4Gy0CIb1L5N_OK1tTKxmkiPr3QD8=",
  },
  {
    id: 17,
    name: "Cheese Burger",
    category: "Burgers",
    price: 149,
    description: "Grilled patty with melting cheese",
    image:
      "https://media.istockphoto.com/id/1254672762/photo/delicious-homemade-hamburger-and-french-fries.jpg?s=612x612&w=0&k=20&c=9BgdcWXRMb8hPZd2049StXFqvhDRq3izLkXK7Cq2C9s=",
  },

  // Pasta & Noodles
  {
    id: 18,
    name: "Veg Hakka Noodles",
    category: "Pasta & Noodles",
    price: 120,
    description: "Stir-fried noodles with vegetables",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9GYk6_fX2jxfcejjJZP1VcUlR_M2XsaCoA&s",
  },
  {
    id: 19,
    name: "Chicken Noodles",
    category: "Pasta & Noodles",
    price: 150,
    description: "Chinese noodles with chicken",
    image:
      "https://www.kitchensanctuary.com/wp-content/uploads/2019/02/Chicken-Lo-Mein-Square-FS-1.jpg",
  },
  {
    id: 20,
    name: "White Sauce Pasta",
    category: "Pasta & Noodles",
    price: 180,
    description: "Creamy white sauce penne pasta",
    image:
      "https://aartimadan.com/wp-content/uploads/2020/07/White-Sauce-Pasta.jpg",
  },
  {
    id: 21,
    name: "Red Sauce Pasta",
    category: "Pasta & Noodles",
    price: 170,
    description: "Tangy tomato-based pasta",
    image:
      "https://prolicious.com/cdn/shop/articles/Tangy_Tomato_Red_Sauce_Pasta.jpg?v=1705585316",
  },

  // Snacks
  {
    id: 3,
    name: "Masala Dosa",
    category: "Main Course",
    price: 120,
    description: "Crispy dosa with spicy potato filling",
    image:
      "https://media.istockphoto.com/id/1156896023/photo/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus.jpg?s=612x612&w=0&k=20&c=ddWTTzN52tHM_jqSRj35G9WYoas2Da3HLwzOxaQ0WFY=",
  },
  {
    id: 4,
    name: "Butter Naan",
    category: "Snacks",
    price: 40,
    description: "Soft naan with butter",
    image:
      "https://t3.ftcdn.net/jpg/07/11/92/84/360_F_711928491_Am9rJkePY5UaeAZKSZQ9tFkWweUWVfSF.jpg",
  },
  {
    id: 5,
    name: "Chole Bhature",
    category: "Main Course",
    price: 150,
    description: "Fried bhature with spicy chickpeas",
    image:
      "https://assets.gqindia.com/photos/5e13119f28dff200080a598d/master/pass/top-image.jpg",
  },
  {
    id: 8,
    name: "Samosa",
    category: "Snacks",
    price: 20,
    description: "Deep-fried pastry with potato filling",
    image:
      "https://t4.ftcdn.net/jpg/02/25/73/97/360_F_225739755_KDAnE7HIBzYfzHImvgojaVARAd2LLrZW.jpg",
  },
  {
    id: 39,
    name: "Idli Sambar",
    category: "Snacks",
    price: 100,
    description: "Steamed rice cakes with lentil soup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNIzVPhY3UKSYXqoRqwUk7aJYr06JG764ODA&s",
  },
  {
    id: 10,
    name: "Dhokla",
    category: "Snacks",
    price: 100,
    description: "Steamed gram flour snack",
    image:
      "https://thumbs.dreamstime.com/z/delicious-dhokla-pieces-garnished-herbs-vibrant-blue-plate-just-waiting-to-be-savored-bright-yellow-squares-topped-black-369940330.jpg",
  },
  // Desserts
  {
    id: 22,
    name: "Gulab Jamun",
    category: "Desserts",
    price: 80,
    description: "Milk solids dumplings in sugar syrup",
    image: "https://dudhratan.in/wp-content/uploads/2024/04/Gulabjamun-1.jpg",
  },
  {
    id: 23,
    name: "Rasgulla",
    category: "Desserts",
    price: 90,
    description: "Spongy white sweet balls",
    image:
      "https://prashantcorner.com/cdn/shop/products/RASGULLA_2457ea2c-400a-4130-b540-b77966e63d07.jpg?crop=center&height=2048&v=1673073151&width=2048",
  },
  {
    id: 24,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 150,
    description: "Rich and moist chocolate cake",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPHN7XscGo6sNbVVKgNkV6sDO7LTYj6Nklw&s",
  },
  {
    id: 25,
    name: "Ice Cream Sundae",
    category: "Desserts",
    price: 110,
    description: "Vanilla ice cream with toppings",
    image:
      "https://images.unsplash.com/photo-1657225953401-5f95007fc8e0?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW0lMjBzdW5kYWV8ZW58MHx8MHx8fDA%3D",
  },

  // Beverages
  {
    id: 26,
    name: "Lassi",
    category: "Beverages",
    price: 60,
    description: "Traditional yogurt drink",
    image:
      "https://media.istockphoto.com/id/1008799838/photo/image-of-a-glass-of-lassi-made-from-milk-curd.jpg?s=612x612&w=0&k=20&c=L--UXX-L2bsK6Jy-mEigONFj9QEJyvU8b77FJnBLpBg=",
  },
  {
    id: 27,
    name: "Cold Coffee",
    category: "Beverages",
    price: 90,
    description: "Chilled coffee with ice cream",
    image:
      "https://images.unsplash.com/photo-1530373239216-42518e6b4063?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 28,
    name: "Fresh Lime Soda",
    category: "Beverages",
    price: 50,
    description: "Refreshing lemon soda",
    image:
      "https://www.shutterstock.com/image-photo/refreshment-mojito-cocktail-rum-fresh-260nw-2349144889.jpg",
  },

  // Street Food
  {
    id: 29,
    name: "Paneer Roll",
    category: "Street Food",
    price: 100,
    description: "Spicy paneer wrapped in a paratha",
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/02/paneer-kathi-roll-recipe.jpg",
  },
  {
    id: 30,
    name: "Chicken Shawarma",
    category: "Street Food",
    price: 130,
    description: "Arabian roll with juicy chicken",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt4LygVTmYcqL7dpCO0lGTM65i16J7ebfjaQ&s",
  },
  {
    id: 31,
    name: "Momos",
    category: "Street Food",
    price: 80,
    description: "Steamed dumplings with veg/chicken filling",
    image:
      "https://media.istockphoto.com/id/1133151212/photo/japanese-dumplings-gyoza-with-pork-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=vC6GTUDGK6dD5_QHvY1V7fVUdPx-z4TG73DUACR_L5s=",
  },
  {
    id: 32,
    name: "Vada Pav",
    category: "Street Food",
    price: 25,
    description: "Mumbai’s famous street food",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVptCP0V3kIacit1Lsv4099Ftjpijb8DKuNw&s",
  },

  // Sides
  {
    id: 40,
    name: "Pav Bhaji",
    category: "Sides",
    price: 130,
    description: "Spicy vegetable mash with buns",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThT8xs4wQQxMcTSGAOJCrXlxQFTJ7-DpKNGA&s",
  },
  {
    id: 41,
    name: "Onion Rings",
    category: "Sides",
    price: 80,
    description: "Crispy golden fried onion rings",
    image: "https://cdn.jwplayer.com/v2/media/RrNwOxf1/poster.jpg?width=1920",
  },
  {
    id: 42,
    name: "Spring Rolls",
    category: "Sides",
    price: 100,
    description: "Veg spring rolls with chutney",
    image:
      "https://ranveerbrar.com/wp-content/uploads/2021/02/Chicken-Spring-Rolls-1.jpg",
  },
  {
    id: 43,
    name: "Nachos with Cheese",
    category: "Sides",
    price: 150,
    description: "Corn chips topped with melted cheese",
    image:
      "https://www.tostitos.com/sites/tostitos.com/files//Ultimate-Four-Cheese-Nachos-065-d.jpg",
  },
  {
    id: 44,
    name: "Falafel Wrap",
    category: "Sides",
    price: 120,
    description: "Mediterranean chickpea wrap",
    image:
      "https://static.vecteezy.com/system/resources/previews/050/158/484/non_2x/fresh-falafel-wrap-featuring-a-crisp-salad-and-juicy-tomatoes-photo.jpeg",
  },
  {
    id: 45,
    name: "Caesar Salad",
    category: "Sides",
    price: 140,
    description: "Classic salad with creamy dressing",
    image:
      "https://berrynco.com/wp-content/uploads/2023/06/chicken-caesar-salad-28-1200-1.jpg",
  },
  {
    id: 46,
    name: "Tomato Soup",
    category: "Sides",
    price: 70,
    description: "Warm and tangy tomato soup",
    image: "https://sinfullyspicy.com/wp-content/uploads/2024/09/2-2.jpg",
  },
  {
    id: 47,
    name: "Paneer Pakora",
    category: "Sides",
    price: 90,
    description: "Fried cottage cheese fritters",
    image:
      "https://spoonsofflavor.com/wp-content/uploads/2021/07/Paneer-Pakora-Recipe.jpg",
  },
  {
    id: 48,
    name: "Chicken Wings",
    category: "Sides",
    price: 180,
    description: "Spicy grilled chicken wings",
    image:
      "https://www.licious.in/blog/wp-content/uploads/2020/12/Fried-Chicken-Wing.jpg",
  },
  {
    id: 49,
    name: "Mutton Rogan Josh",
    category: "Main Course",
    price: 320,
    description: "Kashmiri-style spicy mutton curry",
    image:
      "https://www.chefkunalkapur.com/wp-content/uploads/2021/03/Mutton-Roganjosh-scaled.jpg?v=1620401698",
  },
  {
    id: 50,
    name: "Tandoori Roti",
    category: "Sides",
    price: 20,
    description: "Clay oven-cooked Indian bread",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfqOHcz4FS240YCbDV-DVsu1PtYMyrK5PPog&s",
  },
];

export default foodItems;
