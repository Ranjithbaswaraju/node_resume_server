const express=require("express")
const postResume=require("./routes/router")
const app=express()
const port=5100
app.use(express.json())
app.use(express.urlencoded())


app.use("/api/",postResume)



app.listen(port,()=>{
    console.log(`server running at ${port}`)
})