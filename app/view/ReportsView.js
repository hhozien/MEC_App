/*
 * File: app/view/ReportsView.js
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

Ext.define('MEC_App.view.ReportsView', {
    extend: 'Ext.Panel',
    alias: 'widget.ReportsView',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'Ext.Button'
    ],

    config: {
        fullscreen: true,
        layout: 'fit',
        items: [
            {
                xtype: 'panel',
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
                                        html: 'المؤشرات والتقارير',
                                        itemId: 'viewLbl'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 2.2,
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
                                        xtype: 'panel',
                                        cls: 'services-list-panel',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'button',
                                                flex: 1,
                                                itemId: 'reportsBtn1',
                                                iconAlign: 'top',
                                                iconCls: 'icon-my-business',
                                                text: 'مؤشرات اقتصادية'
                                            },
                                            {
                                                xtype: 'button',
                                                flex: 1,
                                                itemId: 'reportsBtn2',
                                                iconAlign: 'top',
                                                iconCls: 'icon-print-office',
                                                text: 'مؤشرات الاعمال'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        cls: 'services-list-panel',
                                        layout: 'hbox',
                                        items: [
                                            {
                                                xtype: 'button',
                                                flex: 1,
                                                itemId: 'reportsBtn3',
                                                iconAlign: 'top',
                                                iconCls: 'icon-my-request',
                                                text: 'مؤشرات استهلاكية'
                                            },
                                            {
                                                xtype: 'button',
                                                flex: 1,
                                                itemId: 'reportsBtn4',
                                                iconAlign: 'top',
                                                iconCls: 'icon-supply',
                                                text: 'تقرير العلامات التجارية'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();

        this.down('#reportsBtn1').setHtml(Ext.Global.GetViewTitle('EcoReports'));
        this.down('#reportsBtn2').setHtml(Ext.Global.GetViewTitle('BizReports'));
        this.down('#reportsBtn3').setHtml(Ext.Global.GetViewTitle('ConsumerReports'));
        this.down('#reportsBtn4').setHtml(Ext.Global.GetViewTitle('TradeReports'));



        this.down('#viewLbl').setHtml( Ext.Global.GetViewTitle('Reports'));



    }

});