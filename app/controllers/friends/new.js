import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

	   save: function(){
		console.log('+- you have clicked saved.');
		return false;
	   }, 
	   cancel: function(){
	       console.log('+- you have clicked cancel.');
	       return false;	
	   }
	}	
});
