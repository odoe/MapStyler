define ['jquery'
'underscore'
'backbone'
'esri/dijit/BasemapGallery'], ($, _, Backbone) ->
  BasemapGalleryView = Backbone.View.extend
    id: 'basemapGallery'
    
    render: (@map) ->
      @

    show: ->
      console.log "set up the basemap gallery"
      basemapGallery = new esri.dijit.BasemapGallery
        "showArcGISBasemaps": true
        "map": @map
        , @id

      basemapGallery.startup()
      @
