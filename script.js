window.onload = function(){
    var canvasWidth = 900;
    var canvasHeight = 600;
    var blockSize = 30;
    var ctx;
    var delay = 1000; //le temps son exprimé en miliseconde. donc 1000 miliseconde = 1 seconde.
    var snakee;
    
    init();
    
    function init(){
        var canvas = document.createElement('canvas');
        canvas.width=canvasWidth;
        canvas.height=canvasHeight;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        snakee = new Snake([[6,4][5,4][4,4]]);
        refreshCanvas();

    }
    
    function refreshCanvas(){
        /*
        xCoord +=5;
        yCoord +=5;
        le montant ajouter au Coord determine la vitesse du serpent.*/
        ctx.clearRect(0,0,canvasWidth,canvasHeight);
        snakee.advance();
        snakee.draw();
        setTimeout(refreshCanvas,delay);
    }
    
    function drawBlock(ctx, position){
        var x=position[0]*blockSize;
        var y= position[1]*blockSize;
        ctx.fillRect(x , y , blockSize , blockSize);
    }
    
    function Snake (body){
        this.body = body;
        this.draw = function(){
            ctx.save();
            ctx.fillStyle = "#ff0000";
            for(var i=0; i<this.body.length;i++){
                drawBlock(ctx, this.body[i]);
            }
            ctx.restore();
        }
        this.advance = function(){
            var nextPosition = this.body[0].slice();
            nexPosition[0] +=1;
            this.body.unshift(nextPosition);
            this.body.pop();
        }
    }
}