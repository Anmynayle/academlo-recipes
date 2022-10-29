const router = require('express').Router()

const { route } = require('../users/users.router')
const categoriesServices = require('./categories.services')

//? /
//? /:id

router.route('/')
    .get(categoriesServices.getAllCategories)
    .post(categoriesServices.postCategory) //TODO hacerla protegida por el administrador

router.route('/:id')
    .get(categoriesServices.getCategoryById)
    .delete(categoriesServices.deleteCategories)//TODO hacerla protegida por el administrador

module.exports = router