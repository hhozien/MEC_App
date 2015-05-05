/*
 * File: app/view/SupplyServiceView3.js
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

Ext.define('MEC_App.view.SupplyServiceView3', {
    extend: 'Ext.Panel',
    alias: 'widget.SupplyServiceView3',

    requires: [
        'Ext.Label',
        'Ext.Panel',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.Button'
    ],

    config: {
        itemId: 'SupplyServiceView3',
        scrollable: 'vertical',
        cls: [
            'complaint-view',
            'rtl'
        ],
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                html: 'نموذج طلب تموين'
            },
            {
                xtype: 'panel',
                cls: 'acc-group',
                items: [
                    {
                        xtype: 'label',
                        html: 'اسم المستخدم',
                        id: 'lblUserName'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        itemId: 'lblUserName2'
                    },
                    {
                        xtype: 'label',
                        html: 'الاصناف والكميات',
                        id: 'lblItems'
                    },
                    {
                        xtype: 'list',
                        height: 150,
                        itemId: 'lstItems',
                        itemTpl: [
                            '<div>List Item {string}</div>'
                        ]
                    },
                    {
                        xtype: 'label',
                        html: 'منفذ التوزيع',
                        id: 'lblDealer'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        itemId: 'lblDealer2'
                    },
                    {
                        xtype: 'label',
                        html: 'الرسوم المستحقة',
                        id: 'lblFees'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        itemId: 'lblFees2'
                    }
                ]
            },
            {
                xtype: 'button',
                cls: 'btn-send',
                itemId: 'btnSupplyNext2',
                text: 'دفع المستحقات'
            }
        ]
    }

});