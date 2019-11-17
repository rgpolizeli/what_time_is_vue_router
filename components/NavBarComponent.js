const NavBarComponent = Vue.component('nav-bar-component', {
  template:`
	<nav style="height: 100px;background: lightgray;font-size:50px;display: flex;">
	<div style="margin:auto;">
		<router-link to="/" style="padding: 5px;margin: 5px; color: black; text-decoration:none; border: 2px solid black;border-radius: 5px;">Home</router-link>
		<router-link to="/whattimeis/" style="padding: 5px;margin: 5px; color: black; text-decoration:none; border: 2px solid black;border-radius: 5px;">What Time Is?</router-link> 
    </div>
</nav>
  `
});