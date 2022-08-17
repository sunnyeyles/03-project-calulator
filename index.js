
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
        //return: 'height is --- on ratio x:y'
        //What the ratio height to width is, if x:y is 1:3 and width is 30 then the height is 10

    }
    percentage(x, y){
        return `${(x / 100) * y}%`
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

// console.log(calcNew.elevate(6, 5))
// console.log(calcNew.sqrt(144))
console.log(calcNew.percentage(20, 100))