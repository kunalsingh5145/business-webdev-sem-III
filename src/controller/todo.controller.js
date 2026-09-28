import todo from "../models/todo.model"

const createtodo =(req,res)=>{
    newTodo={
        id: todo.length+1,
        title:req.body.title
    }
     todo.push(newTodo);
     res.status(201).json({
        message:"todo craeted successfully",
        data: newTodo
     })
}

const getTodo=(res,rej)=>{}


const updateTodo=(res,rej)=>{}


const deleteTodo=(res,rej)=>{}