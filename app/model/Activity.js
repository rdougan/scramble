Ext.define('Gramble.model.Activity', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'avatarURL', type: 'string' },
            { name: 'body', type: 'string' },
            { name: 'time', type: 'string' }
        ]
    }
});
