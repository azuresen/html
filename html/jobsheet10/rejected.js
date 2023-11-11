const myFunctionPromise = () => {
    return new Promise ((resolve,reject) => {
        reject("halo,ini kondisi false/gagal")
    });
}
myFunctionPromise()
.catch((error) => {
    console.log(error)
});
