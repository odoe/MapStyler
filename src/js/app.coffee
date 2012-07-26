#define.amd.jQuery = true
define [
  'jquery'
  'underscore'
  'backbone'
  'views/ViewManager'
], ($, _, Backbone, VM) ->
	console.log "init"
	initialize = ->
		vm = new VM()
		vm.render()

	initialize: initialize
