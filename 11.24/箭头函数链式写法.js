const fs = require('fs')

const getPeach=()=>{
    return new Promise(function (resolve, reject) {
        fs.readFile('./桃花源记.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}
const get=()=> {
    return new Promise(function (resolve, reject) {
        fs.readFile('./论语.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}
const mx=()=>{
    return new Promise(function(resolve,reject){
        fs.readFile('./梅西.md',(err,data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })

}


getPeach().then(res=>{
    // console.log(res.toString());
    return res.toString()
}).then(data=>{
    console.log(data);
    get().then(res=>{
        console.log(res.toString());
    })
}).then(()=>{
    mx().then(res=>{
        console.log(res.toString());
    })
})