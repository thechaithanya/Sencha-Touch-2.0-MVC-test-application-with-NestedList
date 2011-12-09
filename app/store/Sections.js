Ext.define('Myapp.store.Sections', {
    extend: 'Ext.data.TreeStore',
    model: 'Myapp.model.Sections',
    
    root: {},
    
    proxy: {
        type: 'ajax',
        url: 'data/data.json',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});
