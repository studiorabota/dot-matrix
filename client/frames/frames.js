Template.frames.helpers({

    frames: function() {

        return Frames.find();

    },

    showMessage: function() {
        return Frames.find().count();
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

    },

    'submit .new-message': function(event) {

        event.preventDefault();

        var text = event.target.text.value;

        Meteor.call('play', text);

    }


})