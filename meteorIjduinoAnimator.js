if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Grid = {

    frames: 20,
    columns: 8,
    rows: 8,

    createFrames: function() {

      var frame = this.createFrame;

      var frames = Array();

      for (i = 0; i < this.frames; i++) {
        frames.push({ frames: i, frame: frame })
      }

      return frames;

    },

    createFrame: function() {

      var dots = Array();

      for (i = 0; i < this.rows; i++) {
        dots.push({ col: i, state: 0 })
      }

      var frame = Array();

      for (i = 0; i < this.columns; i++) {
        frame.push({ row: i, dots: dots })
      }

      return frame;

    }

  },

  Template.frame.helpers({

    frame: function() {

      var frame = Grid.createFrame();

      return frame;

    }

  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
