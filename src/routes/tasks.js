const {Router} = require('express')
const Task = require('../models/Task')

const router = Router()


//---------------------------
//Get
//---------------------------
router.get('/', async (req, res)=>{


    try {
        
    const tasks = await Task.find({})

    res.json({
        ok: true,
        tasks
    })

    } catch (error) {
        res.status(400).json({
            ok: false,
            error: error
        })
    }
})

//---------------------------
//Post
//---------------------------
router.post('/', async (req, res)=>{
    const task = new Task()

    task.name = req.body.name
    task.description = req.body.description


    try {

        const newTask = await task.save()

        res.json({
            ok: true,
            task: newTask
        })

    } catch (error) {
        res.status(400).json({
            ok: false,
            error
        })
    }


})

//---------------------------
//Put
//---------------------------
router.put('/edit/:id', async (req, res)=>{
    const id = req.params.id

    try {
    
        const taskUpdated = await Task.updateOne({_id: id}, req.body)

        res.json({
            ok: true,
            task: taskUpdated
        })

    } catch (error) {
        res.status(400).json({
            ok: false,
            error
        })
    }

})

//---------------------------
//Delete
//---------------------------
router.delete('/delete/:id', async (req, res)=>{
    const id = req.params.id

    try {
    
        const taskDeleted = await Task.deleteOne({_id: id})

        res.json({
            ok: true,
            task: taskDeleted
        })

    } catch (error) {
        res.status(400).json({
            ok: false,
            error
        })
    }

})









module.exports = router