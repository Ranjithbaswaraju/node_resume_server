const express=require("express")
const postResume=require("./routes/router")
const app=express()
const port=5100
const cors=require("cors")
app.use(express.json())
// app.use(express.urlencoded())


app.use(cors({
    origin:'http://localhost:5173'
}))

app.use("/api/",postResume)



app.listen(port,()=>{
    console.log(`server running at ${port}`)
})