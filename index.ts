export abstract class MyGraphicsPrimitive2D{
public pointX:number[]//[x1, x2, x3, x4]
public pointY:number[]//[y1, y2, y3, y4]


public toMovePrimitive(moveX:number, moveY:number):void{
    this.pointX.forEach(x => {
        x+=moveX
    });
    this.pointY.forEach(y => {
        y+=moveY
    });
}
}

export abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D{
    public area:number
}

export class MyCircle extends MyAreaPrimitive2D{
    public circleCenter:number[]//[x,y]
    public radius:number
}

export class MyRectangle extends MyAreaPrimitive2D{
public width:number
public height:number
public topLeft:number[]//[x,y]
public bottomRight:number[]//[x,y]    
}