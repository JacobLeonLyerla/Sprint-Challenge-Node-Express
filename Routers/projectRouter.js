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


module.exports = router