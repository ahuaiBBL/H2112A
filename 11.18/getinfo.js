//引入fs模板
const fs=require('fs')
//使用promise封装
const p=new Promise(function(resolve,reject){
    fs.readFile('./论语.md',(err,data)=>{
        //判断如果失败
        if(err)reject(err)
        //成功
        resolve(data)
    })
})
p.then(function(val){
    console.log(val.toString());
}),function(err){
    console.log('读取失败');
}


// //引入fs模板
// const fs=require('fs')
// //使用promise封装
// const p=new Promise(function(resolve,reject){
//     fs.readFile('./论语.md',(err,data)=>{
//         //判断如果失败
//         if(err)reject(err)
//         //成功
//         resolve(data)
//     })
// })
// p.then(function(val){
//     console.log(val.toString());
// }),function(err){
//     console.log('读取失败');
// }



// //引入fs模板
// const fs=require('fs')
// //使用promise封装
// const p=new Promise(function(resolve,reject){
//     fs.readFile('./论语.md',(err,data)=>{
//         //判断如果失败
//         if(err)reject(err)
//         //成功
//         resolve(data)
//     })
// })
// p.then(function(val){
//     console.log(val.toString());
// }),function(err){
//     console.log('读取失败');
// }