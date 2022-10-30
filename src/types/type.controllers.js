const Type = require('../models/types.models')


//? Ver todos los typos
//? Ver un typo en especifico
//? Crear Type
//? Eliminar type

const getAllType = async () =>{
    const data = await Type.findAll()
    return data
}

const getTypeById = async () =>{
    const data = await Type.findOne({
        where:{
            id
        }

    })
    return data
}

const createType = async (data)=>{
    const response = await Type.create({
        name:data.name,
        userId: data.userId
    })
    return response
}

const deleteType = async (id) =>{
    const data = await Type.destroy({
        where:{
            id
        }
    })
    return data
}

module.exports={
    getAllType,
    getTypeById,
    createType,
    deleteType
}

