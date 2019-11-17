//Third Step - Define the routes. 
const routes = [
  { path: '/', component: HomeComponent },
  { path: '/whattimeis/', component: WhatTimeComponent }
]

//Forth Step - Create the router instance and pass the routes for it
const router = new VueRouter({
  routes
})

//Fifth Step - Create the root component and pass the router to it.
const app = new Vue({
  router
}).$mount('#app')