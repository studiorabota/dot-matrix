# Dot Matrix animator 

A visual tool to create dot matrix animations which you can then export to binary for a 8x8 display. 

If you just want to make animations and export to binary, check out the [online version](ijduinoanimator.meteor.com)

Made for the [IJduino](http://ijhack.nl/project/ijduino) but also useful for other boards, like the Arduino.

## Installing
1. Clone the repository
2. Install [Meteor](meteor.com)
3. Run `meteor` in your terminal
4. A message will appear: "waiting for Board"
5. Open your browser and go to [http://localhost:3000](http://localhost:3000)


## Connecting your board
##### Works for Arduino and maybe other boards
1. Follow [these](https://github.com/rwaldron/johnny-five/blob/master/docs/led-matrix.md) steps to connect the wires between your Arduino and LED matrix
2. Connect your Arduino to the computer via USB
3. Open the [Arduino IDE](https://www.arduino.cc/en/Main/Software)
4. Open `StandardFirmata`: File -> Examples -> Firmata -> Standard -> StandardFirmata
5. Upload `StandardFirmata` to your board. This will make it possible for the animator to talk to your board
6. A play button will appear in the toolbar. Use this to send your animation from the animator to the led matrix


