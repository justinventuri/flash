Template.FlashMessages.helpers({
  flashMessages: function() {
    return Flash.collection.find({type: Flash.messageTypes.INFO});
  },
  flashMessagesError: function() {
    return Flash.collection.find({type: Flash.messageTypes.ERROR});
  }
});

Template.FlashMessage.rendered = function() {
  var message = this.data;
  Meteor.setTimeout(function() {
    Flash.collection.remove({_id: message._id});
  }, 3000 );
};
Template.FlashMessageError.rendered = function() {
  var message = this.data;
  Meteor.setTimeout(function() {
    Flash.collection.remove({_id: message._id});
  }, 5000 );
};
