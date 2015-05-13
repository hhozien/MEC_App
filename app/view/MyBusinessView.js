/*
 * File: app/view/MyBusinessView.js
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

Ext.define('MEC_App.view.MyBusinessView', {
    extend: 'Ext.Panel',
    alias: 'widget.MyBusinessView',

    requires: [
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        itemId: 'MyBusinessView',
        layout: 'vbox',
        cls: [
            'complaint-view',
            'rtl'
        ],
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                docked: 'top',
                html: 'بياناتي الخاصة',
                itemId: 'lblTitle'
            },
            {
                xtype: 'list',
                height: '100%',
                hidden: false,
                itemId: 'lstMyCompanies',
                autoDestroy: false,
                itemCls: 'item-company',
                itemTpl: Ext.create('Ext.XTemplate', 
                    '    <div class=\'tpl-signatory-1\'>{[this.CheckLang(values.establishmentArabicName, values.establishmentEnglishName)]}</div>',
                    '    <div class=\'tpl-signatory-2\'><span class=\'FA\'>{[this.CheckCrName()]} {commercialRegistration}</span> <span class=\'FB\'>{companyStatus}</span></div>',
                    '',
                    {
                        CheckLang: function(ar, en) {
                            if(Ext.Global.LanguageFlag=='ar')
                            return ar;
                            else
                            return en;

                        },
                        CheckCrName: function() {
                            if(Ext.Global.LanguageFlag=='ar')
                            return 'سجل تجاري:';
                            else
                            return 'CR:';
                        }
                    }
                )
            }
        ]
    }

});