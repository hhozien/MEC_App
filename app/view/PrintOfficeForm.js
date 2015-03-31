/*
 * File: app/view/PrintOfficeForm.js
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

Ext.define('MEC_App.view.PrintOfficeForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.printofficeform',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.Button'
    ],

    config: {
        itemId: 'form',
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Item Name',
                        name: 'ItemName'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Item View',
                        name: 'ItemView'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'saveButton',
                margin: 10,
                ui: 'action',
                text: 'Save'
            }
        ]
    }

});