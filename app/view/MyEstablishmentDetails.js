/*
 * File: app/view/MyEstablishmentDetails.js
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

Ext.define('MEC_App.view.MyEstablishmentDetails', {
    extend: 'Ext.Panel',
    alias: 'widget.MyEstablishmentDetails',

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
        itemId: 'MyEstablishmentDetails',
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
                        itemId: 'titlebar1',
                        title: 'بيانات المنشاة',
                        titleAlign: 'right',
                        listeners: [
                            {
                                fn: function(element, eOpts) {
                                    Ext.AnimationHelper.HandleShowHidePanel(element,'pnlData-c1');

                                },
                                event: 'painted'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        cls: 'acc-group',
                        id: 'pnlData-c1',
                        itemId: 'pnlData',
                        items: [
                            {
                                xtype: 'label',
                                html: 'اسم المنشأة بالغة العربية',
                                itemId: 'lbl6'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'establishmentArabicName'
                            },
                            {
                                xtype: 'label',
                                html: 'اسم المنشأة باللغة الإنجليزية',
                                itemId: 'lbl5'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'establishmentEnglishName'
                            },
                            {
                                xtype: 'label',
                                html: 'راس مال الشركة',
                                itemId: 'lbl7'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'companyCapital'
                            },
                            {
                                xtype: 'label',
                                html: 'حالة المنشاة',
                                itemId: 'lbl14'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'establishmentStatus'
                            },
                            {
                                xtype: 'label',
                                html: 'الشكل القانوني',
                                itemId: 'lbl13'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'establishmentLegalForm'
                            },
                            {
                                xtype: 'label',
                                html: 'نوع المنشاة',
                                itemId: 'lbl12'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'establishmentType'
                            },
                            {
                                xtype: 'label',
                                html: 'رقم قيد المنشأة',
                                itemId: 'lbl15'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'establishmentRegNumber'
                            },
                            {
                                xtype: 'label',
                                html: ' رقم السجل التجاري',
                                itemId: 'lbl1'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                html: ' ',
                                itemId: 'commercialRegistration'
                            },
                            {
                                xtype: 'label',
                                html: 'تاريخ إنشاء السجل',
                                itemId: 'lbl2'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'commercialRegistrationIssueDate'
                            },
                            {
                                xtype: 'label',
                                html: 'تاريخ التاسيس',
                                itemId: 'lbl11'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'establishmentDate'
                            },
                            {
                                xtype: 'label',
                                html: 'تاريخ إنتهاء السجل',
                                itemId: 'lbl3'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'commercialRegistrationExpiryDate'
                            },
                            {
                                xtype: 'label',
                                html: 'حالة السجل التجاري',
                                itemId: 'lbl4'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'commercialRegistrationStatus'
                            },
                            {
                                xtype: 'label',
                                html: 'رقم الرخصة التجارية',
                                itemId: 'lbl8'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'commercialPermit'
                            },
                            {
                                xtype: 'label',
                                html: 'تاريخ انتهاء الرخصة التجارية',
                                itemId: 'lbl10'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'commercialPermitExpiryDate'
                            },
                            {
                                xtype: 'label',
                                html: 'حالة الرخصة التجارية',
                                itemId: 'lbl9'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'commercialPermitStatus'
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
                        itemId: 'titlebar2',
                        title: 'الانشطة التجارية',
                        titleAlign: 'right',
                        listeners: [
                            {
                                fn: function(element, eOpts) {
                                    Ext.AnimationHelper.HandleShowHidePanel(element,'lstBizActivities-c1');

                                },
                                event: 'painted'
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        id: 'lstBizActivities-c1',
                        itemId: 'lstBizActivities',
                        itemTpl: [
                            '<div>{businessActivityName}</div>'
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
                        itemId: 'titlebar3',
                        title: 'الفروع',
                        titleAlign: 'right',
                        listeners: [
                            {
                                fn: function(element, eOpts) {
                                    Ext.AnimationHelper.HandleShowHidePanel(element,'lstBranches-c1');

                                },
                                event: 'painted'
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        id: 'lstBranches-c1',
                        itemId: 'lstBranches',
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
            },
            {
                xtype: 'panel',
                cls: 'acc-container',
                itemId: 'Partners',
                items: [
                    {
                        xtype: 'titlebar',
                        cls: 'acc-header',
                        docked: 'top',
                        itemId: 'titlebar4',
                        title: 'الشركاء',
                        titleAlign: 'right',
                        listeners: [
                            {
                                fn: function(element, eOpts) {
                                    Ext.AnimationHelper.HandleShowHidePanel(element,'lstPartners-C1');

                                },
                                event: 'painted'
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        id: 'lstPartners-C1',
                        itemId: 'lstPartners',
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
                        itemId: 'titlebar4',
                        title: 'المخولين بالتوقيع',
                        titleAlign: 'right',
                        listeners: [
                            {
                                fn: function(element, eOpts) {
                                    Ext.AnimationHelper.HandleShowHidePanel(element,'lstSignatories-c1');

                                },
                                event: 'painted'
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        id: 'lstSignatories-c1',
                        itemId: 'lstSignatories',
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
    }

});