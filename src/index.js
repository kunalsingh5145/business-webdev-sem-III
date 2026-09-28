import express from "express";
import todoRouter from "./routes/todo.routes";
const app= express();
const port =8080;
 
app.get('/',(res,rej)=>{
    res.send('Hello')
})

app.use("/api/v1/todos",todoRouter);




app.listen(port,()=>{
    console.log("server is running")
})