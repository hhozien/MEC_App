/*
 * File: app/view/SupplyServiceView2.js
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

Ext.define('MEC_App.view.SupplyServiceView2', {
    extend: 'Ext.Panel',
    alias: 'widget.SupplyServiceView2',

    requires: [
        'Ext.Label',
        'Ext.Panel',
        'Ext.Map',
        'Ext.form.FieldSet',
        'Ext.field.Radio',
        'Ext.field.Hidden',
        'Ext.Button'
    ],

    config: {
        itemId: 'SupplyServiceView2',
        zIndex: 1000,
        cls: [
            'complaint-view',
            'rtl'
        ],
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                html: 'نموذج طلب تموين',
                itemId: 'viewLbl'
            },
            {
                xtype: 'panel',
                cls: 'mapview',
                id: 'pnlMapDealers',
                itemId: 'pnlMap',
                zIndex: 1000,
                items: [
                    {
                        xtype: 'map',
                        height: '18em',
                        itemId: 'mapDealers'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                itemId: 'set1',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'radiofield',
                        flex: 1,
                        itemId: 'radRequestNearby',
                        label: 'عرض الأقرب',
                        labelWidth: '65%',
                        name: 'field',
                        checked: true
                    },
                    {
                        xtype: 'radiofield',
                        flex: 1,
                        itemId: 'radRequestAll',
                        label: 'عرض الكل',
                        labelWidth: '65%',
                        name: 'field'
                    }
                ]
            },
            {
                xtype: 'label',
                cls: 'branch-title',
                itemId: 'lblTitle'
            },
            {
                xtype: 'label',
                cls: 'branch-address',
                itemId: 'lblAddress'
            },
            {
                xtype: 'label',
                cls: 'branch-goto',
                html: 'الذهاب إلى الموزع',
                itemId: 'lblGoTo',
                listeners: [
                    {
                        fn: function(component, eOpts) {


                            var me = this;

                            me.element.on('tap', function(){
                                window.open('http://maps.google.com?q='+me.up('SupplyServiceView2').down('#lat').getValue()+','+me.up('SupplyServiceView2').down('#lng').getValue(),'_system');
                            }, me.element);

                        },
                        event: 'initialize'
                    }
                ]
            },
            {
                xtype: 'hiddenfield',
                itemId: 'hiddenDealerID'
            },
            {
                xtype: 'hiddenfield',
                itemId: 'hiddenDealerName'
            },
            {
                xtype: 'button',
                cls: 'btn-send',
                itemId: 'btnSupplyNext2',
                text: 'التالي'
            },
            {
                xtype: 'hiddenfield',
                itemId: 'lat'
            },
            {
                xtype: 'hiddenfield',
                itemId: 'lng'
            }
        ]
    }

});