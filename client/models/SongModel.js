// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

      // defaults : {
      //   playCount : 0
      // },

  // initialize : function(){
  //   this.on('ended', this.addCount, this);
  // },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  // addCount : function(){
  //   this.set('playCount', this.get("playCount") + 1);
  // }

});
