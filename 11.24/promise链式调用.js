const fs = require('fs')

function getPeach() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./桃花源记.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}
function get() {
    return new Promise(function (resolve, reject) {
        fs.readFile('./论语.md', (err, data) => {
            if (err) reject(err)
            resolve(data)
        })
    })
}
function mx(){
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