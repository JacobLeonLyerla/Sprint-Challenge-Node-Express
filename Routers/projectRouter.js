const express = require('express');

const router = express.Router();


const db = require('../data/helpers/projectModel')
router.get('/',(req,res)=>{
    db
    .get()
    .then(projects =>{
        res.json(projects)
    })
    .catch(error=>{
        res.status(500).json({error: "darn this error"})
    })
})

router.get('/:id', (req,res) =>{
    const { id } = req.params

    db
    .get(id)
    .then(project=>{
    res.json(project)
})
.catch(error =>{
    res.status(500).json({error: "darn this error"})
})
})

router.post('/',(req,res)=>{
    const project = req.body;
    db
    .insert(project)
    .then(response =>{
    res.json(response)

    })
    .catch(error =>{
        res.status(500).json({error: "darn this error"})
    })
})


router.delete('/:id', (req,res)=>{
    const { id } = req.params;
    let project;

    db
    .get(id)
    .then(response =>{
        project = { ...response[0] }
        db
        .remove(id)
        .then(response =>{
            res.status(200).json(project)
        })
        
    })
    .catch(err =>{
        res.status(500).json({error:"this darn error"});    
      }); 

})

router.put('/:id', (req,res)=>{
    const { id } = req.params
    const update = req.body;
    db
    .update(id, update)
    .then(count =>{
    res.json(update)
    })
    .catch(err=>{
        res.status(400).json({error: "There was an error while saving the project to the database"});
    });
});




module.exports = router