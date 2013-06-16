Ext.define('Gramble.view.sidebar.Friends', {
    extend: 'Ext.List',
    
    config: {
        baseCls: 'g-social-list',
    	text: 'Friends',
    	iconCls: 'friends',

        store: 'Social',
        variableHeights: true,

        itemTpl: [
        	'<img src="{avatarURL}" />',
        	'{body}',
        	'<div class="time">{time}</div>'
        ]
    }
});
