/*
 * File: app/view/PrintOffsView3.js
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

Ext.define('MEC_App.view.PrintOffsView3', {
    extend: 'Ext.Panel',
    alias: 'widget.PrintOffsView3',

    requires: [
        'Ext.Panel'
    ],

    config: {
        itemId: 'PrintOffsView3',
        layout: 'vbox',
        scrollable: false,
        items: [
            {
                xtype: 'panel',
                flex: 1,
                html: ' <iframe name="paymentframe"  width="400" height="500"  class="paymentframe" ></iframe>',
                itemId: 'pnlIframe'
            }
        ]
    }

});