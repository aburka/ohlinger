import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    submit(){
      Parse.Cloud.run('sendEmail', {
        "from": `${this.name} <${this.email}>`,
        "to": `JJ <jacob@jacobsmith.io>`,
        // "to": `JJ <jj@ohlinger.com>`,
        "subject": "Ohlinger.com Appointment Inquiry",
        "text": `Name: ${this.name}\nEmail: ${this.email}\nPhone: ${this.phone}\nComments: ${this.comments}`
      }).then(() => {
        alert("Thanks for getting in touch! Your request has been submitted.");
        this.router.transitionTo('/');
      }, () => {
        alert("There was a problem processing your request. Please try again.");
      });
    }
  }
});
