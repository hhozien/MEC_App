/*
 * File: app/view/MenuModelDetails.js
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

Ext.define('MEC_App.view.MenuModelDetails', {
    extend: 'Ext.Panel',
    alias: 'widget.menumodeldetails',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        itemId: 'details',
        padding: 10,
        tpl: [
            '<div>',
            '<div><label>Item Name: </label><span>{ItemName}</span></div>',
            '<div><label>Item Icon Url: </label><span>{ItemIconURL}</span></div>',
            '<div><label>Item View: </label><span>{ItemView}</span></div>',
            '</div>'
        ]
    }

});