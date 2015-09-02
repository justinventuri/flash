Flash = {
  collection: new Meteor.Collection(null),

  info: function(message) {
    // Flash.collection.remove({})
    Flash.collection.upsert({message: message}, {$set: {seen: false}});
  },

  clearSeen: function () {
    Flash.collection.remove({seen: true});
  }
};
