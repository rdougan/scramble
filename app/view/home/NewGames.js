Ext.define('Gramble.view.home.NewGames', {
    extend: 'Gramble.view.ContentView',
    
    config: {
    	header: 'new games',
    	items: [
    		{
    			xtype: 'dataview',
    			baseCls: 'g-gridview',
    			data: [
    				{
    					title: 'Tap Paradise Cove',
    					imageSrc: 'http://static.gramble.com/images/pocketgems/tapparadisecove.jpg'
    				},
    				{
    					title: 'Tap Paradise Cove',
    					imageSrc: 'http://static.gramble.com/images/pocketgems/tapparadisecove.jpg'
    				},
    				{
    					title: 'Tap Paradise Cove',
    					imageSrc: 'http://static.gramble.com/images/pocketgems/tapparadisecove.jpg'
    				},
    				{
    					title: 'Tap Paradise Cove',
    					imageSrc: 'http://static.gramble.com/images/pocketgems/tapparadisecove.jpg'
    				},
    				{
    					title: 'Tap Paradise Cove',
    					imageSrc: 'http://static.gramble.com/images/pocketgems/tapparadisecove.jpg'
    				},
    				{
    					title: 'Tap Paradise Cove',
    					imageSrc: 'http://static.gramble.com/images/pocketgems/tapparadisecove.jpg'
    				},
    				{
    					title: 'Tap Paradise Cove',
    					imageSrc: 'http://static.gramble.com/images/pocketgems/tapparadisecove.jpg'
    				},
    				{
    					title: 'Tap Paradise Cove',
    					imageSrc: 'http://static.gramble.com/images/pocketgems/tapparadisecove.jpg'
    				},
    				{
    					title: 'Tap Paradise Cove',
    					imageSrc: 'http://static.gramble.com/images/pocketgems/tapparadisecove.jpg'
    				},
    				{
    					title: 'Tap Paradise Cove',
    					imageSrc: 'http://static.gramble.com/images/pocketgems/tapparadisecove.jpg'
    				},
    				{
    					title: 'Tap Paradise Cove',
    					imageSrc: 'http://static.gramble.com/images/pocketgems/tapparadisecove.jpg'
    				},
    				{
    					title: 'Tap Paradise Cove',
    					imageSrc: 'http://static.gramble.com/images/pocketgems/tapparadisecove.jpg'
    				},
    				{
    					title: 'Tap Paradise Cove',
    					imageSrc: 'http://static.gramble.com/images/pocketgems/tapparadisecove.jpg'
    				}
    			],
    			itemTpl: [
    				'<img src="{imageSrc}" /">',
    				'<div class="title">{title}</title>'
    			]
    		}
    	]
    }
});
