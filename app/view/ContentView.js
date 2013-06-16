Ext.define('Gramble.view.ContentView', {
    extend: 'Ext.Container',
    
    config: {
        baseCls: 'g-contentview',
    	header: null,
        layout: 'fit'
    },

    updateHeader: function(newTitle) {
    	if (!this._titleBar) {
    		this._titleBar = Ext.create('Ext.Toolbar', {
    			docked: 'top',
    			baseCls: 'g-titlebar'
    		});

    		this.add(this._titleBar);
    	}

    	this._titleBar.setHtml(newTitle);
    }
});
