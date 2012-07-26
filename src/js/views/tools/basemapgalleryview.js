(function() {

  define(['jquery', 'underscore', 'backbone', 'esri/dijit/BasemapGallery'], function($, _, Backbone) {
    var BasemapGalleryView;
    return BasemapGalleryView = Backbone.View.extend({
      id: 'basemapGallery',
      render: function(map) {
        this.map = map;
        return this;
      },
      show: function() {
        var basemapGallery;
        console.log("set up the basemap gallery");
        basemapGallery = new esri.dijit.BasemapGallery({
          "showArcGISBasemaps": true,
          "map": this.map
        }, this.id);
        basemapGallery.startup();
        return this;
      }
    });
  });

}).call(this);
