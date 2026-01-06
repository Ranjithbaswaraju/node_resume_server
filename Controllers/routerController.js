


const postResume=(req,res)=>{
    const {data}=req.body

    if(!data){
        return res.status(400).json({
            message:"Please enter the resume data"
        })
    }
    else{
        res.status(200).json({
        message:"Resume read successfully",
        data:data,
        length:data.length
    })
    console.log(data)
    
    }
}

module.exports={postResume}