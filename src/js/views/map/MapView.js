(function() {

  define(['jquery', 'underscore', 'backbone', 'helpers/popuphelper', 'helpers/extentfactory', 'esri/layers/osm'], function($, _, Backbone, popup, extents) {
    var MapView;
    return MapView = Backbone.View.extend({
      tagName: 'div',
      id: 'map',
      className: 'claro',
      initialize: function() {},
      render: function() {
        console.log('render the map');
        return this;
      },
      ready: function() {
        var map, osm,
          _this = this;
        map = new esri.Map(this.id, {
          infoWindow: popup.create(),
          extent: extents.demo()
        });
        $(window).resize(function() {
          map.resize();
          return map.reposition();
        });
        dojo.connect(map, "onLayersAddResult", function(results) {
          return _this.trigger("mapLoaded", map);
        });
        dojo.connect(map, "onUpdateStart", function() {
          var lyr;
          lyr = map.getLayer(map.layerIds[0]);
          return dojo.connect(lyr, "onUpdateEnd", function() {
            return _this.trigger("mapExtentChanged");
          });
        });
        osm = new esri.layers.OpenStreetMapLayer();
        return map.addLayers([osm]);
      }
    });
  });

}).call(this);
