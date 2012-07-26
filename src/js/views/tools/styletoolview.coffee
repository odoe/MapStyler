define [
  'jquery'
  'underscore'
  'backbone'
  'text!templates/tools/styletool.html'
  'jqueryui'
], ($, _, Backbone, StyleTool) ->
  StyleView = Backbone.View.extend
    id: 'styletool'

    initialize: ->
      @filters = ""

    render: ->
      content = _.template StyleTool, ""
      @$el.append content
      @

    refilter: ->
      $('[id^=map_layer] img').not('#map_layers').css 'webkit-filter', @filters
      $('#filter-result').text "-webkit-filter: #{@filters};"


    ready: ->
      # varying css strings that will be concatenated
      hue_rotate = ""
      grayscale = ""
      sepia = ""
      brightness = ""
      contrast = ""
      invert = ""
      saturate = ""
      blur = "" # not recommended

      apply_filters = =>
        @filters = "#{hue_rotate} #{grayscale} #{sepia} #{brightness} #{contrast} #{invert} #{saturate}"
        if @filters.length < 4 then @filters = ""
        $('[id^=map_layer] img').not('#map_layers').css 'webkit-filter', @filters
        $('#filter-result').text "-webkit-filter: #{@filters};"

      $('#hue-rotate').slider(
        max: 360
        min: 0
        slide: (evt, ui) ->
          if ui.value > 0 then hue_rotate = "hue-rotate(#{ui.value}deg)" else hue_rotate = ""
          apply_filters()
      )

      $('#grayscale').slider(
        max: 100
        min: 0
        slide: (evt, ui) ->
          if ui.value > 0 then grayscale = "grayscale(#{ui.value}%)" else grayscale = ""
          apply_filters()
      )

      $('#sepia').slider(
        max: 100
        min: 0
        slide: (evt, ui) ->
          if ui.value > 0 then sepia = "sepia(#{ui.value}%)" else sepia = ""
          apply_filters()
      )

      $('#brightness').slider(
        max: 100
        min: 0
        slide: (evt, ui) ->
          if ui.value > 0 then brightness = "brightness(#{ui.value}%)" else brightness = ""
          apply_filters()
      )

      $('#contrast').slider(
        max: 200
        min: 0
        value: 100
        slide: (evt, ui) ->
          if ui.value > 0 then contrast = "contrast(#{ui.value}%)" else contrast = ""
          apply_filters()
      )

      $('#invert').slider(
        max: 100
        min: 0
        slide: (evt, ui) ->
          if ui.value > 0 then invert = "invert(#{ui.value}%)" else invert = ""
          apply_filters()
      )

      $('#saturate').slider(
        max: 100
        min: 0
        value: 100
        slide: (evt, ui) ->
          if ui.value > 0 then saturate = "saturate(#{ui.value}%)" else saturate = ""
          apply_filters()
      )

      # blur does not work correctly
      # once applied, cannot remove
      $('#blur').slider(
        max: 10
        min: 0
        value: 0
        slide: (evt, ui) ->
          console.log "blur val", ui.value
          if ui.value > 0 then blur = "blur(#{ui.value}px)" else blur = ""
          console.log "blur text", blur
          apply_filters()
      )
