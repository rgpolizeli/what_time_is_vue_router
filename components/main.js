var app = new Vue({
  el: '#app',
  data: {
	myLocation: 0  
  },
  methods: {
	goToHome: function(){
		this.myLocation = 0;
	},
	goToWhatTime: function(){
		this.myLocation = 1;
	}  	
  },
  //it's necessary only one root parent tag
  template: `
  <div>
	<nav-bar-component v-on:go-to-home="goToHome" v-on:go-to-what-time="goToWhatTime"/>
	<div style="height:400px;background: lightgray;display:flex; margin-top:10px;">
		<home-component v-if="myLocation==0"/>
		<what-time-component v-else/>
	</div>
  </div>
  `
});