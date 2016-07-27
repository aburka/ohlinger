var Image = require("parse-image");

// Calculate image dimensions for front end optimization
var processImage = function(request, response) {
  var imageObject = request.object;

  if (!imageObject.get('image') || !imageObject.dirty("image")) {
    // The image file doesn't exist or it isn't being modified.
    return response.success();
  }

  Parse.Cloud.httpRequest({
    url: imageObject.get('image').url()
  }).then(function(response) {

    // grab the image contents from response.buffer
    var image = new Image();

    return image.setData(response.buffer);

  }).then(function(image) {

    // Save the original height and width for frontend use
    imageObject.set('imageWidth', image.width());
    imageObject.set('imageHeight', image.height());
    response.success();
  }, function(error) {
    response.error(error);
  });

}

Parse.Cloud.beforeSave("Image", processImage);
Parse.Cloud.beforeSave("Shop", processImage);
Parse.Cloud.beforeSave("Art", processImage);
Parse.Cloud.beforeSave("Event", processImage);

function btoa(str) {
  return new Buffer(str).toString('base64');
}

Parse.Cloud.define('sendEmail', function(request, response) {
  return Parse.Cloud.httpRequest({
    url: "https://api.mailgun.net/v3/mailgun.ohlinger.com/messages",
    method: "POST",
    headers: {
      "Authorization": "Basic " + btoa("api:key-18036108de44e4c938a6e8f784b1849b")
    },
    body: {
      from: request.params.from,
      to: request.params.to,
      subject: request.params.subject,
      text: request.params.text,
    }
  }).then(function(httpResponse) {
    response.success(httpResponse);
  }, function(error) {
    response.error(error);
  });
});
