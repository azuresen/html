var car = [
    {
        merk:"toyota",tahun :"2006",negara: "Rp 150-250 jt"
    },
    {
        merk:"daihatsu",tahun :"2000",negara: "Rp 250 jt"
    },
    {
        merk:"honda",tahun :"1996",negara: "Rp 50 jt"
    },
    {
        merk:"toyota",tahun :"2000",negara: "Rp 100 jt"
    }, 
    {
        merk:"subaru",tahun :"2001",negara: "Rp 500 jt"
    },
]
var arrMerk = car.map(function(item){
    return item.merk
})
console.log(arrMerk);