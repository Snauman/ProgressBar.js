
/**
 * @constructor
 * Constructor function for a progress bar
 * @param {String} name 
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} w 
 * @param {Number} h 
 * @param {Number} state 
 */

function ProgressBar(name,x,y,w,h,state){
    /** @private*/this.x=x;
    /** @private*/ this.y=y;
     /** @private*/this.state=state;
    this.canvas=document.createElement("canvas");
     /** @private*/this.canvas.style.position="absolute";
     /** @private*/this.canvas.style.left=x+"px";
     /** @private*/this.canvas.style.top=y+"px"
     /** @private*/this.canvas.id=name;
     /** @private*/this.canvas.height=h;
     /** @private*/this.canvas.width = w;
     /** @private*/this.borderColor="rgb(0,0,0)";
     /** @private*/this.fillingColor="rgb(0,200,0)";
     /**@private */this.rotation=0;
    this.display();
}

/**
 * Display all the informations of the progress bar
 */ 
ProgressBar.prototype.toString=function(){
    return "Name:"+this.canvas.id+
    ", X: "+this.x+
    ", Y: "+this.y+
    ", Width: "+this.canvas.width+
    ", Height: "+this.canvas.height+
    ", State: "+this.state;
    
}


/**
 * Display the progress bar
 */
ProgressBar.prototype.display=function(){
    if(this.canvas.getContext){
        let ctx= this.canvas.getContext('2d');
        ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        ctx.fillStyle=this.fillingColor;
        let fillState=this.canvas.width*this.state;
        ctx.fillRect(0,0,fillState,this.canvas.height);
        ctx.fillStyle =this.borderColor;
        ctx.strokeRect(0, 0, this.canvas.width, this.canvas.height);
        }else{
            console.log("no context"); 
    }
}

/**
 * Set the state of the progress bar
 * @param {Number} newState 
 */
ProgressBar.prototype.setState=function(newState){
    if(newState>1 || this.state>1) return false;
    this.state=newState;
}

/**
 * Set the color of the border of the progress bar
 * @param {Number} r 
 * @param {Number} g 
 * @param {Number} b 
 */
ProgressBar.prototype.setBorderColor=function(r,g,b){
    this.borderColor="rgb("+r+","+g+","+b+")"
}

/**
 * Set the color of the progress bar itself
 * @param {Number} r 
 * @param {Number} g 
 * @param {Number} b 
 */
ProgressBar.prototype.setFillingColor = function (r, g, b) {
    this.fillingColor = "rgb(" + r + "," + g + "," + b + ")"
}


/**
 * Set the property x of the progress bar
 * @param {Number} x 
 */
ProgressBar.prototype.setX=function(x){
    this.canvas.style.left=x+"px"
    this.x=x
}


/**
 * Set the property y of the progress bar
 * @param {Number} y 
 */
ProgressBar.prototype.setY = function (y) {
    this.canvas.style.top = y + "px"
    this.y = y
}

/**
 * Get the property x of the progress bar
 * @return {Number}
 */
ProgressBar.prototype.getX=function(){
    return this.x;
}

/**
 * Get the property y of the progress bar
 *  @return {Number}
 */
ProgressBar.prototype.getY=function(){
    return this.x
}

/**
 * Get the state of the progress bar
 *  @return {Number}
 */
ProgressBar.prototype.getState=function(){
    return this.state;
}

/**
 * Get the border color of the progress bar
 *  @return {String}
 */
ProgressBar.prototype.getBorderColor=function(){
    return this.borderColor
}

/**
 * Get the color of the progress bar itself
 * @return {String}
 */
ProgressBar.prototype.getFillingColor=function(){
    return this.fillingColor;
}

/**
 * Set the name(id) of the progress bar
 * @param {String} name 
 */
ProgressBar.prototype.setName=function(name){
    this.canvas.id=name
}

/**
 * Get the name(id) of the progress bar
 * @return {String}
 */
ProgressBar.prototype.getName=function(){
    return this.canvas.id;
}

/**
 * Rotate the progress bar
 */
ProgressBar.prototype.rotate=function(angle){
    this.rotation+=angle
    this.canvas.style.transform="rotate("+this.rotation+"deg)"
}