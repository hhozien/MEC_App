/*
 * File: app/view/TradeNameEstablishmentDetails.js
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

Ext.define('MEC_App.view.TradeNameEstablishmentDetails', {
    extend: 'Ext.Panel',
    alias: 'widget.TradeNameEstablishmentDetails',

    requires: [
        'Ext.Panel',
        'Ext.TitleBar',
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate',
        'MEC_App.controller.AnimationHelper'
    ],

    config: {
        cls: 'rtl',
        fullscreen: true,
        id: 'TradeNameEstablishmentDetails',
        itemId: 'TradeNameEstablishmentDetails',
        layout: 'vbox',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [
            {
                xtype: 'panel',
                cls: 'acc-container',
                itemId: 'EstablishmentInfo',
                items: [
                    {
                        xtype: 'titlebar',
                        cls: 'acc-header',
                        docked: 'top',
                        itemId: 'mytitlebar',
                        title: 'بيانات المنشأة',
                        titleAlign: 'right',
                        listeners: [
                            {
                                fn: function(element, eOpts) {
                                    Ext.AnimationHelper.HandleShowHidePanel(element,'pnlData');

                                },
                                event: 'painted'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        cls: 'acc-group',
                        id: 'pnlData',
                        itemId: 'pnlData',
                        items: [
                            {
                                xtype: 'label',
                                html: 'اسم المنشأة بالغة العربية',
                                id: 'establishmentArabicName',
                                itemId: 'CRArabicName'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                id: 'establishmentArabicName1'
                            },
                            {
                                xtype: 'label',
                                html: 'اسم المنشأة باللغة الإنجليزية',
                                id: 'establishmentEnglishName',
                                itemId: 'CREnglishName'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                id: 'establishmentEnglishName1'
                            },
                            {
                                xtype: 'label',
                                html: 'رأس مال الشركة',
                                id: 'companyCapital',
                                itemId: 'CompanyCapital'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                id: 'companyCapital1'
                            },
                            {
                                xtype: 'label',
                                html: 'الشكل القانوني',
                                id: 'establishmentLegalForm',
                                itemId: 'establishmentLegalForm'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                id: 'establishmentLegalForm1'
                            },
                            {
                                xtype: 'label',
                                html: 'نوع المنشأة',
                                id: 'establishmentType',
                                itemId: 'establishmentType'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                id: 'establishmentType1'
                            },
                            {
                                xtype: 'label',
                                html: 'رقم قيد المنشأة',
                                itemId: 'establishmentRegNumber1',
                                maxWidth: 'establishmentRegNumber1'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                id: 'establishmentRegNumber',
                                itemId: 'establishmentRegNumber'
                            },
                            {
                                xtype: 'label',
                                html: ' رقم السجل التجاري',
                                id: 'commercialRegistration',
                                itemId: 'commercialRegistration'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                html: ' ',
                                id: 'commercialRegistration1'
                            },
                            {
                                xtype: 'label',
                                html: 'تاريخ إنشاء السجل',
                                id: 'commercialRegistrationIssueDate',
                                itemId: 'commercialRegistrationIssueDate'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                id: 'commercialRegistrationIssueDate1'
                            },
                            {
                                xtype: 'label',
                                html: 'تاريخ انتهاء السجل',
                                id: 'commercialRegistrationExpiryDate',
                                itemId: 'commercialRegistrationExpiryDate'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                id: 'commercialRegistrationExpiryDate1'
                            },
                            {
                                xtype: 'label',
                                html: 'حالة السجل التجاري',
                                id: 'commercialRegistrationStatus',
                                itemId: 'commercialRegistrationStatus'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                id: 'commercialRegistrationStatus1'
                            },
                            {
                                xtype: 'label',
                                html: 'رقم الرخصة التجارية',
                                id: 'commercialPermit',
                                itemId: 'commercialPermit'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                id: 'commercialPermit1'
                            },
                            {
                                xtype: 'label',
                                html: 'تاريخ انتهاء الرخصة التجارية',
                                id: 'commercialPermitExpiryDate',
                                itemId: 'commercialPermitExpiryDate'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                id: 'commercialPermitExpiryDate1'
                            },
                            {
                                xtype: 'label',
                                html: 'حالة الرخصة التجارية',
                                id: 'commercialPermitStatus',
                                itemId: 'commercialPermitStatus'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                id: 'commercialPermitStatus1'
                            },
                            {
                                xtype: 'label',
                                html: 'تاريخ التأسيس',
                                id: 'establishmentDate',
                                itemId: 'establishmentDate'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                id: 'establishmentDate1'
                            },
                            {
                                xtype: 'label',
                                html: 'حالة المنشأة',
                                id: 'establishmentStatus',
                                itemId: 'establishmentStatus'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                id: 'establishmentStatus1'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'acc-container',
                hidden: false,
                itemId: 'BusinessActivities',
                items: [
                    {
                        xtype: 'titlebar',
                        cls: 'acc-header',
                        docked: 'top',
                        itemId: 'mytitlebar2',
                        title: 'الانشطة التجارية',
                        titleAlign: 'right',
                        listeners: [
                            {
                                fn: function(element, eOpts) {
                                    Ext.AnimationHelper.HandleShowHidePanel(element,'pnlData2');

                                },
                                event: 'painted'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        cls: 'acc-group',
                        id: 'pnlData2',
                        itemId: 'pnlData2',
                        items: [
                            {
                                xtype: 'list',
                                itemId: 'lstBizActivities',
                                itemTpl: [
                                    '<div>{businessActivityName}</div>'
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'acc-container',
                hidden: false,
                itemId: 'Branches',
                items: [
                    {
                        xtype: 'titlebar',
                        cls: 'acc-header',
                        docked: 'top',
                        itemId: 'mytitlebar3',
                        title: 'الفروع',
                        titleAlign: 'right',
                        listeners: [
                            {
                                fn: function(element, eOpts) {
                                    Ext.AnimationHelper.HandleShowHidePanel(element,'pnlData3');

                                },
                                event: 'painted'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        cls: 'acc-group',
                        id: 'pnlData3',
                        itemId: 'pnlData3',
                        items: [
                            {
                                xtype: 'list',
                                id: 'lstBranches',
                                itemCls: 'item-branch',
                                itemTpl: [
                                    '<div class=\'tpl-branch-1\'>{branchName}</div>',
                                    '',
                                    '<div class=\'tpl-branch-2\'>{status}&nbsp;</div>',
                                    '',
                                    ''
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'acc-container',
                itemId: 'Signatories',
                items: [
                    {
                        xtype: 'titlebar',
                        cls: 'acc-header',
                        docked: 'top',
                        itemId: 'mytitlebar4',
                        title: 'المخولين بالتوقيع',
                        titleAlign: 'right',
                        listeners: [
                            {
                                fn: function(element, eOpts) {
                                    Ext.AnimationHelper.HandleShowHidePanel(element,'lstSignatories');

                                },
                                event: 'painted'
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        id: 'lstSignatories',
                        itemCls: 'item-signatory',
                        itemTpl: [
                            '',
                            '    <div class=\'tpl-signatory-1\'>{fullNameARA}</div>',
                            '    <div class=\'tpl-signatory-2\'><span class=\'FA\'>{type}</span> <span class=\'FB\'>{nationality}</span></div>',
                            '',
                            ''
                        ],
                        scrollToTopOnRefresh: false
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();

        Ext.Localization.LocalizeView(this);

    }

});