/*
 * File: app/view/MyRequestDetails.js
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

Ext.define('MEC_App.view.MyRequestDetails', {
    extend: 'Ext.Panel',
    alias: 'widget.MyRequestDetails',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'MEC_App.controller.AnimationHelper'
    ],

    config: {
        cls: 'rtl',
        fullscreen: true,
        itemId: 'MyRequestDetails',
        layout: 'vbox',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [
            {
                xtype: 'panel',
                cls: 'acc-group',
                id: 'pnlData-c2',
                itemId: 'pnlData',
                items: [
                    {
                        xtype: 'label',
                        html: ' رقم الطلب'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        html: ' ',
                        itemId: 'serialNumber'
                    },
                    {
                        xtype: 'label',
                        html: ' حالة الطلب'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        html: ' ',
                        itemId: 'caseStatus'
                    },
                    {
                        xtype: 'label',
                        html: ' نوع الطلب'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        html: ' ',
                        itemId: 'caseType'
                    },
                    {
                        xtype: 'label',
                        html: ' تاريخ تقديم الطلب'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        html: ' ',
                        itemId: 'caseSubmissionDate'
                    },
                    {
                        xtype: 'label',
                        html: 'تاريخ آخر تحديث'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        html: ' ',
                        itemId: 'caseLastUpdateDate'
                    },
                    {
                        xtype: 'label',
                        html: 'تاريخ اغلاق الطلب'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        html: ' ',
                        itemId: 'caseCompletionDate'
                    },
                    {
                        xtype: 'label',
                        html: 'الرقم الشخصي لمقدم الطلب'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        html: ' ',
                        itemId: 'caseRepresentativeIDNum'
                    },
                    {
                        xtype: 'label',
                        html: 'اسم مقدم الطلب باللغة العربية'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        html: ' ',
                        itemId: 'caseRepresentativeName'
                    },
                    {
                        xtype: 'label',
                        html: 'اسم مقدم الطلب باللغة الانجليزية'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        html: ' ',
                        itemId: 'caseRepresentativeNameENU'
                    },
                    {
                        xtype: 'label',
                        html: 'رقم السجل التجاري'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        html: ' ',
                        itemId: 'caseEstablishmentCRN'
                    },
                    {
                        xtype: 'label',
                        html: 'اسم الشركة باللغة العربية'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        html: ' ',
                        itemId: 'caseEstablishmentName'
                    },
                    {
                        xtype: 'label',
                        html: 'اسم الشركة باللغة الانجليزية'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        html: ' ',
                        itemId: 'caseEstablishmentNameENU'
                    },
                    {
                        xtype: 'label',
                        html: 'اجمالي المبلغ المطلوب'
                    },
                    {
                        xtype: 'label',
                        cls: 'label-value',
                        html: ' ',
                        itemId: 'totlaRemainingFees'
                    }
                ]
            }
        ]
    }

});