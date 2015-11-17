var JohnnyFive = Meteor.npmRequire('johnny-five'),
    board;

var Fiber = Meteor.npmRequire('fibers');

Meteor.startup(function(){

    // create board
    board = new JohnnyFive.Board();

    // check if board is ready for Client
    setInterval(function(){

        if(board.isConnected) {

            // Tell client Arduino is ready
            Fiber(function() {
                var existing = Arduino.find({state: true}).count();

                if(!existing) Arduino.insert({state: true});
            }).run();

        } else {

            // Tell client Arduino is NOT ready
            Fiber(function() {
                var existing = Arduino.find().count();

                if(existing) Arduino.remove({});
            }).run();

        }
    },5000);

    // error
    board.on('error', function (error) {
        console.error('Johnny Five Error', error);
    });

    // when board is connected
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
                data: 2,
                clock: 3,
                cs: 4
            }
        });

        matrix.on();

        var frameCount = 0;

        function next() {

            if(arduinoFrames) {

                var frames = arduinoFrames;

                if(arduinoFrames[frameCount]) {
                   matrix.draw(arduinoFrames[frameCount])
                }

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