

const Product=require("../models/product.model")


const authorise=async(req,res,next)=>{
// console.log({id:req.params.id});
// console.log({user:req.user});

try {
    const product=await Product.findOne({_id:req.params.id}).populate("user_id").lean().exec()
    if(product.user_id._id==req.user._id)
    {
        // console.log("true")
        return next()
    }
    else{
        return res.send("you are not a seller")
    }
    // console.log(product);
    // console.log(req.user);
} catch (err) {
    console.log(err)
}

}




module.exports=authorise