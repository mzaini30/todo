db = new Dexie("database todo")
db.version(1).stores({
 data: "++id, list"
})
app = new Vue({
 el: ".vue",
 router: new VueRouter({
  routes: [
   {
    path: "/",
    component: beranda
   },
   {
    path: "/edit/:id",
    component: edit
   }
  ]
 })
})