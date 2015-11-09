Template.sendText.events({

    'submit .new-message': function(event) {

        event.preventDefault();

        var text = event.target.text.value;

        Meteor.call('play', text);

    }

})