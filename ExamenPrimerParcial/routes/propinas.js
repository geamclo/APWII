const { Router } = require('express')
const { check } =  require('express-validator')

const { createPropinas,
     deletePropinas } = require('../controllers').Propinas;

const { validateFields } = require('../middlewares')

const router = Router();

router.post('/',[
    check('name', 'Es requerido').not().isEmpty(),
    validateFields
] , createPropinas)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deletePropinas)

module.exports = router;