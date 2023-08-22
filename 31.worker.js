onmessage=(Message)=>{
    let res=0;
    for (let index = 0; index < 10000000000; index++) {
        res+=index;
    }
    postMessage(Message.data+":"+res);
}