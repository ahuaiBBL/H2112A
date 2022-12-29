let list = [{
        "id": 1,
        "name": "李白",
        "sex": 0,
        "status": false
    },
    {
        "id": 2,
        "name": "韩信",
        "sex": 0,
        "status": false
    },
    {
        "id": 3,
        "name": "孙尚香",
        "sex": 1,
        "status": false
    },
    {
        "id": 4,
        "name": "公孙离",
        "sex": 1,
        "status": false
    },
    {
        "id": 5,
        "name": "孙悟空",
        "sex": 0,
        "status": false
    },
    {
        "id": 6,
        "name": "猪八戒",
        "sex": 0,
        "status": false
    },
    {
        "id": 7,
        "name": "元歌",
        "sex": 0,
        "status": false
    },
    {
        "id": 8,
        "name": "千年之狐",
        "sex": 0,
        "status": false
    },
    {
        "id": 9,
        "name": "逐梦之影",
        "sex": 0,
        "status": false
    },
    {
        "id": 10,
        "name": "未来机甲",
        "sex": 1,
        "status": false
    },
    {
        "id": 11,
        "name": "至尊宝",
        "sex": 0,
        "status": false
    },
    {
        "id": 12,
        "name": "玉兔公主",
        "sex": 1,
        "status": false
    },
    {
        "id": 13,
        "name": "末日机甲",
        "sex": 1,
        "status": false
    },
    {
        "id": 14,
        "name": "全息碎影",
        "sex": 0,
        "status": false
    },
    {
        "id": 15,
        "name": "街头霸王",
        "sex": 0,
        "status": false
    },
    {
        "id": 16,
        "name": "电玩小子",
        "sex": 0,
        "status": false
    },
    {
        "id": 17,
        "name": "橘右京",
        "sex": 0,
        "status": false
    },
    {
        "id": 18,
        "name": "不知火舞",
        "sex": 1,
        "status": false
    },
    {
        "id": 19,
        "name": "娜可露露",
        "sex": 1,
        "status": false
    },
    {
        "id": 20,
        "name": "诸葛亮",
        "sex": 0,
        "status": false
    }
]

// window.onload = function () {
    //定时器每秒调用一次fnDate()
    setInterval(function () {
            fnDate();
        },
        1000);
// }

//js 获取当前时间
function fnDate() {
    var Time = document.getElementById("time");
    var date = new Date();
    var year = date.getFullYear(); //当前年份
    var month = date.getMonth(); //当前月份
    var data = date.getDate(); //天
    var hours = date.getHours(); //小时
    var minute = date.getMinutes(); //分
    var second = date.getSeconds(); //秒
    var time = year + "-" + fnW((month + 1)) + "-" + fnW(data) + " " + fnW(hours) + ":" + fnW(minute) + ":" + fnW(second);
    Time.innerHTML = time;
}
//补位 当某个字段不是两位数时补0
function fnW(str) {
    var num;
    str > 10 ? num = str : num = "0" + str;
    return num;
}
var arr=[]
// 获取ul dom元素
var ul=document.getElementById('ul')
// 获取单人点击按钮
var sl=document.getElementById('single')
console.log(sl);
// 获取双人点击按钮
var cwd=document.getElementById('crowded')
// 获取男生点击按钮
var boy=document.getElementById('boy')
// 获取女生点击按钮
var girl=document.getElementById('girl')
// 获取添加的名字
var title=document.getElementById('title')
// 渲染名字
function student(){
    ul.innerHTML=''
    list.forEach(item=>{
        let li=document.createElement('li')
        li.innerHTML=`<span>${item.name}</span>`
        // 在指定元素节点的最后一个子节点之后添加节点
        ul.appendChild(li)
    })
}
student()

// 随机一个对象
// var i=list[Math.floor((Math.random()*list.length))].name
// console.log(i);

// 封装一个随机数
function Nonce(arr){
    var max=arr
    var min =0
    return Math.floor(Math.random()*(max-min)+min)
}
// 单人点名
sl.onclick=function(e){
    if(e.target.innerText=='停止'){
        sl.innerText='单人点名'
        let index=Nonce(list.length)
        console.log(list);
        title.innerText=list[index].name
    }else{
        sl.innerText='停止'
    }
}
// 双人点名
cwd.onclick=function(e){
    if(e.target.innerText=='停止'){
        cwd.innerText='双人点名'
        let one=Nonce(list.length)
        let two=Nonce(list.length)
        title.innerText=list[one].name+''+list[two].name
    }else{
        cwd.innerText='停止'
    }
}

var boys=[]
var girls=[]
// 获取男生的数据
function getBoys(){
    boys=list.filter(i=>i.sex==0)
}
getBoys()
// 获取女生的数据
function getGirls(){
    girls=list.filter(i=>i.sex==1)
}
getGirls()
// 男生点名
boy.onclick=function(e){
    if(e.target.innerText=='停止'){
        boy.innerText='男生点名'
        let index=Nonce(boys.length)
        title.innerText=boys[index].name
    }else{
        boy.innerText='停止'
    }
}
// 女生点名
girl.onclick=function(e){
    if(e.target.innerText=='停止'){
        girl.innerText='男生点名'
        let index=Nonce(girls.length)
        title.innerText=girls[index].name
    }else{
        girl.innerText='停止'
    }
}