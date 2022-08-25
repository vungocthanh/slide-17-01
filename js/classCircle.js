let Circle = function (radius,color){
    this.radius = radius;
    this.color = color;

    this.setRadius = function (radius) {
        this.radius = radius;
    }
    this.setColor = function (color){
        this.color = color;
    }
    this.getColor = function (){
        return this.color;
    }
    this.getRadius = function (){
        return this.radius;
    }
    this.getArea = function (){
        return Math.PI* this.getRadius() * this.getRadius() + " Color: "+ color;
    }
}
let calculate =new Circle(2,"red")
console.log(calculate.getArea())