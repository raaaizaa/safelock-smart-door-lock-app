#include <Arduino.h>
#if defined(ESP32)
#include <WiFi.h>
// #elif defined(ESP8266)
// #include <ESP8266WiFi.h>
#endif
#include <Firebase_ESP_Client.h>

//Provide the token generation process info.
#include "addons/TokenHelper.h"
//Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"

#include <ESP32Servo.h>

// Insert your network credentials
#define WIFI_SSID "mar"
#define WIFI_PASSWORD "alernative"

// Insert Firebase project API Key
#define API_KEY "AIzaSyAO2rFpRan1XTUznsgamGuHBgly45UUXRw"

// Insert RTDB URL
#define DATABASE_URL "https://safetylockfirebase-default-rtdb.asia-southeast1.firebasedatabase.app/"
const int servoPin = 26; // Replace with the actual pin number for your relay
const int ledPin = 2;


// Define Firebase Data object
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;
Servo myservo; 

unsigned long checkDoorStatusPrevMillis = 0;
unsigned long turnOffServoPrevMillis = 0;
int pos = 0;

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
  myservo.attach(servoPin);
  pinMode(ledPin, OUTPUT);
  myservo.write(0);  
}

void loop()
{
  if (Firebase.ready())
  {
    // Check door status every 1 second
    if (millis() - checkDoorStatusPrevMillis > 1000)
    {
      checkDoorStatusPrevMillis = millis();

      // Read door status from the database
      if (Firebase.RTDB.getBool(&fbdo, "doorStatus"))
      {
        bool doorStatus = fbdo.boolData();
        Serial.println("Door Status: " + String(doorStatus));

        // If door is open, turn on relay and built-in LED
        if (doorStatus)
        {
  
            // Turn on relay and built-in LED
            turnOnServoAndLED();
            delay(10000);
            turnOffServoAndLED();

            // Set doorStatus to false
            Firebase.RTDB.setBool(&fbdo, "doorStatus", false);
        }
        else
        {
          // If door is closed, turn off relay and built-in LED
          turnOffServoAndLED();
      
        }
      }
    }
  }
}

void turnOnServoAndLED()
{
  myservo.write(90);                    
  digitalWrite(ledPin, HIGH);   // Turn on the built-in LED
}

void turnOffServoAndLED()
{
  myservo.write(0);  
  digitalWrite(ledPin, LOW);   // Turn off the built-in LED
}