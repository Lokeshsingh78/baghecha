const navLinks = [
     {
    id: "home",
    title: "Swagat",
    },
    {
        id: "cocktails",
        title: "Royal Selections",
    },
    {
        id: "about",
        title: "Virasat",
    },
    {
        id: "contact",
        title: "Padharo Sa",
    },
];

const cocktailLists = [
  {
    name: "Dal Baati Churma",
    country: "Rajasthan",
    detail: "Iconic Veg Royal Platter",
    price: "₹380",
  },
   {
    name: "Panchkuta Ki Sabzi",
    country: "Rajasthan",
    detail: "Royal Desert Heritage Dish",
    price: "₹440",
  },
  {
    name: "Ker Sangri",
    country: "Rajasthan",
    detail: "Desert Heritage Special",
    price: "₹240",
  },
  {
    name: "Bajra Roti - Lehsun Chutney",
    country: "Rajasthan",
    detail: "Rustic Royal Classic",
    price: "₹280",
  },
  {
    name: "Papad Mangodi Ki Sabzi",
    country: "Rajasthan",
    detail: "Traditional Marwari Special",
    price: "₹190",
  },
];

const mockTailLists = [
  {
    name: "Bajre Ka Khichda",
    country: "Rajasthan",
    detail: "Royal Village Classic",
    price: "₹190",
  },
  {
  name: "Kesar Raab",
  country: "Rajasthan",
  detail: "Royal Heritage Drink",
  price: "₹270",
},
  {
    name: "Churma Ladoo",
    country: "Rajasthan",
    detail: "Authentic Marwari Sweet",
    price: "₹160",
  },
  {
    name: "Mawa Ghewar",
    country: "Jaipur",
    detail: "Royal Festive Dessert",
    price: "₹340",
  },
  {
    name: "Moong Dal Halwa",
    country: "Rajasthan",
    detail: "Heritage Winter Special",
    price: "₹240",
  },
];

const topAboutImages = [
    {
        imgPath: "/images/abt1.avif",
        span: 3,
    },{
        imgPath: "/images/abt2.jpg",
        span: 6,
    },{
        imgPath: "/images/abt5.jpeg",
        span: 3,
    },
]

const bottomAboutImages = [
    {
        imgPath: "/images/abt3.png",
        span: 8,
    },{
        imgPath: "/images/abt4.jpg",
        span: 4,
    },
]

const profileLists = [
    {
        imgPath: "/images/profile1.png",
    },
    {
        imgPath: "/images/profile2.png",
    },
    {
        imgPath: "/images/profile3.png",
    },
    {
        imgPath: "/images/profile4.png",
    },
];

const starImages = Array(5).fill("/images/star.png");

const featureLists = [
    "· Authentic Rajasthani flavors",
    "· Served with royal elegance",
    "· Fresh ingredients daily",
    "· Traditional recipes preserved",
];
const goodLists = [
    "· Heritage-inspired dishes",
    "· Time-honored techniques",
    "· Culinary artistry in every bite",
    "· Farm-fresh ingredients",
];

const storeInfo = {
    heading: "Visit BAGHECHA",
    address: "Jaipur, Rajasthan, India",
    contact: {
        phone: "+91 (141) 123-4567",
        email: "Lokeshsinghtanwar78@gmail.com",
    },
};

const openingHours = [
    { day: "Mon–Thu", time: "11:00am – 11pm" },
    { day: "Fri", time: "11:00am – 12am" },
    { day: "Sat", time: "9:00am – 12am" },
    { day: "Sun", time: "9:00am – 11pm" },
];
const socials = [
  {
    name: "GitHub",
    icon: "/images/github.png",
    url: "https://github.com/Lokeshsingh78",
  },
  {
    name: "X (Twitter)",
    icon: "/images/x.png",
    url: "https://x.com/Not_LokeshSingh",
  },
];
const sliderLists = [
  {
    id: 1,
    name: "Royal Indian Thali",
    image: "/images/drink1.png",
    title: "The Essence of Indian Royalty",
    description:
      "A carefully curated selection of India’s finest traditional dishes, inspired by royal kitchens and age-old recipes. Every element reflects heritage, balance, and the timeless richness of Indian cuisine.",
  },
  {
    id: 2,
    name: "Gourmet Plates",
    image: "/images/drink2.webp",
    title: "Fast, Refined & Flavorful",
    description:
      "Elevated fast food crafted with quality ingredients and refined techniques. Familiar flavors presented with a premium touch, offering comfort without compromising on taste or tradition.",
  },
  {
    id: 3,
    name: "Muh Meetha",
    image: "/images/drink3.png",
    title: "A Sweet Ending to Every Feast",
    description:
      "Traditional Indian sweets prepared to celebrate moments big and small. From festive classics to heritage desserts, each bite is meant to leave a lingering sweetness and warmth.",
  },
  {
    id: 4,
    name: "Royal Refreshments",
    image: "/images/drink4.png",
    title: "Refreshments with a Royal Touch",
    description:
      "A thoughtfully selected range of traditional and modern beverages, from cooling heritage drinks to refined refreshments, crafted to complement every meal perfectly.",
  },
];


export {
    navLinks,
    cocktailLists,
    mockTailLists,
    profileLists,
    featureLists,
    goodLists,
    openingHours,
    storeInfo,
    socials,
    sliderLists,
    topAboutImages,
    bottomAboutImages,
    starImages
};