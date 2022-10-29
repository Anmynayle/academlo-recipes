const Categories = require('../models/categories.models')

//? Ver todas las categories
//? Ver una categoria en especifico
//? Crear Categoria
//? Eliminar Categoria

const getAllCategories = async () =>{
    const data = await Categories.findAll()
    return data
}

const getCategoriesById = async (id)=> {
    const data = await Categories.findOne({
        where:{
            id
        }
    })
    return data
}

const createCategories = async (name)=>{
    const data = await Categories.create({
        name
    })
    return data
}

const deleteCategories = async (id)=>{
    const data = await Categories.destroy({
        where:{
            id
        }
    })
    return data
}

module.exports ={
    getAllCategories,
    getCategoriesById,
    createCategories,
    deleteCategories

}