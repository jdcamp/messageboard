import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer(params) {
      console.log('recieved');
      this.sendAction('saveAnswer', params);
    }
  }
});
