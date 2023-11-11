function filterBooksPromise(colorful, amountOfPage){
    return new Promise(function(resolve, reject) {
        var books=[
            {name: "shinchan", totalpage: 50, isColorful: true},
            {name: "Kalkulus", totalpage: 250, isColorful: false},
            {name: "Doraemon", totalpage: 40, isColorful: true},
            {name: "algoritma", totalpage: 250, isColorful: false},
        ]
        if (amountOfPage >= 40) {
            resolve(books.filter(x=> x.totalpage >= amountOfPage && x.isColorful == colorful));
        } else {
            var reason= "Maaf buku di bawah 40 halaman tidak tersedia"
            reject(reason);
        }
    })
}

let execute = async (colorful, amountOfPage) => {
    try{
        let result = await filterBooksPromise(colorful, amountOfPage)
        console.log(result)
    }catch(error){
        console.log(error)
    }
}
execute(false, 250)