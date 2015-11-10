Template.frame.helpers({

    dots: function() {

        return Dots.find({parent: this._id});

    }

})

Template.frame_actions.events({

    'click .copy': function(event) {

        event.preventDefault();

        Animator.copy = this;

    },

    'click .paste': function(event) {

        event.preventDefault();

        // get model
        // overwrite this

        console.log(Animator.copy);

    },

    'click .action-export-frame': function(event) {

        event.preventDefault();

        var export_code = Animator.exportFrame(this);

        Session.set("export_code", [export_code]);

        // Animator.exportFrame(dots);

    },

    'click .action-remove': function(event) {

        event.preventDefault();

        Frames.remove(this._id);
        Frames.remove({parent: this._id});

    }

})