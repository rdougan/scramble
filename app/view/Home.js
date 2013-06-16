Ext.define('Gramble.view.Home', {
    extend: 'Ext.Carousel',
    requires: [
        'Gramble.view.home.NewGames',
        'Gramble.view.home.MostPopular'
    ],
    
    config: {
    	iconCls: 'home',
    	defaults: {
    		xclass: 'Gramble.view.ContentView'
    	},
    	items: [
            { xclass: 'Gramble.view.home.NewGames' },
            { xclass: 'Gramble.view.home.MostPopular' },
            { xclass: 'Gramble.view.home.Charities' },
    		{ xclass: 'Gramble.view.home.Developers' }
    	]
    }
});
