MatrixData = {

    data: [],

    exportFrames: function() {

        var frames = Frames.find();

        var self = this;

        var snippets = Array();

        var count = 0;

        frames.forEach(function (frame) {

            snippets[count] = self.exportFrame(frame);

            count += 1;

        });

        this.data = snippets;

        return snippets;

    },

    exportFrame: function(frame) {

        var dots = Dots.find({parent: frame._id});

        var snippet = Array();

        var count = 0,
            line = '';

        dots.forEach(function (dot) {

            if(dot.state) { line += '1'; } else { line += '0'; }

            if(count == 7 && (dot.dot != dots.count() - 1)) {
                snippet.push(line)
                line = '';
                count = 0;
            } else {
                count += 1;
            }

        });

        return snippet;

    }

}

Meteor.MatrixData = MatrixData;