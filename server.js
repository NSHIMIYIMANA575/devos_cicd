const express=require("express");
app.get('/',(rep,res)=>{
    res.sent(" hello world");

})app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
});