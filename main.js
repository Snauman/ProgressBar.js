//'use strict'
window.addEventListener('load',function(){
    console.log("script ready");
    
    let pb = new ProgressBar("progressBar",100, 304, 200, 40, 1);
    document.body.appendChild(pb.canvas);
    pb.rotate(-90)
 
    this.document.addEventListener("click",function(){
        pb.setState(pb.state-=0.1)
        pb.setFillingColor(pb.state * 200, pb.state * 200, pb.state * 200)
        
        pb.display()
        
    })
    
    

})
