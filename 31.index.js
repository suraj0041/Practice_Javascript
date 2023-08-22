// if ("serviceWorker" in navigator) {
//     window.addEventListener("load", () => {
//         navigator.serviceWorker.register("/service-Worker.js")
//             .then((register) => {
//                 console.log("Register ok");
//             })
//             .catch(() => {
//                 console.log("Register:catch");
//             })
//     });
// } 
var BGworker=new Worker("worker.js");
let clicked=()=>{
    BGworker.postMessage("Hi");
}

BGworker.onmessage=(Message)=>{
console.log(Message.data);
}
let Message=()=>{
    alert("Messaged");
}