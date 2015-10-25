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

        snippets[count] = self.exportFrame(frame);

        count += 1;

      });

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

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
