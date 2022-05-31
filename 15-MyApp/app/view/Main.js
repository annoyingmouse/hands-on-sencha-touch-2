// Ext.define('MyApp.view.Main', {
//     extend: 'Ext.tab.Panel',
//     xtype: 'main',
//     requires: [
//         'Ext.TitleBar',
//         'Ext.Video'
//     ],
//     config: {
//         tabBarPosition: 'bottom',
//
//         items: [
//             {
//                 title: 'Example App',
//                 iconCls: 'home',
//
//                 styleHtmlContent: true,
//                 scrollable: true,
//
//                 items: {
//                     docked: 'top',
//                     xtype: 'titlebar',
//                     title: 'Example App'
//                 },
//
//                 html:
//                     `<p>You've just generated a new Sencha Touch 2 project. What you're looking at right now is the,
//                     contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ,
//                     and refresh to change what's rendered here.</p>`
//             },
//             {
//                 title: 'Welcome to my first video tutorial',
//                 iconCls: 'action',
//
//                 items: [
//                     {
//                         docked: 'top',
//                         xtype: 'titlebar',
//                         title: 'Welcome to my first video tutorial'
//                     },
//                     {
//                         xtype: 'video',
//                         url: 'http://av.vimeo.com/64284/137/87347327.mp4?token=1330978144_f9b698fea38cd408d52a2393240c896c',
//                         posterUrl: 'http://b.vimeocdn.com/ts/261/062/261062119_640.jpg'
//                     }
//                 ]
//             }
//         ]
//     }
// });

// Ext.define('MyApp.view.Main', {
//     extend: 'Ext.Container',
//     xtype: 'main',
//     config: {
//         layout: {
//             type: 'vbox',
//         },
//         items: [
//             {
//                 xtype: 'container',
//                 layout: {
//                     type: 'fit',
//                 },
//                 flex: 3,
//             },
//             {
//                 xtype: 'container',
//                 layout: {
//                     type: 'hbox',
//                 },
//                 flex: 2,
//                 items: [
//                     {
//                         xtype: 'container',
//                         flex: 1,
//                         cls: 'icon-container',
//                         layout: {
//                             type: 'vbox',
//                             align: 'center',
//                         },
//                         items: [
//                             {
//                                 xtype: 'image',
//                                 mode: 'image',
//                                 src: 'resources/images/icon.png',
//                             },
//                             {
//                                 html: 'Title 1',
//                             },
//                         ],
//                     },
//                     {
//                         xtype: 'container',
//                         flex: 1,
//                         cls: 'icon-container',
//                         layout: {
//                             type: 'vbox',
//                             align: 'center',
//                         },
//                         items: [
//                             {
//                                 xtype: 'image',
//                                 mode: 'image',
//                                 src: 'resources/images/icon.png',
//                             },
//                             {
//                                 html: 'Title 2',
//                             },
//                         ],
//                     },
//                 ]
//             },
//             {
//                 xtype: 'container',
//                 layout: {
//                     type: 'hbox',
//                 },
//                 flex: 2,
//                 items: [
//                     {
//                         xtype: 'container',
//                         flex: 1,
//                         cls: 'icon-container',
//                         layout: {
//                             type: 'vbox',
//                             align: 'center',
//                         },
//                         items: [
//                             {
//                                 xtype: 'image',
//                                 mode: 'image',
//                                 src: 'resources/images/icon.png',
//                             },
//                             {
//                                 html: 'Title 3',
//                             },
//                         ],
//                     },
//                     {
//                         xtype: 'container',
//                         flex: 1,
//                         cls: 'icon-container',
//                         layout: {
//                             type: 'vbox',
//                             align: 'center',
//                         },
//                         items: [
//                             {
//                                 xtype: 'image',
//                                 mode: 'image',
//                                 src: 'resources/images/icon.png',
//                             },
//                             {
//                                 html: 'Title 4',
//                             },
//                         ],
//                     },
//                 ]
//             },
//             {
//                 xtype: 'container',
//                 layout: {
//                     type: 'hbox',
//                 },
//                 flex: 2,
//                 items: [
//                     {
//                         xtype: 'container',
//                         flex: 1,
//                         cls: 'icon-container',
//                         layout: {
//                             type: 'vbox',
//                             align: 'center',
//                         },
//                         items: [
//                             {
//                                 xtype: 'image',
//                                 mode: 'image',
//                                 src: 'resources/images/icon.png',
//                             },
//                             {
//                                 html: 'Title 5',
//                             },
//                         ],
//                     },
//                     {
//                         xtype: 'container',
//                         flex: 1,
//                         cls: 'icon-container',
//                         layout: {
//                             type: 'vbox',
//                             align: 'center',
//                         },
//                         items: [
//                             {
//                                 xtype: 'image',
//                                 mode: 'image',
//                                 src: 'resources/images/icon.png',
//                             },
//                             {
//                                 html: 'Title 6',
//                             },
//                         ],
//                     },
//                 ]
//             },
//         ],
//     },
// });

Ext.define('MyApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.Menu'
    ],
    config: {
        layout: {
            type: 'card'
        },
        id: 'card',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Sliding Menu',
                items: [
                    {
                        xtype: 'button',
                        id: 'listButton',
                        iconCls: 'list',
                        ui: 'plain',
                        handler: function(){
                            if(Ext.Viewport.getMenus().left.isHidden()) {
                                Ext.Viewport.showMenu('left');
                            } else {
                                Ext.Viewport.hideMenu('left');
                            }
                        }
                    }
                ]
            }
        ],

    },
    createMenu: function(){
        return Ext.create('Ext.Menu', {
            width: 250,
            scrollable: 'vertical',
            items: [
                {
                    xtype: 'button',
                    text: 'Option 1',
                    handler: function(){
                        console.log("Option 1 Tapped");
                        Ext.Viewport.hideMenu('left');
                    }
                },
                {
                    xtype: 'button',
                    text: 'Option 2',
                    handler: function(){
                        console.log("Option 2 Tapped");
                        Ext.Viewport.hideMenu('left');
                    }
                }
            ]
        });
    },
    initialize: function(){
        Ext.Viewport.setMenu(this.createMenu(),{
            side: 'left',
            reveal: true
        });
    }
});