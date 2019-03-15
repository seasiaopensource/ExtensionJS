/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

 Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'container',
	requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.main.List'
    ],
    layout: 'border',
    items: [{
        title: 'South-Grid',
        region: 'south',     // position for region
        xtype: 'mainlist',
        split: true,         // enable resizing
        margin: '0 5 5 5',
		useArrows: true,
		expanded: true,
		collapsible: true,
		split: true,
		closable: true,
		closeAction: 'hide',
		maximizable: true,
		rootVisible: false,
		split: true
    },{
        title: 'West-Tree',
        region:'west',
        xtype: 'treepanel',
        margin: '5 0 0 5',
        width: 200,
        collapsible: true,   // make collapsible
        id: 'west-region-container',
        layout: 'fit',
		useArrows: true,
		expanded: true,
		collapsible: true,
		split: true,
		closable: true,
		closeAction: 'hide',
		maximizable: true,
		rootVisible: false,
		split: true,
		 root: {
			children: [
				{ text: 'detention', leaf: true },
				{ text: 'homework', expanded: true, children: [
					{ text: 'book report', leaf: true },
					{ text: 'algebra', leaf: true}
				] },
				{ text: 'buy lottery tickets', leaf: true }
			]
		}
    },{
        region: 'center',     // center region is required, no width/height specified
        margin: '5 5 0 0',
		useArrows: true,
		title: 'Center-Panel',
		expanded: true,
		collapsible: true,
		split: true,
		closable: true,
		closeAction: 'hide',
		maximizable: true,
		rootVisible: false,
		split: true
    },{
        title: 'East-Form',
        region: 'east',     // position for region
        defaultType: 'textfield',
        split: true,         // enable resizing
        margin: '5 0 0 5',
		useArrows: true,
		expanded: true,
		collapsible: true,
		split: true,
		closable: true,
		closeAction: 'hide',
		maximizable: true,
		rootVisible: false,
		width: 300,
		split: true,
		bodyPadding: 10,
		xtype:"panel"
    }],
    renderTo: Ext.getBody()
});
 /*Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});*/
