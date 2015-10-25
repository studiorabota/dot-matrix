Frames  = new Ground.Collection('frames', { connection: null, cleanupLocalData: false });
Dots    = new Ground.Collection("dots", { connection: null, cleanupLocalData: false });

//if (Meteor.isClient) {
//    console.log('rhehe');
//
//    Meteor.startup(function () {
//        // code to run on server at startup
//        // Simple if statement to check collection
//        if (Frames) {
//            console.log('ready to insert');
//
//            Grid = {
//
//                frames: 4,
//                columns: 8,
//                rows: 8,
//                dots: 64,
//
//                createDots: function () {
//
//                    for (f_count = 0; f_count < this.frames; f_count++) {
//
//                        var parent_id = Frames.insert({ location: f_count });
//
//                        for (d_count = 0; d_count < this.dots; d_count++) {
//                            Dots.insert({ parent: parent_id, dot: d_count, state: false });
//                        }
//
//                    }
//
//                }
//
//            }
//
//            var frames = Frames.find(),
//                alreadyExists = frames.count();
//
//            frames.forEach(function (frame) {
//
//                console.log(frame);
//
//            });
//
//            if(!alreadyExists) {
//                console.log('init DB');
//                // Grid.createDots();
//            } else {
//                console.log('use existing DB');
//            }
//
//
//        }
//    });
//}