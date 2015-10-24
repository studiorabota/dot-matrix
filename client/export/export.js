Template.export.helpers({

    snippets: function () {
        return Session.get('export_code');
    }

})

Template.export.events({

    'click .action-close-export': function(event) {
        event.preventDefault();

        Session.set("export_code", '');
    }

})
