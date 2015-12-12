import Ember from "ember";

export default Ember.Component.extend({
  actions: {
    submit(){
      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          "key": "jXxFN11eNF57YzQIIocMzg",
          "message": {
            "from_email": this.email,
            "from_name": this.name,
            "text": "Name: " + this.name + "Email: " + this.email + "Phone: " + this.phone + "Comments: " + this.comments,
            "to": [
                {
                  "email": "aburka@gmail.com",
                  "name": "JJ",
                  "type": "to"
                },
              ],
            "autotext": "true",
            "subject": "Ohlinger.com Appointment Inquiry",
          },
          "headers": {
              "Reply-To": this.email
          }
        }
      }).done(function(response) {
         console.log(response);
      });
    }
  }
});
