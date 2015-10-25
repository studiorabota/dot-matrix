//Meteor.startup(function(){
//
//    Grid = {
//
//        frames: 4,
//        columns: 8,
//        rows: 8,
//        dots: 64,
//
//        createDots: function () {
//
//            for (f_count = 0; f_count < this.frames; f_count++) {
//
//                var parent_id = Frames.insert({ location: f_count });
//
//                for (d_count = 0; d_count < this.dots; d_count++) {
//                    Dots.insert({ parent: parent_id, dot: d_count, state: false });
//                }
//
//            }
//
//        }
//
//    }
//
//    var frames = Frames.find(),
//        alreadyExists = frames.count();
//
//    frames.forEach(function (frame) {
//
//        console.log('frames');
//
//    });
//
//    if(!alreadyExists) {
//        console.log('init DB');
//        // Grid.createDots();
//    } else {
//        console.log('use existing DB');
//    }
//
//});
//
//// TO CLEAR
//
////Frames.remove({});
////Dots.remove({});
//
//// Clear local data - This will empty all local data
////groundList.clear();