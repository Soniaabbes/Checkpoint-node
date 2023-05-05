const fs= require ("fs");
fs.writeFile("welcome.txt","Hello Node",(err,data)=>{
    if (err) throw err;
    console.log("file created")
    
     fs.readFile("welcome.txt","utf8", (err,data)=>{
        if (err)throw err ;
        console.log(data)
     });
    
    
})
