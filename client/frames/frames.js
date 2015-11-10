Template.frames.helpers({

    frames: function() {

        return Frames.find();

    },

    showMessage: function() {
        return Frames.find().count();
    },

    arduinoReady: function() {

        if(Arduino.find().count()) {
            return Arduino.findOne().state;
        } else {
            return false;
        }

    }

})

Template.frames.events({

    'click .action-export': function() {

        event.preventDefault();

        var export_code = Animator.exportFrames();

        Session.set("export_code", export_code);

    },

    'click .action-create-frame': function(event) {

        Grid.createFrame();

    },

    'click .action-play': function(event) {

        var data = MatrixData.exportFrames();

        Meteor.call('play', data);

    }

})