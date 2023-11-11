var animals = [
    {
        nama:"kuda",jenis:"mamalia",jumlahKaki : 4
    },
    {
        nama:"harimau",jenis:"mamalia",jumlahKaki : 4
    },
    {
        nama:"badak",jenis:"mamalia",jumlahKaki : 4
    },
    {
        nama:"belalang",jenis:"serangga",jumlahKaki : 6
    },
]
var arrHewan = animals.filter(function(kaki){
    return kaki.jumlahKaki > 4
})
console.log(arrHewan)