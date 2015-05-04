/*
 * File: app/view/PublicServiceView.js
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

Ext.define('MEC_App.view.PublicServiceView', {
    extend: 'Ext.Panel',
    alias: 'widget.PublicServiceView',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        fullscreen: true,
        itemId: 'PublicServiceView',
        layout: 'vbox',
        items: [
            {
                xtype: 'panel',
                flex: 1,
                cls: 'services-header',
                height: '30%',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'panel',
                        cls: 'services-header-overlay',
                        height: '100%',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'panel',
                                flex: 2,
                                cls: 'service-header-icon'
                            },
                            {
                                xtype: 'label',
                                flex: 1,
                                cls: 'service-header-title',
                                html: 'الخدمات العامة',
                                itemId: 'viewLbl'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                flex: 2.7,
                cls: 'inner-panel',
                height: 'auto',
                items: [
                    {
                        xtype: 'list',
                        cls: 'CompanyList',
                        height: 131,
                        itemId: 'lstLinks',
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
                fn: 'onLstLinksItemTap',
                event: 'itemtap',
                delegate: '#lstLinks'
            }
        ]
    },

    onLstLinksItemTap: function(dataview, index, target, record, e, eOpts) {
                    Ext.Global.RedirectToView(record.data);

    },

    initialize: function() {
        this.callParent();

        Ext.Localization.LoadLocalization();

        Ext.Localization.LocalizeView(this);

        var links = [
                        {Name:'خدمات المستثمر',Url:'InvestorServiceView',RequireLogin:false,Icon:'ico-investorService.png'},
                        {Name:'خدمات المستهلك',Url:'ConsumerServiceView', RequireLogin:false, Icon:'ico-consumerService.png'}
                    ];

        var store = new Ext.data.Store({
            data : links
        });

        var lst = this.down('#lstLinks');
        lst.setStore(store);
        lst.setScrollable(false);










    }

});