Ext.define('Gramble.view.sidebar.Header', {
    extend: 'Ext.Container',
    
    config: {
    	docked: 'top',
    	baseCls: 'g-header',
    	tpl: [
            '<img src="{avatarURL}" />',
    		'<h3>{name}</h3>',
    		'<h4>{username}</h4>'
    	],
    	data: {
            avatarURL: 'http://graph.facebook.com/727937921/picture?type=large',
    		name: 'Sarah Dougan',
    		username: 'mrsdougan'
    	}
    }
});
