const { Router } = require('express');
const { check } =  require('express-validator')

const {
    getPropinas, 
    getPropina,
    createPropina,
    updatePropina,
    deletePropina
} = require('../controllers/propina');

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getPropinas );

router.get('/:id',
            [ check('id', 'Este no es un ID de Mongo válido')
            .isMongoId(), 
            validateFields],
getPropina );


 router.post('/',
        [ check('id_mesero')
        .not()
        .isEmpty().withMessage('Este campo no debe estar vacío'),
        check('id_cliente')
        .not()
        .isEmpty().withMessage('Este campo no debe estar vacío'),
        check('fecha')
        .not()
        .isEmpty().withMessage('Este campo no debe estar vacío'),
        check('hora')
        .not()
        .isEmpty().withMessage('Este campo no debe estar vacío'),
        check('valor_propina')
        .not()
        .isEmpty().withMessage('Este campo no debe estar vacío'),
        validateFields],
 createPropina);


 router.put('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 updatePropina);

 router.delete('/:id',
 [  check('id','Debe ser un id de mongo VALIDO').isMongoId(),
 validateFields],
 deletePropina);



module.exports = router;