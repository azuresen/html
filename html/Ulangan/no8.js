
var book = [
    {
        nama:"Menjadi Guru Yang Mau dan Mampu Mengajar Secara Menyenangkan",tahun :"2005",penulis: "hernowo"
    },
    {
        nama:"Menangani Anak Underachiever: Anak Cerdas dengan Prestasi Rendah",tahun :"2002",penulis: "puspa swara"
    }, 
    {
        nama:"pendidikan masyarakat kota",tahun :"2003",penulis: "paulol freire"
    },
    {
        nama:"Membangun Delapan Karakter Emas Menuju Indonesia Bermartabat",tahun :"2011",penulis: "bagus mustakim"
    },
]
book.forEach(function(item){
    console.log("tahun:" +item.penulis)
})