const {Router} = require('express')
const Task = require('../models/Task')

const router = Router()

router.get('/', async (req, res)=>{
    /* try {
        
        const tasks = await Task.find({})

        res.json({
            ok: true,
            data: tasks
        })



    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error
        })
    } */

    Task.find({}, (err, tasksDB)=>{
        if(err){
            return res.status(500).json({
                ok: false,
                err
            })
        }

        return res.json({
            ok: true,
            data: tasksDB
        })
    })
})

router.post('/', async (req, res)=>{
    const task = new Task()
    const body = req.body

    task.title = body.title
    task.description = body.description

    /* try {
        
        const taskPosted = await task.save()

        res.json({
            ok: true,
            data: taskPosted
        })

    } catch (error) {
        
        res.status(500).json({
            ok: false,
            message: error
        })

    } */

    task.save((err, taskDB)=>{
        if(err){
            return res.status(500).json({
                ok: false,
                err
            })
        }

        return res.json({
            ok: true,
            data: taskDB
        })
    })
})

router.put('/edit/:id', async (req, res)=>{

    const id = req.params.id
    const dataUpdated = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }

    /* try {
        
        const taskUpdated = await Task.findByIdAndUpdate(id, dataUpdated)

        res.json({
            ok: true,
            data: taskUpdated
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error
        })
    } */

    Task.findByIdAndUpdate(id, req.body, (err, taskDB)=>{
        if(err){
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if(!taskDB){
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'ID no existente'
                }
            })
        }

        return res.json({
            ok: true,
            data: taskDB
        })
    })
})


router.delete('/delete/:id', async (req, res)=>{

    const id = req.params.id

    /* try {
        
        const taskDeleted = await Task.findByIdAndDelete(id)

        res.json({
            ok: true,
            data: taskDeleted
        })

    } catch (error) {
        res.status(500).json({
            ok: false,
            message: error
        })
    } */

    Task.findByIdAndRemove(id, (err, taskDB)=>{
        if(err){
            return res.status(500).json({
                ok: false,
                err
            })
        }

        if(!taskDB){
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'ID no existente'
                }
            })
        }

        return res.json({
            ok: true,
            data: taskDB,
            message: 'Eliminado satisfactoriamente'
        })
    })    
})




module.exports = router