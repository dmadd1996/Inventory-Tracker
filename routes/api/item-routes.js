const router = require('express').Router();
const { Item } = require('../../models');

router.get('/', (req, res) => {
    Item.findAll()
        .then((items) => res.json(items))
        .catch((error) => res.status(500).json(error))
});

router.get('/:id', (req, res) => {
    Item.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(items => {
            if (!items) {
                res.status(404).json({ message: 'No item found with this id' });
                return;
            }
            res.json(items);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    /* req.body should look like this...
      {
        "item_name": "<<STRING>>",
        "quantity": "<<DECIMAL>>",
        "unit_type": "<<STRING>>"
      }
    */
    Item.create({
        item_name: req.body.item_name,
        quantity: req.body.quantity,
        unit_type: req.body.unit_type
    })
        .then((BTOPS_Inventory) => res.status(200).json(BTOPS_Inventory))
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

router.put('/:id', (req, res) => {
    Item.update(req.body, {
        where: {
          id: req.params.id
        }
      })
        .then(BTOPS_Inventory => {
          if (!BTOPS_Inventory[0]) {
            res.status(404).json({ message: 'No item found with this id' });
            return;
          }
          res.json(BTOPS_Inventory);
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    Item.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(BTOPS_Inventory => {
            if (!BTOPS_Inventory) {
                res.status(404).json({ message: 'No item found with this id' });
                return;
            }
            res.json(BTOPS_Inventory);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;
