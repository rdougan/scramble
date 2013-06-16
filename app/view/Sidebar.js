Ext.define('Gramble.view.Sidebar', {
    extend: 'Ext.Container',
    requires: [
        'Gramble.view.sidebar.Header',
        'Gramble.view.sidebar.Social',
        'Gramble.view.sidebar.Friends',
        'Gramble.view.sidebar.Chat',
        'Ext.tab.Panel'
    ],
    
    config: {
    	docked: 'right',
    	width: 234,
        baseCls: 'g-sidebar',

        layout: 'fit',

        items: [
            {
                xclass: 'Gramble.view.sidebar.Header',
            },
            {
                xtype: 'button',
                iconCls: 'toggle',
                floating: true,
                cls: 'g-toggle-button',
                left: -35,
                top: -35
            },
            {
                xtype: 'tabpanel',
                tabBar: {
                    defaults: {
                        flex: 1
                    }
                },
                items: [
                    { xclass: 'Gramble.view.sidebar.Social' },
                    { xclass: 'Gramble.view.sidebar.Friends' },
                    { xclass: 'Gramble.view.sidebar.Chat' }
                ]
            }
        ],

        listeners: {
            tap: 'toggle',
            delegate: '> button'
        }
    },

    toggle: function() {
        this.setWidth((this.getWidth() == 0) ? 234 : 0);
    }
});
