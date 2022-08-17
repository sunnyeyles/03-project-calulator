
class Calculator{
    constructor(){
        this.PI = 3.141592653589793,
        this.E = 2.718281828459045
    }
    //getter
    get pi(){
        return `PI (${this.PI})`
    }
    get e(){
        return `E (${this.E})`
    }
    
    //methods
    ratio(x, y, width){
        const ratio = x / y
        return `height is ${width / ratio} on ratio ${x}:${y}`

    }
    percentage(x, y){
        return `${(x / y) * 100}%`
    }
    add(x, y){
        return x + y
    }
    subtract(x, y){
        return y - x
    }
    multiply(x, y){
        return x * y
    }
    divide(x, y){
        if(y === 0) return `y(the divisor) should be more than 0`
        return x / y
    }
    modulation(x, y){
        if(y === 0) return `y(the divisor) should be more than 0`
        return x % y
    }
    elevate(x, y){
        return Math.pow(x, y)
    }
    sqrt(x){
        return Math.sqrt(x)
    }

}
const calcNew = new Calculator()



