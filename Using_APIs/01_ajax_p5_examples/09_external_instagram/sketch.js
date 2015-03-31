// TUTORIAL: https://github.com/robynitp/networkedmedia/wiki/Instagram-API-How-to
// 1. Register an application: https://instagram.com/developer/


function setup() {
  var url = "https://api.instagram.com/v1/tags/selfie/media/recent?count=35&client_id=YOUR_CLIENT_ID";
  loadJSON(url, handleData);
}

function handleData(jsonData) {
  console.log(jsonData.data);
  console.log(jsonData.data.length);

  var pics = jsonData.data;

  for (var i=0; i<pics.length; i++) {
    createImg(pics[i].images.thumbnail.url);
  }
}

