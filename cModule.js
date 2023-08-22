// import dammyFun1,{dammyFun2,dammyFun3} from '/dammy.js'
// dammyFun1();
// dammyFun2();
// dammyFun3();


document.getElementById ("CM1").addEventListener ("click", ()=>{
    import('/dammy.js').then((dammy)=>{
        dammy.default();
        dammy.dammyFun2();
        dammy.dammyFun3();
    });
}, false);

document.getElementById ("CM2").addEventListener ("click", ()=>{
    CM2();
}, false);


