var JohnnyFive = Meteor.npmRequire('johnny-five'),
    board;

Meteor.startup(function(){


    //Meteor.subscribe('frames', function () {
    //    var frames = Frames.find();
    //
    //    console.log(frames.count());
    //});

    board = new JohnnyFive.Board();

    board.on('error', function (error) {
        console.error('Johnny Five Error', error);
    });

    board.on("ready", function() {

        var heart = [
            "01100110",
            "10011001",
            "10000001",
            "10000001",
            "01000010",
            "00100100",
            "00011000",
            "00000000"
        ];

        var matrix = new JohnnyFive.Led.Matrix({
            pins: {
                data: 12,
                clock: 11,
                cs: 10
            }
        });

        matrix.on();

        var frameCount = 0;

        function next() {

            var frames = Meteor.MatrixData.data;

            if(frames.length) {

                matrix.draw(frames[frameCount]);

                frameCount++;

                if(frameCount > frames.length) {
                    frameCount = 0;
                }

            } else {

                matrix.draw(heart);

            }

            setTimeout(next, 1000);
        }

        next();

    });

});