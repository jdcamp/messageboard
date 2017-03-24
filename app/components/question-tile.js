import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question, params) {
      console.log('update function recieved');
      this.sendAction('update', question, params);
    },
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
