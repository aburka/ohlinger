import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitAppt(){
      var event = this.get('model').get('title');
      Parse.Cloud.run('sendEmail', {
        "from": `${this.name} <${this.email}>`,
        "to": `JJ <jacob@jacobsmith.io>`,
        // "to": `JJ <jj@ohlinger.com>`,
        "subject": "Ohlinger.com Event Appointment Inquiry",
        "text": `Name: ${this.name}\nEmail: ${this.email}\nPhone: ${this.phone}\nEvent: ${event}\nComments: ${this.comments}`
      }).then(() => {
        alert("Thanks for getting in touch! Your request has been submitted.");
        this.router.transitionTo('events');
      }, () => {
        alert("There was a problem processing your request. Please try again.");
      });
    }
  }
});
