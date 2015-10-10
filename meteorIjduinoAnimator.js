if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Grid = {

    frames: 20,
    columns: 8,
    rows: 8,

    createFrames: function() {

      var frame = this.createFrame();

      var frames = Array();

      for (i = 0; i < this.frames; i++) {
        frames.push({ id: i, frame: frame })
      }

      return frames;

    },

    createFrame: function() {

      var dots = Array();

      for (i = 0; i < this.rows; i++) {
        dots.push({ dot: i, state: 0 })
      }

      var frame = Array();

      for (i = 0; i < this.columns; i++) {
        frame.push({ row: i, dots: dots })
      }

      return frame;

    }

  },

  Template.frames.helpers({

    frames: function() {

      var frames = Grid.createFrames();

      return frames;

    }

  })

  Template.dot.events({

    'click .dot': function(event) {
      event.preventDefault();
      this.state = 1 - this.state;
    }

  })

  Template.dot.helpers({

    

  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
