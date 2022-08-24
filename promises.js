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



/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here



/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here



/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here



/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here
