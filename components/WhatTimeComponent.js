const whatTimeComponent = Vue.component('what-time-component', {
  data: function(){
	return{
		 time: "Click in time button!"
	} 
  },
  methods: {
	  getTime: function(){
		  var d = new Date();
		  var h = d.getHours();
		  var m = d.getMinutes();
		  var s = d.getSeconds();
		  this.time= h + ":" + m + ":" + s;
	  }
  },
  template:`
	<div style="margin:auto;font-size:100px;color:black;">
		{{ time }}
		<button  style="margin-top:0; font-size:80px" v-on:click="getTime()">GetTime</button>
	</div>
  `
});