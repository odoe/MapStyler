define [
  'jquery'
  'underscore'
  'backbone'
  'helpers/popuphelper'
  'helpers/extentfactory'
  'esri/layers/osm'
], ($, _, Backbone, popup, extents) ->
  MapView = Backbone.View.extend
    tagName: 'div'
    id: 'map'
    className: 'claro'

    initialize: ->

    render: ->
      console.log 'render the map'
      @

    ready: ->
      map = new esri.Map @.id,
        infoWindow: popup.create()
        extent: extents.demo()

      $(window).resize ->
        map.resize()
        map.reposition()

      dojo.connect map, "onLayersAddResult", (results) =>
        @trigger "mapLoaded", map

      dojo.connect map, "onUpdateStart", =>
        lyr = map.getLayer map.layerIds[0]
        dojo.connect lyr, "onUpdateEnd", =>
          @trigger "mapExtentChanged"

      osm = new esri.layers.OpenStreetMapLayer()

      map.addLayers [osm]
