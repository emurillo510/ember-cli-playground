import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

	   save: function(){
		console.log('+- you have clicked saved.');
		if(this.get('isValid')){
		   var _this = this;
		   this.get('model').save().then(function(friend){

			_this.transitionToRoute('friends.show', friend);

		});

		}else{
  		   this.set('errorMessage', 'You have to fill all fields!');
		}
		return false;
	   }, 
	   cancel: function(){
	       console.log('+- you have clicked cancel.');
	       return false;	
	   }
	},
	isValid: Ember.computed(

	'model.firstName',
	'model.lastName',
	'model.email',
	'model.twitter',
	function(){

	return !Ember.isEmpty(this.get('model.firstName')) &&
		!Ember.isEmpty(this.get('model.lastName')) &&
		 !Ember.isEmpty(this.get('model.email')) &&
		  !Ember.isEmpty(this.get('model.twitter'));

	
	})

});
