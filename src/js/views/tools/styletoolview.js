(function() {

  define(['jquery', 'underscore', 'backbone', 'text!templates/tools/styletool.html', 'jqueryui'], function($, _, Backbone, StyleTool) {
    var StyleView;
    return StyleView = Backbone.View.extend({
      id: 'styletool',
      initialize: function() {
        return this.filters = "";
      },
      render: function() {
        var content;
        content = _.template(StyleTool, "");
        this.$el.append(content);
        return this;
      },
      refilter: function() {
        $('[id^=map_layer] img').not('#map_layers').css('webkit-filter', this.filters);
        return $('#filter-result').text("-webkit-filter: " + this.filters + ";");
      },
      ready: function() {
        var apply_filters, blur, brightness, contrast, grayscale, hue_rotate, invert, saturate, sepia,
          _this = this;
        hue_rotate = "";
        grayscale = "";
        sepia = "";
        brightness = "";
        contrast = "";
        invert = "";
        saturate = "";
        blur = "";
        apply_filters = function() {
          _this.filters = "" + hue_rotate + " " + grayscale + " " + sepia + " " + brightness + " " + contrast + " " + invert + " " + saturate;
          if (_this.filters.length < 4) _this.filters = "";
          $('[id^=map_layer] img').not('#map_layers').css('webkit-filter', _this.filters);
          return $('#filter-result').text("-webkit-filter: " + _this.filters + ";");
        };
        $('#hue-rotate').slider({
          max: 360,
          min: 0,
          slide: function(evt, ui) {
            if (ui.value > 0) {
              hue_rotate = "hue-rotate(" + ui.value + "deg)";
            } else {
              hue_rotate = "";
            }
            return apply_filters();
          }
        });
        $('#grayscale').slider({
          max: 100,
          min: 0,
          slide: function(evt, ui) {
            if (ui.value > 0) {
              grayscale = "grayscale(" + ui.value + "%)";
            } else {
              grayscale = "";
            }
            return apply_filters();
          }
        });
        $('#sepia').slider({
          max: 100,
          min: 0,
          slide: function(evt, ui) {
            if (ui.value > 0) {
              sepia = "sepia(" + ui.value + "%)";
            } else {
              sepia = "";
            }
            return apply_filters();
          }
        });
        $('#brightness').slider({
          max: 100,
          min: 0,
          slide: function(evt, ui) {
            if (ui.value > 0) {
              brightness = "brightness(" + ui.value + "%)";
            } else {
              brightness = "";
            }
            return apply_filters();
          }
        });
        $('#contrast').slider({
          max: 200,
          min: 0,
          value: 100,
          slide: function(evt, ui) {
            if (ui.value > 0) {
              contrast = "contrast(" + ui.value + "%)";
            } else {
              contrast = "";
            }
            return apply_filters();
          }
        });
        $('#invert').slider({
          max: 100,
          min: 0,
          slide: function(evt, ui) {
            if (ui.value > 0) {
              invert = "invert(" + ui.value + "%)";
            } else {
              invert = "";
            }
            return apply_filters();
          }
        });
        $('#saturate').slider({
          max: 100,
          min: 0,
          value: 100,
          slide: function(evt, ui) {
            if (ui.value > 0) {
              saturate = "saturate(" + ui.value + "%)";
            } else {
              saturate = "";
            }
            return apply_filters();
          }
        });
        return $('#blur').slider({
          max: 10,
          min: 0,
          value: 0,
          slide: function(evt, ui) {
            console.log("blur val", ui.value);
            if (ui.value > 0) {
              blur = "blur(" + ui.value + "px)";
            } else {
              blur = "";
            }
            console.log("blur text", blur);
            return apply_filters();
          }
        });
      }
    });
  });

}).call(this);
