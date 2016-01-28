// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

    //model: SongModel
    //play: function(){
    //this.trigger('play', this);
    //}
    initialize: function() {

        this.on('add', function() {
            if (this.length < 2) {
                this.playFirst();
            }
        }, this);

        this.on('ended', function() {
            this.remove(this.at(0));
            if (this.length > 0) {
                this.playFirst();
            }
        }, this);

        this.on('dequeue', function() {
            this.remove(this.at(0));
        }, this);

         // this.on('enqueue', function(song) {
         //     this.add(song);
         //     //this.render();
         // }, this);

    },

    playFirst: function() {
        this.at(0).play();
    },
});

// collection.remove(models, [options])
