Template.FlashMessages.helpers({
  flashMessages: function() {
    return Flash.collection.find();
  }
});


Template.FlashMessage.rendered = function() {
  var message = this.data;
  Meteor.setTimeout(function() {
    // Flash.collection.update(message._id, {$set: {seen: true}});
    Flash.collection.remove({_id: message._id});
  }, 3000 );
};
