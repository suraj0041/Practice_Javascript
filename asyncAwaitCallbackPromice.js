let data = [
    { name: "A", age: 1 },
    { name: "B", age: 2 },
]

function gatdata() {
    setTimeout(() => {
        console.table(data);
    }, 1000);
}

//call back
// function setdata(callback)
// {
//     setTimeout(() => {
//         data.push({name:"c",age:3});
//         callback();

//     }, 3000);
// }
// setdata(gatdata);

//Promise
async function setdata() {
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            data.push({ name: "c", age: 3 });
            return resolve();
        }, 3000);
    });
}
// setdata().then(gatdata());

//AsyncAwait
async function start() {
    await setdata();
    gatdata();
}

start();

for(val in data)
{
    console.log(val)
}