/*
 * File: app/view/ContactUs2View.js
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

Ext.define('MEC_App.view.ContactUs2View', {
    extend: 'Ext.Panel',
    alias: 'widget.ContactUs2View',

    requires: [
        'Ext.Panel',
        'Ext.Spacer',
        'Ext.Button'
    ],

    config: {
        cls: 'contact-us-view',
        layout: 'vbox',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [
            {
                xtype: 'panel',
                html: '<h2 class="contact-us">تواصل معنا</h2>'
            },
            {
                xtype: 'panel',
                html: '<ul><li><a class="call" href="tel:+97444494500">+97444494500</a></li><li><a class="call" href="tel:8005000">8005000</a></li><li><a class="mail" href="mailto:cpd@mec.gov.qa">cpd@mec.gov.qa</a></li></ul>'
            },
            {
                xtype: 'panel',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            //Ext.device.Device.openURL('https://www.youtube.com/channel/UC6g2VPwsbQ57G-Ni-N8rTVg');

                            window.open('https://www.youtube.com/channel/UC6g2VPwsbQ57G-Ni-N8rTVg','_blank','location=1');



                        },
                        cls: 'btn-youtube',
                        hidden: true,
                        itemId: 'youtube',
                        iconAlign: 'center',
                        iconCls: 'youtube'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            window.open('https://instagram.com/mec_qatar/','_system');



                        },
                        cls: 'btn-instagram',
                        itemId: 'instagram',
                        iconAlign: 'center',
                        iconCls: 'instagram'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            window.open('https://twitter.com/mec_qatar','_system');


                        },
                        cls: 'btn-twitter',
                        itemId: 'twitter',
                        iconAlign: 'center',
                        iconCls: 'twitter'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            }
        ]
    }

});