Ext.define('Gramble.view.Main', {
    extend: 'Ext.Container',
    requires: [
        'Gramble.view.Navigation',
        'Gramble.view.Sidebar'
    ],

    config: {
        layout: 'fit',
        
        items: [
            { xclass: 'Gramble.view.Navigation' },
            { xclass: 'Gramble.view.Sidebar' }
        ]
    }
});
