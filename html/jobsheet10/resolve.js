const myFunctionPromise = () => {
    return new Promise ((resolve,reject) => {
        resolve("halo,ini kondisi true/berhasil")
    });
}
myFunctionPromise()
.then((result) => {
    console.log(result)
});
