// TUTORIAL: https://github.com/robynitp/networkedmedia/wiki/Instagram-API-How-to
// 1. Register an application: https://instagram.com/developer/


function setup() {
}

function mousePressed() {
  var url = "https://api.instagram.com/v1/tags/selfie/media/recent?count=1&client_id=2b58cb87ed9a4d408be945b28c356797";
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
