define ->
	simpleMarker: ->
		new esri.symbol.SimpleMarkerSymbol esri.symbol.SimpleMarkerSymbol.STYLE_SQUARE, 12,
					new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID,
						new dojo.Color([255, 0, 0]), 1),
						new dojo.Color [0, 255, 0, 1]

	lineSymbol: ->
		new esri.symbol.SimpleLineSymbol esri.symbol.SimpleLineSymbol.STYLE_SOLID,
			new dojo.Color([124, 252, 0]),
			3

	polygonSymbol: -> 
		new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_NONE,
			new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_DASHDOT,
				new dojo.Color([255, 0, 0]), 2), new dojo.Color([255, 255, 0, 0.25]))