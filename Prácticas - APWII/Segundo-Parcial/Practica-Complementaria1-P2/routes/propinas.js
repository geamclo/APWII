const { Router } = require('express');
const { check } =  require('express-validator')

const {
    getPropinas, 
    getPropina,
    createPropina,
    updatePropina,
    deletePropina
} = require('../controllers/propinas');

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getPropinas );

router.get('/:id',
            [ check('id', 'Este ID de Mongo no es válido')
            .isMongoId(), 
            validateFields],
getPropina );


 router.post('/',
        [ check('id_mesero')
        .not()
        .isEmpty().withMessage('no debe estar vacio el campo ID del mesero'),
        check('id_cliente')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo ID del cliente'),
        check('fecha')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo fecha'),
        check('hora')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo hora'),
        check('valor_propina')
        .not()
        .isEmpty().withMessage('No debe estar vacio el campo valor de la propina'),
        validateFields],
 createPropina);


 router.put('/:id',
 [  check('id','Debe ser un ID de mongo válido').isMongoId(),
 validateFields],
 updatePropina);

 router.delete('/:id',
 [  check('id','Debe ser un ID de mongo válido').isMongoId(),
 validateFields],
 deletePropina);



module.exports = router;