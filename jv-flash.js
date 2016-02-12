Flash = {
  collection: new Meteor.Collection(null),

  messageTypes: {
    INFO: 0,
    ERROR: 1
  },

  error: function(message) {
    Flash.collection.upsert({
      message: message
    },{
      $set: {
        seen: false,
        type: Flash.messageTypes.ERROR
      }
    });
  },
  info: function(message) {
    Flash.collection.upsert({
      message: message
    },{
      $set: {
        seen: false,
        type: Flash.messageTypes.INFO
      }
    });
  },

  clearSeen: function () {
    Flash.collection.remove({seen: true});
  }
};
