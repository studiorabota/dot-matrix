Frames  = new Ground.Collection('frames', { connection: null, cleanupLocalData: false });
Dots    = new Ground.Collection("dots", { connection: null, cleanupLocalData: false });

Arduino = new Mongo.Collection('arduino');

// Arduino server - client connections
if(Meteor.isServer) {

    arduinoFrames = '';

}

// Send frames to Arduino
Meteor.methods({
    'play': function(frames) {

        if(Meteor.isServer) {

            // Split text to array
            if(typeof frames === 'string') {
                frames = frames.split("");
            }

            arduinoFrames = frames;

        }

    }
});