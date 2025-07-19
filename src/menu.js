class MenuItem {
    constructor(name, price, description) {
        this.name = name
        this.price = price
        this.description = description
    }
}

const friedRiceWithTofu = new MenuItem(
    'with Tofu',
    '14.50',
    'Rice fried with vegetables, eggs and tofu.'
)
const friedRiceWithChicken = new MenuItem(
    'with Chicken',
    '15.50',
    'Rice fried with vegetables, eggs and chicken.'
)
const friedRice = { friedRiceWithTofu, friedRiceWithChicken }


const friedNoodlesWithChicken = new MenuItem(
    'with Chicken',
    '15.50',
    'Egg noodles fried with vegetables, eggs and chicken.'
)
const friedNoodlesWithTofu = new MenuItem(
    'with Tofu',
    '15.50',
    'Egg noodles fried with vegetables, eggs and tofu.'
)
const noodles = { friedNoodlesWithChicken, friedNoodlesWithTofu }


const summerRollsWithTofu = new MenuItem(
    'Summer Rolls with Tofu',
    '7.50',
    'Summer Rolls with Tofu and other stuff.'
)
const entrees = { summerRollsWithTofu }


const bunderberg = new MenuItem(
    'Bunderburg',
    '6',
    'Gingerbeer, Traditional Lemonade, Tropical Mango'
)
const fruitJuice = new MenuItem(
    'Fruit Juice',
    '5',
    'Orange, Apple, Mango, Guave'
)
const drinks = { bunderberg, fruitJuice }

export default {
    'Fried Rice': friedRice,
    'Fried Noodles': noodles,
    'Entrees': entrees,
    'Drinks': drinks
}