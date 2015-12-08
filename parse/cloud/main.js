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
