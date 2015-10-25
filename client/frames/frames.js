Template.frames.helpers({

    frames: function() {

        // console.log(Frames.findOne().data);

        return Frames.find();

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

    }

})