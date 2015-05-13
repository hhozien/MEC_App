/*
 * File: app/view/EconomicIndicatorsBrief.js
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

Ext.define('MEC_App.view.EconomicIndicatorsBrief', {
    extend: 'Ext.Panel',
    alias: 'widget.EconomicIndicatorsBrief',

    requires: [
        'Ext.Panel',
        'Ext.Label'
    ],

    config: {
        cls: 'rtl',
        itemId: 'EconomicIndicatorsBrief',
        layout: 'vbox',
        scrollable: {
            direction: 'vertical',
            directionlock: true
        },
        items: [
            {
                xtype: 'panel',
                cls: [
                    'ind-details-item',
                    'ctr'
                ],
                items: [
                    {
                        xtype: 'label',
                        cls: 'ind-details-title2',
                        html: 'Title',
                        itemId: 'lblTitle'
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'ind-details-item',
                items: [
                    {
                        xtype: 'label',
                        cls: 'ind-details-value',
                        html: 'Test',
                        itemId: 'lblBrief'
                    }
                ]
            }
        ]
    },

    initialize: function() {

        this.callParent();

        Ext.Localization.LoadLocalization();

        Ext.Localization.LocalizeView(this);

    }

});