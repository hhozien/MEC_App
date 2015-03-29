/*
 * File: app/view/MenuModels.js
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

Ext.define('MEC_App.view.MenuModels', {
    extend: 'Ext.navigation.View',
    alias: 'widget.menumodels',

    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate',
        'Ext.navigation.Bar',
        'Ext.Button'
    ],

    config: {
        layout: {
            type: 'card',
            animation: 'slide'
        },
        items: [
            {
                xtype: 'list',
                title: 'MenuModels',
                itemId: 'list',
                itemTpl: [
                    '<div>',
                    '<div><label>Item Name: </label><span>{ItemName}</span></div>',
                    '<div><label>Item Icon Url: </label><span>{ItemIconURL}</span></div>',
                    '<div><label>Item View: </label><span>{ItemView}</span></div>',
                    '</div>'
                ]
            }
        ],
        navigationBar: {
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    itemId: 'addButton',
                    iconCls: 'add'
                },
                {
                    xtype: 'button',
                    hidden: true,
                    itemId: 'editButton',
                    iconCls: 'compose'
                },
                {
                    xtype: 'button',
                    hidden: true,
                    itemId: 'removeButton',
                    iconCls: 'delete'
                }
            ]
        }
    }

});