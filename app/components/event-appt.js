import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submitAppt(){
      var event = this.get('model').get('title');
      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          "key": "jXxFN11eNF57YzQIIocMzg",
          "message": {
            "from_email": this.email,
            "from_name": this.name,
            "text": "Name: " + this.name + " Email: " + this.email + " Phone: " + this.phone + " Event: " + event + " Comments: " + this.comments,
            "to": [
                {
                  "email": "aburka@gmail.com",
                  "name": "JJ",
                  "type": "to"
                },
              ],
            "autotext": "true",
            "subject": "Ohlinger.com Event Appointment Inquiry",
          },
          "headers": {
              "Reply-To": this.email
          }
        }
      }).done(function(response) {
         alert("Thanks for getting in touch!");
      });
    }
  }
});
