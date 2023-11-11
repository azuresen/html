var buah = [
    {
        nama:"apel",warna :"merah",rasa: "manis"
    },
    {
        nama:"semangka",warna :"merah",rasa: "manis"
    },
    {
        nama:"anggur",warna :"ungu",rasa: "manis"
    },
  
   
]
var arrNama = buah.map(function(name){
    return name.nama
})
console.log(arrNama);