interface Person{
    name:string,
    age:number,
    sex:number,
    isjob:boolean,
    hobby:string[],
    former:number,
    formerName:[string,string,string]
}
// 相同的名字会合并，如果属性名相同，以第一个接口定义为准
interface Person{
    idCar?:string
}

let person1:Person={
    name:'程怀博',
    age:21,
    sex:0,
    isjob:false,
    hobby:['乒乓球','打游戏'],
    former:6969,
    formerName:['hx','chb','69'],
    idCar:'6996'
}