Ext.define('Gramble.view.Navigation', {
    extend: 'Ext.tab.Panel',
    requires: [
        'Gramble.view.Home'
    ],
    
    config: {
    	baseCls: 'g-navigation',

        tabBar: {
            docked: 'left',
            scrollable: {
                direction: 'vertical'
            },
            width: 70,
            defaults: {
                baseCls: 'x-button'
            },
            layout: {
                type: 'vbox',
                align: 'stretch'
            }
        },

        items: [
            { xclass: 'Gramble.view.Home' },
            {
                title: 'Starlist',
                iconCls: 'starlist'
            },
            {
                title: 'Featured',
                iconCls: 'featured'
            },
            {
                title: 'Friends',
                iconCls: 'friends'
            },
            {
                title: 'Games',
                iconCls: 'games'
            },
            {
                title: 'Charities',
                iconCls: 'charities'
            },
            {
                title: 'Developers',
                iconCls: 'developers'
            },
            {
                title: 'Search',
                iconCls: 'search'
            }
        ]
    }
});
