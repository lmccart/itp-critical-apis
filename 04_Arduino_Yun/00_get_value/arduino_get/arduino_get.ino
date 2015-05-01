#include <Bridge.h>
#include <HttpClient.h>

void setup() {
  pinMode(13, OUTPUT);
  Bridge.begin();
  Serial.begin(9600);
}

void loop() {
  // Initialize the client library
  HttpClient client;

  // Make a HTTP request:
  client.get("http://api02.herokuapp.com/get_pressure");

  // if there are incoming bytes available
  // from the server, read them and print them:
  String resp = "";
  while (client.available()) {
    char c = client.read();
    resp += c;
  }
  int time = resp.toInt();
  Serial.println(time);

  digitalWrite(13, HIGH);
  delay(time);
  digitalWrite(13, LOW);
  delay(time);
  
}


