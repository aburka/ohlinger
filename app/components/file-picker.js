import Ember from 'ember';
import filepicker from 'filepicker';

export default Ember.Component.extend({
  action: {
    filepick: function(){
      filepicker.pick(function(blob){
        this.sendAction('filepick', blob);
      }.bind(this));
    }
  }
});
