import { Router } from "express"
import { TodoIntrfc } from "../../models/model"
import * as db from "../db/db"

const router = Router()
// GET all todos
router.get('/' , async (req, res) => {
    try{
        const allTodos = await db.getTodos() 
        res.json(allTodos)
    }catch(err){
        console.log(err);
        return res.status(500).json(err)
    }
})
// GET todo by id
router.get('/:id' , async (req, res) => {
    try{
        // 19-20 = const todoId = await db.getTodoById(Number(req.params.id));
        const id = Number(req.params.id)
        const todoId = await db.getTodoById(id)
        res.json(todoId)
    }catch(err){
        return res.status(500).json(err)
    }
})
// POST a new todo
router.post('/' , async (req, res) => {
    try {
        console.log(req.body);
        
        const newTodo: TodoIntrfc = req.body
        const  addedTodo = await db.createTodos(newTodo)
        res.json(addedTodo)
    } catch (error) {
        console.log(error);
        
        return res.status(500).json(error)
    }
});
// UPDATE an existing todo
router.put('/:id' , async (req, res) => {
    try {
        const id = Number(req.params.id)
        console.log(id);
        const updatedTodo: TodoIntrfc = req.body
        console.log(updatedTodo)
        await db.updateTodos(id, updatedTodo)
        console.log('route');
        res.sendStatus(200)
    } catch (error) {
        return res.status(500).json(error)
    }
});

// DELETE a todo
router.delete("/:id", async (req,res)=>{
    try {
        const id = Number(req.params.id)
        await db.deleteTodos(id)
        res.json({message: "Todo deleted"})
    } catch (error) {
        return res.status(500).json(error)
    }
})

// GET all active todos
router.get("/active", async (req,res)=> {
    try{
       const actives = await db.getActiveTodos(true)
       res.json(actives)  
       }catch(err){
           console.log("Error in getting the active todos")
           res.status(500).json(err)
       }
})

// DELETE all completed todos
router.delete("/completed",  async (req,res)=>{
    try{
        await db.deleteCompletedTodos( false);
        res.json({message:"All completed tasks have been deleted."})
    }catch(e){
        res.status(500).json(e)
    }
})

export default router
