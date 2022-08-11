const { Item } = require('../models');

const itemData = [
    {
        item_name: 'Beef',
        quantity: 1.0,
        unit_type: 'pound'
    },
    {
        item_name: 'Chicken',
        quantity: 1.0,
        unit_type: 'pound'
    },
    {
        item_name: 'Pork',
        quantity: 1.0,
        unit_type: 'pound'
    },
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;