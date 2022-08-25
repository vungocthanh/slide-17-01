let Temperature = function (celsius){
    this.celsius = celsius;

    this.calculateCelsiusToF = function (){
        return (this.celsius * 9/5 ) + 32;
    }
    this.calculateCelsiusToK = function () {
        return this.celsius + 273.15;
    }
}
let calculate = new Temperature(25)
alert("F is a :" + calculate.calculateCelsiusToF())
alert("K is a :" + calculate.calculateCelsiusToK())