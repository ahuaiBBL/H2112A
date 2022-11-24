const fs=require('fs')


function getPeach(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./桃花源记.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

function mx(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./梅西.md',(err,data)=>{
            if(err)reject(err)
            resolve(data)
        })
    })
}

function ly(){
    return new Promise((resolve,reject)=>{
        fs.readFile('./论语.md',(err,data)=>{
            if(err)reject(err)
            resolve(data)
        })
    })
}


getPeach().then(res=>{
    return res.toString()
}).then(data=>{
    console.log(data);
    mx().then(res=>{
        console.log(res.toString());
    })
}).then(()=>{
    ly().then(res=>{
        console.log(res.toString());
    })
})