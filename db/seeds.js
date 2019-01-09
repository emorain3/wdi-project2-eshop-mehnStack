const Item = require('../models/Item');

Item.deleteMany().then( () => {
    return Item.deleteMany()
})

let initialHomeItems = [
    {
        name: "Chibi Cloud Pillow",
        desctiption: "The softest and the cutest cloud you'll ever lay on.",
        image_url: "https://image.dhgate.com/0x0/f2/albu/g2/M00/EB/57/rBVaGloeuZGAR5ZJAABAvrBKisw315.jpg",
        category: "home_accessories",
        price: 25,
    },
    {
        name: "Orange You Special",
        desctiption: "80% Cotton, 15% Cotton-blend, 5% Acryllic. Orange Scented.",
        image_url: "http://www.thetbbs.com/upload/2018/09/24/the-25-best-cute-pillows-ideas-on-pinterest-kawaii-cute-food-pillows-s-5da68f0d802fd9bc.jpg",
        category: "home_accessories",
        price: 25,
    },
    {
        name: "Sunny Side Up Pilloe",
        desctiption: "It's a Pillow. It's kinda cute too.",
        image_url: "http://tightsshop.co/wp-content/uploads/2018/11/cute-food-pillows-what-cute-food-pillow-should-you-buy-cute-pillows-pillows-and-food-pillows-cute-food-pillows-for-sale.jpg",
        category: "home_accessories",
        price: 25,
    },
    {
        name: "Kitty Plushy",
        desctiption: "It's a plushy, it's a pet.",
        image_url: "https://ae01.alicdn.com/kf/HTB1W1Jsy1OSBuNjy0Fdq6zDnVXaG/sumikko-gurashi-cat-plush-soft-toy-cute-pillow-blanket-doll-birthday-gift-japanese-character-kawaii-plushies.jpg_640x640.jpg",
        category: "home_accessories",
        price: 25,
    },
]

Item.create(initialHomeItems).then( items => {
    console.log("The following items have been saved: ", items);
})