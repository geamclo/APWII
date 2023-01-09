const { Router } = require('express');

const { 
    usuarioDelete,
    usuarioPost,
    usuarioGet,
    usuarioPut

} = require('../controllers/usuario');




const router = Router(); 


router.get('/', usuarioGet )

router.post('/', usuarioPost )

router.put('/:id', usuarioPut )

router.delete('/:id', usuarioDelete )


module.exports= router;