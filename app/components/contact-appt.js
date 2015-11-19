import Ember from 'ember';

export default Ember.Component.extend({
  submit(e, params){
    console.log("hello");
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      data: {
        'key': 'jXxFN11eNF57YzQIIocMzg',
        'message': {
          'from_email': params.email,
          'from_name': params.name,
          "text": params.comments,
          'to': [
              {
                'email': 'amyburka@gmail.com',
                'name': 'Amy',
                'type': 'to'
              },
            ],
          'autotext': 'true',
          'subject': 'Ohlinger.com Appointment Inquiry',
        },
        "headers": {
            "Reply-To": params.email
        }
      }
     }).done(function(response) {
       console.log(response);
     });
  }
});
