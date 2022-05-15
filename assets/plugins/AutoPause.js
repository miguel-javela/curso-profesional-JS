class AutoPause {
    constructor(){
        this.threshold = 0.25;
        //este error sucede porque inicialmente el IntersectionObserver es quien llama la funcion handlerIntersection, por lo tanto
        //no tiene la funcion play o pause,pues dentro de la funcion handlerIntersection el this hace referencia a IntersectionObserver,
        //por eso se define el this permanentemente a la instancia del objeto por medio de bind
        this.handlerIntersection = this.handlerIntersection.bind(this);//no entiendo esta linea

    }
    run(player){
        this.player = player;
        const observer = new IntersectionObserver(this.handlerIntersection,{
            threshold: this.threshold
        })
        observer.observe(this.player.media)
    }

    handlerIntersection(entries){
        const entry = entries[0];
        const isVisible = entry.intersectionRatio >= this.threshold;
        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }
        
    }
}

export default AutoPause;