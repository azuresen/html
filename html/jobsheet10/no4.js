const myCountPromise = (input) => {
    return new Promise((resolve, reject) => {
      if (input !== undefined) {
        setTimeout(() => {
          const result = input * 2;
          resolve(result);
        }, 1000); // Contoh setTimeout dengan delay 1 detik
      } else {
        reject("Maaf tidak ada nilai dalam parameter");
      }
    });
  };
  
  // Contoh penggunaan myCountPromise
  myCountPromise(5)
    .then((result) => {
      console.log("Hasil perkalian:", result);
    })
    .catch((error) => {
      console.error("Error:", error);
    });