import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    showQuestionForm() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        notes: this.get('notes')
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
