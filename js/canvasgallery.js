var canvas = document.getElementById('can');
innerHeight = 400;
innerWidth = 800;
canvas.width = innerWidth;
canvas.height = innerHeight;
var c = canvas.getContext('2d');
var mouse = {
    x: undefined,
    y: undefined
}
var maxRadius = 40;
var colorArray = [
    '#ffaa33',
    '#99ffaaa',
    '#00ff00',
    '#4411aa',
    '#ff1100'
]
window.addEventListener('mousemove', function(event){
    mouse.x  = event.x;
    mouse.y = event.y;
})
function Circle(x,y,dx,dy,radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.draw = function(){
        c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
    c.fillStyle = this.color;
    c.fill();
    }
    this.update = function(){
        if(this.x + radius > innerWidth ||this. x- radius < 0)
        {
            this.dx = -this.dx;
        }
        if(this.y + radius > innerHeight || this.y - radius < 0)
        {
            this.dy= -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

      if ((mouse.x-370) - this.x < 50 && (mouse.x-370) - this.x > -50 && (mouse.y - 280) - this.y < 50 && (mouse.y-280) - this.y > -50 ){
        if(this.radius<maxRadius){
        this.radius +=1;
        }
        }
        else if(this .radius > this.minRadius){
            this.radius -= 1;
        }

        this.draw();
    }
}
var circleArray = [];
for(var i = 0 ; i<400;i++){
    var radius = Math.random() * 3 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) ;
    var dy = (Math.random() - 0.5) ;
    circleArray.push(new Circle(x,y,dx,dy,radius));
}
 function animate(){
     requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i = 0 ; i<circleArray.length;i++){
        circleArray[i].update();
    }
 }
 animate();

