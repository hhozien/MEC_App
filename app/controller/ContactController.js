/*
 * File: app/controller/ContactController.js
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

Ext.define('MEC_App.controller.ContactController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "button#contactBtn1": {
                tap: 'onContactBtn1Tap'
            },
            "button#contactBtn2": {
                tap: 'onContactBtn2Tap'
            },
            "button#contactBtn3": {
                tap: 'onContactBtn3Tap'
            },
            "button#contactBtn4": {
                tap: 'onContactBtn4Tap'
            },
            "button#contactBtn5": {
                tap: 'onContactBtn5Tap'
            }
        }
    },

    onContactBtn1Tap: function(button, e, eOpts) {
        button.up('MainNavView').push({
                    xtype: 'BusinessIndicatorsReport',
                    title: Ext.Global.GetFixedTitle()
                });
    },

    onContactBtn2Tap: function(button, e, eOpts) {
        button.up('MainNavView').push({
                    xtype: 'BusinessIndicatorsReport',
                    title: Ext.Global.GetFixedTitle()
                });
    },

    onContactBtn3Tap: function(button, e, eOpts) {
        button.up('MainNavView').push({
                    xtype: 'BusinessIndicatorsReport',
                    title: Ext.Global.GetFixedTitle()
                });
    },

    onContactBtn4Tap: function(button, e, eOpts) {
        button.up('MainNavView').push({
            xtype: 'ContactUs2View',
            title: Ext.Global.GetFixedTitle()
        });
    },

    onContactBtn5Tap: function(button, e, eOpts) {
        button.up('MainNavView').push({
                    xtype: 'BusinessIndicatorsReport',
                    title: Ext.Global.GetFixedTitle()
                });
    }

});