class lines {
    constructor(color){
        this.cx = mouseX;
        this.cy = mouseY;

        this.px = pwinMouseX;
        this.py = pwinMouseY;

        this.color = color
    }
    display(){
        stroke(this.color);
        line(this.px,this.py,this.cx,this.cy);
    }
}