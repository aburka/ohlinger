var Image = require("parse-image");

/*
  (dimensions: {width, height}) -> {width, height}

  Calculate new dimensions for an image by constraining the width to 600px

  Examples

    constrainWidth({width: 200, height: 800}) // => {width: 200, height: 800}
    constrainWidth({width: 600, height: 800}) // => {width: 600, height: 800}
    constrainWidth({width: 600, height: 300}) // => {width: 600, height: 300}
    constrainWidth({width: 800, height: 800}) // => {width: 600, height: 600}
    constrainWidth({width: 1024, height: 768}) // => {width: 600, height: 450}
    constrainWidth({width: 768, height: 1024}) // => {width: 600, height: 800}
*/
var constrainWidth = function(dimensions, max) {
  max = max || 600;
  if(dimensions.width > max) {
    var ratio = max / dimensions.width;
    return {
      width: ratio*dimensions.width,
      height: ratio*dimensions.height
    };
  } else {
    return dimensions;
  }
}


// Calculate image dimensions and create thumbnail
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

    // create a thumbnail
    return image.scale(constrainWidth({
      width: image.width(),
      height: image.height()
    }));

  }).then(function(image) {

    // Make sure it's a JPEG to save disk space and bandwidth.
    return image.setFormat("JPEG");

  }).then(function(image) {

    // Get the image data in a Buffer.
    return image.data();

  }).then(function(buffer) {

    // Save the image into a new file.
    var base64 = buffer.toString("base64");
    var cropped = new Parse.File("thumbnail.jpg", { base64: base64 });
    return cropped.save();

  }).then(function(cropped) {

    // Attach the image file to the original object.
    imageObject.set("thumbnail", cropped);

  }).then(function(result) {
    response.success();
  }, function(error) {
    response.error(error);
  });

}

Parse.Cloud.beforeSave("Image", processImage);
Parse.Cloud.beforeSave("Shop", processImage);
Parse.Cloud.beforeSave("Art", processImage);
Parse.Cloud.beforeSave("Event", processImage);
