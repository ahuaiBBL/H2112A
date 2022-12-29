/**封装成一个函数 */

// function ajaxGet(methods,url){
//     let ajax=new XMLHttpRequest()
//     ajax.open(methods,url)
//     ajax.send()
//     ajax.onreadystatechange=function(){
//         if(ajax.status==200&&ajax.readyState==4){
//             console.log(ajax.response);
            
//         }
//     }
// }

interface Params{
    methods:string,
    url:string
}

enum CODE{
    SUCCESS=200,
    READY=4
}

function ajaxGet(methods:Params['methods'],url:Params['url']){
    let ajax:XMLHttpRequest=new XMLHttpRequest()

    ajax.open(methods,url)

    ajax.send()

    ajax.onreadystatechange=function(){
        if(ajax.status==CODE.SUCCESS&&ajax.readyState==CODE.READY){
            console.log(ajax.response);
            
        }
    }
}
