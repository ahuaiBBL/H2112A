class People{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }

    sport():string{
        return `${this.name}会运动`
    }
}
let p=new People('李白',21)
console.log(p.sport());
