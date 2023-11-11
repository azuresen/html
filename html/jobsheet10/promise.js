const myFunctionPromise = (param) => {
    return  new Promise((resolve,reject) =>{
        if (param === 2) {
            resolve("Hallo,ini kondisi true/berhasil")
        } else {
            reject("hallo,ini kondisi false/gagal")
        }
    })
}
myFunctionPromise(5)
.then((result) => {
    console.log(result)
}) 
.catch((error) => {
    console.log(error)
})