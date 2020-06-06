beranda = {
 template: "#beranda",
 data(){
  return {
   tulis: "",
   datanya: []
  }
 },
 methods: {
  tambahkan(){
   x = this
   db.data.add({
    list: this.tulis
   }).then(() => {
    x.tulis = ""
    x.ambil()
   })
  },
  ambil(){
   db.data.reverse().toArray(data => this.datanya = data)
  }
 },
 mounted(){
  this.ambil()
 }
}