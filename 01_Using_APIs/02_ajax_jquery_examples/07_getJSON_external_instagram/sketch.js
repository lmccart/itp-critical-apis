t// TUTORIAL: https://github.com/robynitp/networkedmedia/wiki/Instagram-API-How-to
// Register an application: https://instagram.com/developer/

$(document).ready(function() {
  var url = "https://api.instagram.com/v1/tags/selfie/media/recent?client_id=YOUR_CLIENT_ID";
  
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(jsonData) {
      console.log(jsonData.data.length);

      var pics = jsonData.data;

      for (var i=0; i<pics.length; i++) {
        $('#container').append("<img src='"+pics[i].images.thumbnail.url+"'/>");
      }
    },
    error: function(error) {
      console.log(error);
    }
  });  

});