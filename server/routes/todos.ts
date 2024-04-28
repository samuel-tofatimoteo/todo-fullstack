import { Router } from "express"
import { Todos } from "../../models/todos"
import * as db from "../db/db"

const router = Router()

router.get('/' , async (req, res) => {
    try{
        const allTodos = await db.getTodos() 
        res.json(allTodos)
    }catch(err){
        console.log(err);
        return res.status(500).json(err)
    }
})

router.get('/:id' , async (req, res) => {
    try{

        const id = Number(req.params.id)
        const todoId = await db.getTodoById(id)
        res.json(todoId)
    }catch(err){
        return res.status(500).json(err)
    }
})

router.post('/' , async (req, res) => {
    try {
        console.log(req.body);
        
        const newTodo: Todos = req.body
        const  addedTodo = await db.createTodos(newTodo)
        res.json(addedTodo)
    } catch (error) {
        console.log(error);
        
        return res.status(500).json(error)
    }
});

router.put('/:id' , async (req, res) => {
    try {
        const id = Number(req.params.id)
        console.log(id);
        const updatedTodo: Todos = req.body
        console.log(updatedTodo)
        await db.updateTodos(id, updatedTodo)
        console.log('route');
        res.sendStatus(200)
    } catch (error) {
        return res.status(500).json(error)
    }
});

router.delete("/:id", async (req,res)=>{
    try {
        const id = Number(req.params.id)
        await db.deleteTodos(id)
        res.json({message: "Deleted Todo"})
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.get("/active", async (req,res)=> {
    try{
       const actives = await db.getActiveTodos(true)
       res.json(actives)  
       }catch(err){
           console.log("Error getting active todos")
           res.status(500).json(err)
       }
})

router.delete("/completed",  async (req,res)=>{
    try{
        await db.deleteCompletedTodos( false);
        res.json({message:"Completed tasks have all been deleted."})
    }catch(e){
        res.status(500).json(e)
    }
})

export default router
