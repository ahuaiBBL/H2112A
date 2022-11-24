const fs=require('fs')

function mx(){
    return new Promise(function(resolve,reject){
        fs.readFile('./梅西.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

function ly(){
    return new Promise(function(resolve,reject){
        fs.readFile('./论语.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

function getPeach(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./桃花源记.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}


mx().then(res=>{
    return res.toString()
}).then(data=>{
    console.log(data);
    ly().then(res=>{
        console.log(res.toString());
    })
}).then(()=>{
    getPeach().then(res=>{
        console.log(res.toString());
    })
})