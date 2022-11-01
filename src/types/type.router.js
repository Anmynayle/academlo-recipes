const router = require('express').Router()
const adminValidate = require('../middlewares/rol.middleware')
const passport = require('passport')
const typeServices = require('./type.services')

//?
//?:id

router.route('/')
    .get(typeServices.getAllType)
    .post(passport.authenticate('jwt',{session:false}),
        adminValidate,
        typeServices.postType)

router.route('./:id')
    .get(typeServices.getTypeById)
    .delete(passport.authenticate('jwt',{session:false}),
    adminValidate,
    typeServices.deleteTypes
    )


module.exports = router