const myFunctionPromise = (param) => {
    return  new Promise((resolve,reject) =>{
        if (param === 2) {
            resolve("Hallo,ini kondisi true/berhasil")
        } else {
            reject("hallo,ini kondisi false/gagal")
        }
    })
}
let execute = async () => {
    let result = await myFunctionPromise(2)
    console.log(result)
}
execute()
