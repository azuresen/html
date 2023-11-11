var countries = [
    {
        nama:"France",ibukota :"paris",populasi: "26 juta jiwa"
    },
    {
        nama:"Inggris",ibukota :"london",populasi: "80 juta jiwa"
    },
    {
        nama:"Amerika Serikat",ibukota :"washingtom DC",populasi: "160 juta jiwa"
    },
   
]
var arrNama = countries.map(function(name){
    return name.nama
})
console.log(arrNama);