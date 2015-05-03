/*
 * File: app/view/InvestorServiceView.js
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

Ext.define('MEC_App.view.InvestorServiceView', {
    extend: 'Ext.Panel',
    alias: 'widget.InvestorServiceView',

    requires: [
        'Ext.Label',
        'Ext.Panel',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        fullscreen: true,
        layout: 'vbox',
        items: [
            {
                xtype: 'label',
                cls: 'service-title',
                docked: 'top',
                html: 'خدمات المستثمر',
                itemId: 'lblInvestor'
            },
            {
                xtype: 'panel',
                flex: 1,
                cls: 'inner-panel',
                height: 'auto',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                items: [
                    {
                        xtype: 'panel',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'list',
                                cls: 'CompanyList',
                                height: 391,
                                itemId: 'lstLinks1',
                                itemCls: 'item-link',
                                itemTpl: [
                                    '<div class=\'nav-item\' style=\'background:url(resources/images/{Icon})\'>{Name}</div>'
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onLstLinks1ItemTap',
                event: 'itemtap',
                delegate: '#lstLinks1'
            }
        ]
    },

    onLstLinks1ItemTap: function(dataview, index, target, record, e, eOpts) {
                    Ext.Global.RedirectToView(record.data);

    },

    initialize: function() {
        this.callParent();

        var links = [{Name:'بياناتي الخاصة',Url:'MyBusinessView',RequireLogin:true , Icon:'ico-myBusiness.png'},
                            {Name:'الخدمات الادارية',Url:'AdminServicesView',RequireLogin:false ,Icon:'ico-adminServices.png'},
                            {Name:' خدمات المستخرجات',Url:'PrintOffsView1', RequireLogin:true , Icon:'ico-printOffs.png'},
                            {Name:' متابعة المعاملات',Url:'MyRequestsView',RequireLogin:true,Icon:'ico-myRequests.png'},
                            {Name:' خدمات التسجيل ',Url:'http://eservicesstg.mec.gov.qa/eservice_ara/start.swe?SWECmd=GotoView&SWEView=MEC+Issue+Representative+Office+General+Instruction+View+eService',RequireLogin:false ,Icon:'ico-registerService.png'},
                            {Name:'حجز اسم تجاري',Url:'http://eservicesstg.mec.gov.qa/eservice_ara/start.swe?SWECmd=GotoView&SWEView=MEC+Trade+Names+Reg+General+Instructions+View+eService',RequireLogin:false , Icon:'ico-reserveTradeName.png'}
                            ];

        var store = new Ext.data.Store({
            data : links
        });

        var lst = this.down('#lstLinks1');
        lst.setStore(store);
        lst.setScrollable(false);

    }

});