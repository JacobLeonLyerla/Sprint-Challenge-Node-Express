const express = require('express');

const router = express.Router();


const db = require('../data/helpers/actionModel')
router.get('/',(req,res)=>{
    db
    .get()
    .then(actions =>{
        res.json(actions)
    })
    .catch(error=>{
        res.status(500).json({error: "darn this error"})
    })
})
router.get('/:id', (req,res) =>{
    const { id } = req.params

    db
    .get(id)
    .then(action=>{
    res.json(action)
})
.catch(error =>{
    res.status(500).json({error: "darn this error"})
})
})
router.post('/',(req,res)=>{
    const action = req.body;
    db
    .insert(action)
    .then(response =>{
    res.json(response)

    })
    .catch(error =>{
        res.status(500).json({error: "darn this error"})
    })
})


router.delete('/:id', (req,res)=>{
    const { id } = req.params;
    let action;

    db
    .get(id)
    .then(response =>{
        action = { ...response[0] }
        db
        .remove(id)
        .then(response =>{
            res.status(200).json(action)
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
        res.status(400).json({error: "There was an error while saving the action to the database"});
    });
});

module.exports = router