/*
 * File: app/view/BusinessIndicatorsView.js
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

Ext.define('MEC_App.view.BusinessIndicatorsView', {
    extend: 'Ext.Panel',
    alias: 'widget.BusinessIndicatorsView',

    requires: [
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        itemId: 'BusinessIndicatorsView',
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
                html: 'مؤشرات اقتصادية'
            },
            {
                xtype: 'list',
                flex: 1,
                height: '100%',
                itemId: 'lstIndicators',
                itemCls: 'item-request',
                itemTpl: [
                    '    <div class=\'tpl-request-1\'>{requestCaseType}</div>',
                    '    <div class=\'tpl-request-2\'><span class=\'FA\'> {requestCaseDate}</span> <span class=\'FB\'>{requestCaseStatus}</span></div>',
                    ''
                ]
            }
        ]
    }

});