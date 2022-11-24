const fs = require('fs')

function getPeach() {
    return new Promise(function (resolve, reject) {
            // if (err) reject(err)
            // resolve(data)
            reject('我是桃花源记错误')
    })
}
function get() {
    return new Promise(function (resolve, reject) {
            // if (err) reject(err)
            // resolve(data)
            reject('论语报错')
    })
}
getPeach().catch(err=>{
    console.log(err,'18');
})
get().catch(err=>{
    console.log(err,'21');
})