const express = require('express');
const ObjectId = require('mongodb').ObjectId

const createRouter = function (customers) {

    const router = express.Router();

    router.get('/', (req, res) => {
        customers.find().toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.log(err);
            res.status(500);
            res.json({status: 500, error: err})
        })
    })

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        customers.findOne({_id: ObjectId(id)})
        .then(doc => res.json(doc))
        .catch((err) => {
            console.log(err);
            res.status(500);
            res.json({status: 500, error: err})
        })
    })

    router.post('/', (req, res) => {
        const newData = req.body;
        customers.insertOne(newData)
        .then((result) => res.json(result.ops[0]))
        .catch((err) => {
            console.log(err);
            res.status(500);
            res.json({status: 500, error: err})
        })
    })

    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        customers.deleteOne({ _id: ObjectId(id)})
        .then(result => res.json(result))
        .catch((err) => {
            console.log(err);
            res.status(500);
            res.json({status: 500, error: err})
        })
    })
    
    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        customers.updateOne({ _id: ObjectId(id)}, {$set: updatedData})
        .then(result => res.json(result))
        .catch((err) => {
            console.log(err);
            res.status(500);
            res.json({status: 500, error: err})
        })
    })

    return router;


};

module.exports = createRouter;