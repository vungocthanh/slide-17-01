let Rectangle = function (weight,height){
    this.weight = weight;
    this.hight = height;
    
    this.getArea = function(){
        return this.weight * this.hight;
    }
    this.getPerimeter = function(){
        return ( this.weight + this.hight) * 2;
    }
    this.drawRectangle = function (){
        let c = document.getElementById("drawRectangle");
        let ctx = c.getContext("2d");
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(20, 20, weight, height);
    }

}
let weight = prompt('Enter Weight');
let height = prompt('Enter Height');
let rectangle = new Rectangle(weight,height);
rectangle.drawRectangle();
alert("Perimeter Rectangle = " + rectangle.getPerimeter());
alert("Area Rectangle = "+rectangle.getArea());

