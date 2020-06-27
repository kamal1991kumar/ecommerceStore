const router = require("express").Router();
const { Product, Category, Vendor } = require('./schema');
const app = require('../../config');
const _ = require('lodash');
const response = app.responseData;

router.get('/', function (req, res) {

    const search = {};
    if( req.query.id && req.query.id.length !== 0 ) {
        search._id = req.query.id;
    }

    Product.find( search )
        .sort({ _id: -1 })
        .exec()
        .then( ( result ) => {

            const _response = response.success();
            _response.payload.data = result;

            res.status(200).send( _response );
        } )
        .catch( () => {
            res.status(202).send(response.failure('No Product data Found.'));
        } );
});

router.post('/add', function (req, res) {

    const product = new Product(req.body);
    product
        .save()
        .then(() => {
            res.status(200).send(response.success('Product has been successfully Submitted'));
        })
        .catch(() => {
            res.status(400).send(response.failure('Some thing went wrong.'));
        });

});

router.put('/update/:id', function (req, res) {

    const { body, params } = req;
    Product.findByIdAndUpdate(params.id, body).exec()
        .then( () => {
            res.status(200).send( response.success('Product Successfully Updated.') );
        } )
        .catch( () => {
            res.status(202).send(response.failure('Product not Found.'));
        } );
});

router.delete('/delete/:id', function (req, res) {

    const { params } = req;
    Product.remove({ _id: params.id }).exec()
        .then( () => {
            res.status(200).send( response.success('Product Successfully Deleted.') );
        } )
        .catch( () => {
            res.status(202).send(response.failure('Product not Found.'));
        } );
});


router.post('/category/add', function (req, res) {

    const category = new Category(req.body);
    category
        .save()
        .then(() => {
            res.status(200).send(response.success('Category has been successfully Submitted'));
        })
        .catch(() => {
            res.status(400).send(response.failure('Some thing went wrong.'));
        });

});


module.exports = router;