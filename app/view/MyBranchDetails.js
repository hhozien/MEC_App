/*
 * File: app/view/MyBranchDetails.js
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

Ext.define('MEC_App.view.MyBranchDetails', {
    extend: 'Ext.Panel',
    alias: 'widget.MyBranchDetails',

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
        itemId: 'MyBranchDetails',
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
                        title: 'بيانات الفرع',
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
                        id: 'pnlData-c2',
                        itemId: 'pnlData',
                        items: [
                            {
                                xtype: 'label',
                                html: ' رقم السجل التجاري'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                html: ' ',
                                itemId: 'commercialRegistration'
                            },
                            {
                                xtype: 'label',
                                html: 'تاريخ التسجيل'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'commercialRegistrationIssueDate'
                            },
                            {
                                xtype: 'label',
                                html: 'تاريخ الانتهاء'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'commercialRegistrationExpiryDate'
                            },
                            {
                                xtype: 'label',
                                html: 'حالة السجل التجاري'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'commercialRegistrationStatus'
                            },
                            {
                                xtype: 'label',
                                html: 'اسم السجل التجاري بالإنجليزية'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'establishmentEnglishName'
                            },
                            {
                                xtype: 'label',
                                html: 'اسم السجل التجاري بالعربية'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'establishmentArabicName'
                            },
                            {
                                xtype: 'label',
                                html: 'راس مال الشركة'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'companyCapital'
                            },
                            {
                                xtype: 'label',
                                html: 'رقم الرخصة التجارية'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'commercialPermit'
                            },
                            {
                                xtype: 'label',
                                html: 'حالة الرخصة التجارية'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'commercialPermitStatus'
                            },
                            {
                                xtype: 'label',
                                html: 'تاريخ انتهاء الرخصة التجارية'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'commercialPermitExpiryDate'
                            },
                            {
                                xtype: 'label',
                                html: 'تاريخ التاسيس'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'establishmentDate'
                            },
                            {
                                xtype: 'label',
                                html: 'نوع المنشاة'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'establishmentType'
                            },
                            {
                                xtype: 'label',
                                html: 'الشكل القانوني'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'establishmentLegalForm'
                            },
                            {
                                xtype: 'label',
                                html: 'حالة المنشاة'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'establishmentStatus'
                            },
                            {
                                xtype: 'label',
                                html: 'رقم قيد المنشأة'
                            },
                            {
                                xtype: 'label',
                                cls: 'label-value',
                                itemId: 'establishmentRegNumber'
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
                        id: 'lstBizActivities-c2',
                        itemId: 'lstBizActivities',
                        itemTpl: [
                            '<div> {businessActivityName}</div>'
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
                        id: 'lstSignatories-c2',
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