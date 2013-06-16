Ext.define('Gramble.view.sidebar.Social', {
    extend: 'Ext.List',
    
    config: {
        baseCls: 'g-social-list',
    	iconCls: 'social',

    	store: 'Social',
        variableHeights: true,

        itemTpl: [
        	'<img src="{avatarURL}" />',
        	'{body}',
        	'<div class="time">{time}</div>'
        ]
    }
});
