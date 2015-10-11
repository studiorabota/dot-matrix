if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Animator = {

    copy: false,

    exportFrames: function() {

      var frames = Frames.find();

      var snippets = Array();

      var self = this;

      var count = 0;

      frames.forEach(function (frame) {

        console.log(frame);

        snippets[count] = self.exportFrame(frame);

        count += 1;

      });

      console.log(snippets);

      return snippets;

    },

    exportFrame: function(frame) {

      // get all dots and export to..
      var dots = Dots.find({parent: frame._id});

      var count = 0;
      var snippet = 'B';

      dots.forEach(function (dot) {

        if(dot.state) { snippet += '1'; } else { snippet += '0'; }

        if(count == 7 && (dot.dot != dots.count() - 1)) {
          snippet += ',B';
          count = 0;
        } else {
          count += 1;
        }

      });

      return {snippet: snippet};

    }

  }

  Template.export.helpers({
    snippets: function () {
      return Session.get('export_code');
    }
  })

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

      console.log(export_code);

      Session.set("export_code", export_code);

    }

  })


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

    'click .export': function(event) {

      event.preventDefault();

      var export_code = Animator.exportFrame(this);

      Session.set("export_code", [export_code]);

      // Animator.exportFrame(dots);

    }

  })

  Template.dot.events({

    'click .dot': function(event) {
      event.preventDefault();

      Dots.update(this._id, {
        $set: {state: ! this.state}
      });
    }

  })

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
