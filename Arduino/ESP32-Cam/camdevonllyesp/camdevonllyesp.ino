#include <Arduino.h>
#if defined(ESP32)
#include <WiFi.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#endif
#include <Firebase_ESP_Client.h>

//Provide the token generation process info.
#include "addons/TokenHelper.h"
//Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"

// Insert your network credentials
#define WIFI_SSID "mar"
#define WIFI_PASSWORD "alernative"

// Insert Firebase project API Key
#define API_KEY "AIzaSyAO2rFpRan1XTUznsgamGuHBgly45UUXRw"

// Insert RTDB URL
#define DATABASE_URL "https://safetylockfirebase-default-rtdb.asia-southeast1.firebasedatabase.app/"

// Define Firebase Data object
FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;

unsigned long checkDoorStatusPrevMillis = 0;
unsigned long turnOffRelayPrevMillis = 0;
bool relayOn = false;
int storedQRKey = 0; // Variable to store the QR key

void setup()
{
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

  /* Assign the api key (required) */
  config.api_key = API_KEY;

  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;

  /* Sign up */
  if (Firebase.signUp(&config, &auth, "", ""))
  {
    Serial.println("ok");
  }
  else
  {
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop()
{

  int readQRKey = 1234567890;
  if (Firebase.ready())
  {
    // Read storedQRKey from the database
    if (Firebase.RTDB.getInt(&fbdo, "storedQRString"))
    {
      storedQRKey = fbdo.intData();
      Serial.print("Stored QR Key: ");
      Serial.println(storedQRKey);
      // this is part for comparing scanned value & stored value
      if(readQRKey == storedQRKey){
        // do send true to door Status
        
        Firebase.RTDB.setBool(&fbdo, "doorStatus", true);
        Serial.println("Waiting for door to close"); // lu bisa ganti kalau ga mau pake delay disini jadi loop untill doorStatus false
        delay(40000);
      }
    }
  }

  // Rest of your loop code...
}
