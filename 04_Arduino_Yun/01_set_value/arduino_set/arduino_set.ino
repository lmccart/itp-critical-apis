#include <Bridge.h>
#include <HttpClient.h>

void setup() {
  Bridge.begin();
  Serial.begin(9600);
}

void loop() {
  
  int sensorValue = analogRead(A0);
  Serial.println(sensorValue);
  
  // Initialize the client library
  HttpClient client;

  // Make a HTTP request:
  client.get("http://api02.herokuapp.com/set_pressure?val="+String(sensorValue));

  // if there are incoming bytes available
  // from the server, read them and print them:
  while (client.available()) {
    char c = client.read();
    Serial.print(c);
  }
  Serial.println("");

  delay(200);
}


