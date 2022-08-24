/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here

function func1(){
    return 1;
}

async function async1(){
    return 2;
}

console.log(func1())
console.log(async1())
async1().then(result=>console.log(result))
/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here

async function waiting(){
    const val = await async1();
    console.log(val)
}
waiting()
/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here

async function waitPromise(){

    const myPromise = new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('New Promise'), 1000)
    })
    const result = await myPromise
    console.log('my promise is ', result);
}

waitPromise()


/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here
new Promise((resolve)=>{
    setTimeout(()=>resolve('My Promise'),1000)
}).then(result=>console.log(result))


/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here
function wait(ms){
    return new Promise((resolve)=>setTimeout(resolve, ms))
}

async function func2(){
    await wait(2000);
    console.log("Waited the 2 seconds.")

}
func2()
/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here
const returnPromise = async(val)=>{
    return new Promise((resolve, reject)=>{
        if(val>0.5) resolve("Success")
        else reject("Failed")

    })

}
for(let i=0; i<10; i++){
    const random = Math.random()
    wait(2000).then(()=> returnPromise(random)).then(result=>console.log(result)).catch(error=>console.error("Error ",error))

}


/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here
const returnPromiseAsync = async(i)=>{
    const random = Math.random()
    await wait(2000)
    try{
        const result = await returnPromise(random)
        console.log("Async Success, ", i, result)
    }catch(e){
        console.log("Async Fail ", i, e)
    }
}

for(let i=0; i<10; i++){
    returnPromiseAsync(i)
}


/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
console.log("END OF PROGRAM")
