Frames  = new Mongo.Collection("frames");
Dots    = new Mongo.Collection("dots");

Frames.remove({});
Dots.remove({});

Grid = {

  frames: 4,
  columns: 8,
  rows: 8,
  dots: 64,

  createDots: function () {

    for (f_count = 0; f_count < this.frames; f_count++) {

      var parent_id = Frames.insert({ location: f_count });

      for (d_count = 0; d_count < this.dots; d_count++) {
        Dots.insert({ parent: parent_id, dot: d_count, state: false });
      }

    }

  }

}

var alreadyExists = Frames.find().count();

if(!alreadyExists) {
  Grid.createDots();
}