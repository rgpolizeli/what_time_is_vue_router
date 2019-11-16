const navBarComponent = Vue.component('nav-bar-component', {
  methods: {
	  clickOnLink: function(destination){
		  if(destination == 0){
			  this.$emit('go-to-home');
		  } else{
			  this.$emit('go-to-what-time');
		  }
	  }
  },
  template:`
	<nav style="height: 100px;background: lightgray;font-size:50px;display: flex;">
	<div style="margin:auto;">
		<a v-on:click="clickOnLink(0)" style="padding: 5px;margin: 5px; color: black; text-decoration:none; border: 2px solid black;border-radius: 5px;">Home</a>
		<a v-on:click="clickOnLink(1)" style="padding: 5px;margin: 5px; color: black; text-decoration:none; border: 2px solid black;border-radius: 5px;">What Time Is?</a> 
    </div>
</nav>
  `
});