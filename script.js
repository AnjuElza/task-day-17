const countdown=document.querySelector(".counter");
let timer=10;
countdown.innerText=timer--;

setTimeout(()=>{
    countdown.innerText=timer--;
    console.log(timer);
    setTimeout(()=>{
        countdown.innerText=timer--;
        setTimeout(()=>{
            countdown.innerText=timer--;
        setTimeout(()=>{
            countdown.innerText=timer--;
            setTimeout(()=>{
                countdown.innerText=timer--;
                setTimeout(()=>{
                    countdown.innerText=timer--;
                    setTimeout(()=>{
                        countdown.innerText=timer--;
                        setTimeout(()=>{
                            countdown.innerText=timer--;
                            setTimeout(()=>{
                                countdown.innerText=timer--;
                                setTimeout(()=>{
                                    countdown.innerText="Happy Independence Day";
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
    },1000)
},1000);