/*
 * File: app/view/PrintOffsView2.js
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

Ext.define('MEC_App.view.PrintOffsView2', {
    extend: 'Ext.Panel',
    alias: 'widget.PrintOffsView2',

    requires: [
        'Ext.Label',
        'Ext.Panel',
        'Ext.Button',
        'Ext.field.Hidden',
        'MEC_App.controller.DeviceController'
    ],

    config: {
        itemId: 'PrintOffsView2',
        layout: 'vbox',
        cls: [
            'complaint-view',
            'rtl'
        ],
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                html: 'طلب مستخرجات'
            },
            {
                xtype: 'panel',
                cls: 'acc-group',
                items: [
                    {
                        xtype: 'label',
                        html: 'نوع المستخرج'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        itemId: 'lblRequestType'
                    },
                    {
                        xtype: 'label',
                        html: 'عدد النسخ'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        itemId: 'lblNoCopies'
                    },
                    {
                        xtype: 'label',
                        html: 'اسم المنشأة'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        itemId: 'lblCompanyName'
                    },
                    {
                        xtype: 'label',
                        html: 'إجمالي الرسوم'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        itemId: 'lblTotalFees'
                    },
                    {
                        xtype: 'label',
                        html: 'رقم الطلب'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        itemId: 'lblRequestNo'
                    },
                    {
                        xtype: 'label',
                        html: 'حالة الطلب'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        itemId: 'lblRequestStatus'
                    },
                    {
                        xtype: 'label',
                        html: 'المرفقات المطلوبة'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        itemId: 'lblRequiredAttachments'
                    },
                    {
                        xtype: 'button',
                        cls: 'btn-send',
                        itemId: 'btnPrintoffs2Next',
                        text: 'تأكيد ودفع'
                    },
                    {
                        xtype: 'hiddenfield',
                        itemId: 'hiddenSerialNo'
                    }
                ]
            }
        ]
    }

});