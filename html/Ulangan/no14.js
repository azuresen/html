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
        merk:"subaru",tahun :"2018",negara: "Rp 500 jt"
    },
]
var arrTahunMobil = car.filter(function(tahun){
    return tahun.tahun > 2010
})
console.log(arrTahunMobil)