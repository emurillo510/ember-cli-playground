import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {

	   delete: function(friend){
	      console.log('+- clicked delete in index route');
	      var _this = this;
	
	      friend.destroyRecord().then(function(){
		_this.transitionToRoute('friends.index');
	      });
	      return false;
    	   }
        
	}
});
