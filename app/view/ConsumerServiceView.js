/*
 * File: app/view/ConsumerServiceView.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MEC_App.view.ConsumerServiceView', {
    extend: 'Ext.Panel',
    alias: 'widget.ConsumerServiceView',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        fullscreen: true,
        layout: 'vbox',
        items: [
            {
                xtype: 'panel',
                flex: 2.2,
                cls: 'inner-panel',
                height: 'auto',
                items: [
                    {
                        xtype: 'panel',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'label',
                                cls: 'service-title',
                                html: 'خدمات المستهلك',
                                itemId: 'lblConsumer'
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        cls: 'CompanyList',
                        height: 131,
                        itemId: 'lstLinks2',
                        itemCls: 'item-link',
                        itemTpl: [
                            '<div class=\'nav-item\' style=\'background:url(resources/images/{Icon})\'>{Name}</div>'
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onLstLinks1ItemTap1',
                event: 'itemtap',
                delegate: '#lstLinks2'
            }
        ]
    },

    onLstLinks1ItemTap1: function(dataview, index, target, record, e, eOpts) {
                    Ext.Global.RedirectToView(record.data);

    },

    initialize: function() {
        this.callParent();


        var links = [{Name:' ابلاغ عن شكوي',Url:'ComplaintsView',RequireLogin:false,Icon:'ico-complaints.png'},
                            {Name:' خدمات التموين',Url:'SupplyServiceView1', RequireLogin:true, Icon:'ico-supplyService.png'}
                            ];

        var store = new Ext.data.Store({
            data : links
        });

        var lst = this.down('#lstLinks2');
        lst.setStore(store);
        lst.setScrollable(false);










    }

});