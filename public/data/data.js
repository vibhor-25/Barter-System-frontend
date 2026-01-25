import MyItem from "../../src/Pages/Items";

const Products = [
    { id: 1, title: "Vintage Camera", desc: "Retro 35mm film professional camera .", statusi: true , img: "https://m.media-amazon.com/images/I/81Tib6mb8eL._AC_UY218_.jpg", loc: { lat: 28.704, lng: 77.102, city: "New Delhi"} },
    { id: 2, title: "Mountain Bike", desc: "21-speed mountain bike, lightly used.", statusi: false , img: "https://m.media-amazon.com/images/I/81Nm8hF59qL._AC_UY218_.jpg", loc: { latL : 28.704, lng: 77.102, city: "Jaipur"} },
    { id: 3, title: "Acoustic Guitar", desc: "Full-size acoustic with case.", statusi: true , img: "https://m.media-amazon.com/images/I/5133nEGq6dL._AC_UL640_QL65_.jpg", loc: { lat: 19.076, lng: 72.8777, city: "Mumbai"} },
    { id: 4, title: "Leather Backpack", desc: "Handcrafted water-resistant backpack.", statusi: false , img: "https://m.media-amazon.com/images/I/71hhHX9VsuL._AC_UL320_.jpg", loc: { lat: 19.076, lng: 72.8777, city: "Pune"} },
    { id: 5, title: "Coffee Maker", desc: "12-cup programmable drip coffee maker.", statusi: true , img: "https://m.media-amazon.com/images/I/51CG7fT4ShL._AC_UY218_.jpg", loc: {city: "Chennai", lat: 13.0827, lng: 80.2707} },
    { id: 19, title: "Rope", desc: "Durable rope for every situation.", statusi: true , img: "https://imgs.search.brave.com/dzf_jvB20DGk1E3BnDIusZLJuSRcjwRwPDDyCbvMGJE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjUx/NDI2OTM3L3Bob3Rv/L3NwYWluLXRvbGVk/by1yb3BlLXVzZWQt/YnktdGhlLXNwYW5p/c2gtaW5xdWlzaXRp/b24taW4tdGhlLTE2/dGgtY2VudHVyeS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SmRaRE1oWUotYV9x/NzllM3EzN0hGWFdC/M3MxZFR6TXJxVG43/aUdlaEdNRT0", loc :{city: "Ahmedabad", lat: 23.0339, lng: 72.5714} },
    { id: 6, title: "Smart Watch", desc: "Fitness smartwatch with heart-rate monitor.", statusi: false , img: "https://m.media-amazon.com/images/I/61frMaBqWgL._AC_UY218_.jpg", loc: { lat: 22.5726, lng: 88.3639, city: "Kolkata"} },
    { id: 7, title: "Ceramic Vase", desc: "Hand-painted decorative vase.", statusi: false , img: "https://m.media-amazon.com/images/I/61ZQkDvLwZL._AC_UL320_.jpg", loc: { lat: 22.5726, lng: 88.3639, city: "Hyderabad"} },
    { id: 8, title: "Board Game", desc: "Strategy board game for 2-6 players.", statusi: true , img: "https://m.media-amazon.com/images/I/61uX7ji6B5L._AC_UL320_.jpg", loc: { lat: 12.9716, lng: 77.5946, city: "Bangalore"} },
    { id: 9 , title: "Cocaine " , desc: "High quality cocaine for recreational use.", statusi: true , img: "https://t4.ftcdn.net/jpg/14/16/02/13/240_F_1416021396_jYPJRRV5YAojTcPFHn6B5DYow89C6VAB.jpg", loc: { lat: 12.9716, lng: 77.5946, city: "Chandigarh"} },
    { id: 10, title: "Running Shoes", desc: "Lightweight running shoes, size 10.", statusi: false, img: "https://m.media-amazon.com/images/I/61muHlVnHYL._AC_UL320_.jpg", loc: { lat: 28.6139, lng: 77.209, city: "Lucknow"} },
    { id: 11, title: "Desk Lamp", desc: "LED desk lamp with adjustable brightness.", statusi: false , img: "https://m.media-amazon.com/images/I/611AjN7Wq9L._AC_UL320_.jpg", loc: { lat: 28.6139, lng: 77.209, city: "Varanasi"} },
    { id: 12, title: "Headphones", desc: "Noise-cancelling over-ear headphones.", statusi: false , img: "https://m.media-amazon.com/images/I/71quB2GTUKL._AC_UY218_.jpg", loc: { lat: 26.9124, lng: 75.7873, city: "Jaipur"} },
    { id: 13, title: "Yoga Mat", desc: "Eco-friendly non-slip mat, 6mm thickness.", statusi: false , img: "https://m.media-amazon.com/images/I/71mInNZP1UL._AC_UL320_.jpg", loc: { lat: 26.9124, lng: 75.7873, city: "Udaipur"} },
    { id: 14, title: "Bluetooth Speaker", desc: "Portable speaker with 10h battery.", statusi: true , img: "https://m.media-amazon.com/images/I/71o6CU8MqVL._AC_UY218_.jpg", loc: { lat: 25.3176, lng: 82.9739, city: "Varanasi"} },
    { id: 15, title: "Sketchbook Bundle", desc: "Set of 3 sketchbooks, 100gsm paper.", statusi: false , img: "https://m.media-amazon.com/images/I/715pEXpp-0L._AC_UL320_.jpg", loc: { lat: 25.3176, lng: 82.9739, city: "Patna"} },
    { id: 16, title: "Electric Kettle", desc: "1.7L stainless steel kettle for everyday use.", statusi: true , img: "https://m.media-amazon.com/images/I/61G2USexrDL._AC_UY218_.jpg", loc: { lat: 23.2599, lng: 77.4126, city: "Bhopal"} },
    { id: 17, title: "Scented Candle Set", desc: "Pack of 4 soy wax candles.", statusi: false , img: "https://m.media-amazon.com/images/I/81mjkv25b5L._AC_UL320_.jpg", loc: { lat: 23.2599, lng: 77.4126, city: "Indore"} },
    { id: 18, title: "Portable Charger", desc: "10,000mAh power bank for charging on the go.", statusi: false , img: "https://m.media-amazon.com/images/I/51w9roMijiL._AC_UY218_.jpg", loc: { lat: 21.1458, lng: 79.0882, city: "Nagpur"} },
    { id: 20, title: "Indoor Plant", desc: "Low-maintenance potted indoor plant.", statusi: false , img: "https://m.media-amazon.com/images/I/717UeE1dPyL._AC._SR360,460.jpg", loc :{city: "Surat", lat: 21.1702, lng: 72.8311} },
];

export default Products;


