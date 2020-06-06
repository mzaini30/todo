edit = {
 template: "#edit",
 data(){
  return {
   list: ""
  }
 },
 methods: {
  tampil(){
   db.data.where({
    id: Number(this.$route.params.id)
   }).toArray(data => {
    this.list = data[0].list
   })
  },
  hapus(){
   x = this
   tanya = confirm("Hapus kah?")
   if (tanya){
    db.data.where({
     id: Number(this.$route.params.id)
    }).delete().then(() => x.$router.push("/"))
   }
  },
  ubah(){
   x = this
   db.data.where({
    id: Number(this.$route.params.id)
   }).modify({
    list: this.list
   }).then(() => x.$router.push("/"))
  }
 },
 mounted(){
  this.tampil()
 }
}