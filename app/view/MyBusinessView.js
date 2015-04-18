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
        cls: 'complaint-view',
        itemId: 'MyBusinessView',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                html: 'بياناتي الخاصة'
            },
            {
                xtype: 'list',
                itemId: 'lstMyCompanies',
                itemCls: 'item-company',
                itemTpl: [
                    '    <div class=\'tpl-signatory-1\'>{fullNameARA}</div>',
                    '    <div class=\'tpl-signatory-2\'><span class=\'FA\'>{type}</span> <span class=\'FB\'>{nationality}</span></div>',
                    ''
                ]
            }
        ]
    }

});