Frames  = new Ground.Collection('frames', { connection: null, cleanupLocalData: false });
Dots    = new Ground.Collection("dots", { connection: null, cleanupLocalData: false });
//
FramesScratchpad  = new Mongo.Collection('frames');
DotsScratchpad    = new Mongo.Collection('dots');

if(Meteor.isServer) {

    arduinoFrames = '';

}

Meteor.methods({
    'play': function(frames) {

        if(Meteor.isServer) {

            // Split text to array
            if(!frames.isArray) {
                frames = frames.split("");
            }

            arduinoFrames = frames;

        }

    }
});