const typeControllers = require('./type.controllers')

const getAllType = (req,res)=>{
    typeControllers.getAllType()
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((err)=>{
        res.status(400).json({message: err.message});
    });
};

const getTypeById = (req,res)=>{
    const id = req.params.id
    typeControllers.getTypeById(id)
    .then((data)=>{
        if(data){
            res.status(200).json(data);
        }else{
            res.status(404).json({message: "Invalid Id"})
        }
    })
    .catch((err)=>{
        res.status(400).json({message: err.message});
    });
};

const postType = (req, res)=>{
    const { name } = req.body;
    if (name){
        typeControllers.createType(name)
        .then((data)=>{
            res.status(201).json(data);
        })
        .catch((err)=>{
            res.status(400).json({message: err.message})
        });
    } else{
        res.status(400).json({message:"Missing Data"})
    }
}

const deleteTypes = (req,res)=>{
    const userId = req.user.id
    const id = req.params.id
    typeControllers.deleteType(id,userId)
        .then(data=>{
            if(data){
                res.status(204).json(data)
            }else{
                res.status(404).json({message: 'invalid id'})
            }
        })
        .catch(err=>{
            res.status(400).json({message:err.message})
        })
}

module.exports ={
    getAllType,
    getTypeById,
    postType,
    deleteTypes
}

