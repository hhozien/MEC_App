/*
 * File: app/view/SettingsView.js
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

Ext.define('MEC_App.view.SettingsView', {
    extend: 'Ext.Panel',
    alias: 'widget.SettingsView',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'Ext.Spacer',
        'Ext.SegmentedButton',
        'Ext.Button'
    ],

    config: {
        id: 'SettingsView',
        itemId: 'SettingsView',
        layout: 'fit',
        items: [
            {
                xtype: 'panel',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'services-header',
                        height: '30%',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'panel',
                                cls: 'services-header-overlay',
                                height: '100%',
                                layout: 'vbox',
                                items: [
                                    {
                                        xtype: 'panel',
                                        flex: 2,
                                        cls: 'settings-header-icon'
                                    },
                                    {
                                        xtype: 'label',
                                        flex: 1,
                                        cls: 'service-header-title',
                                        html: 'الاإعدادات',
                                        itemId: 'viewLbl'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 2.7,
                        cls: 'inner-panel',
                        height: 'auto',
                        items: [
                            {
                                xtype: 'panel',
                                cls: 'language-button-wrapper',
                                itemId: 'ChangeButtonPanel',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'label',
                                        cls: 'language-button-title',
                                        html: 'اللغة المستخدمة',
                                        itemId: 'LanguageButtonsLabel'
                                    },
                                    {
                                        xtype: 'spacer'
                                    },
                                    {
                                        xtype: 'segmentedbutton',
                                        cls: [
                                            'ltr-cls',
                                            'language-buttons'
                                        ],
                                        itemId: 'languageButtons',
                                        items: [
                                            {
                                                xtype: 'button',
                                                itemId: 'EnglishButton',
                                                text: 'English'
                                            },
                                            {
                                                xtype: 'button',
                                                itemId: 'ArabicButton',
                                                text: 'العربية'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'label',
                                cls: 'about-text',
                                html: 'Build Number:113'
                            },
                            {
                                xtype: 'button',
                                handler: function(button, e) {

                                    var selectedLanguage = button.up('panel').down('segmentedbutton').getPressedButtons()[0].getItemId();

                                    if(selectedLanguage == 'ArabicButton') {
                                        localStorage.setItem('LanguageFlag', 'ar');
                                        Ext.Global.LanguageFlag = 'ar';
                                    }

                                    else if(selectedLanguage == 'EnglishButton') {
                                        localStorage.setItem('LanguageFlag', 'en');
                                        Ext.Global.LanguageFlag = 'en';
                                    }

                                    Ext.Viewport.getActiveItem().reset();

                                },
                                cls: 'action-button',
                                docked: 'bottom',
                                itemId: 'saveButton',
                                text: 'حفظ'
                            }
                        ]
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