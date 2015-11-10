Template.dot.events({

    'click .dot': function(event) {
        event.preventDefault();

        Dots.update(this._id, {
            $set: {state: ! this.state}
        });

    }

})