import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnswer() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        question: this.get('question')
      };
      this.sendAction('saveAnswer', params);
    }
  }
});
