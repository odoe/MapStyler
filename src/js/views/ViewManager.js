(function() {

  define(['jquery', 'underscore', 'backbone', 'views/map/MapView', 'jqueryui'], function($, _, Backbone, MapView) {
    var ViewManager;
    return ViewManager = Backbone.View.extend({
      el: $('#map-container'),
      render: function() {
        var mv, styleView,
          _this = this;
        mv = new MapView();
        this.$el.prepend(mv.render().el);
        mv.on("mapLoaded", function(map) {
          _this.map = map;
          _this.map.resize();
          return require(['views/tools/basemapgalleryview'], function(BaseMapGalleryView) {
            var bmgv;
            bmgv = new BaseMapGalleryView();
            $('#basemap-container').append(bmgv.render(_this.map).el);
            return bmgv.show();
          });
        });
        styleView = null;
        require(['views/tools/styletoolview'], function(StyleView) {
          styleView = new StyleView();
          $('#sidebar').append(styleView.render().el);
          return styleView.ready();
        });
        mv.on("mapExtentChanged", function() {
          return styleView.refilter();
        });
        dojo.addOnLoad(function() {
          return mv.ready();
        });
        return this;
      }
    });
  });

}).call(this);
