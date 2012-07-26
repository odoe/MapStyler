(function() {

  define(['jquery', 'underscore', 'backbone', 'views/ViewManager'], function($, _, Backbone, VM) {
    var initialize;
    console.log("init");
    initialize = function() {
      var vm;
      vm = new VM();
      return vm.render();
    };
    return {
      initialize: initialize
    };
  });

}).call(this);
