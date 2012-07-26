define [
  'jquery'
  'underscore'
  'backbone'
  'views/map/MapView'
  'jqueryui'
], ($, _, Backbone, MapView) ->
  ViewManager = Backbone.View.extend
    el: $ '#map-container'

    render: ->
      mv = new MapView()
      @$el.prepend mv.render().el
      mv.on "mapLoaded", (@map) =>
        @map.resize()
        require ['views/tools/basemapgalleryview'], (BaseMapGalleryView) =>
          bmgv = new BaseMapGalleryView()
          $('#basemap-container').append bmgv.render(@map).el
          bmgv.show()

      styleView = null
      require ['views/tools/styletoolview'], (StyleView) =>
        styleView = new StyleView()
        $('#sidebar').append styleView.render().el
        styleView.ready()

      mv.on "mapExtentChanged", ->
        styleView.refilter()

      dojo.addOnLoad ->
        mv.ready()

      @
