/*
 * File: app/view/ProjectDetailsView.js
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

Ext.define('MEC_App.view.ProjectDetailsView', {
    extend: 'Ext.Panel',
    alias: 'widget.ProjectDetailsView',

    requires: [
        'Ext.Img',
        'Ext.Panel',
        'Ext.Label'
    ],

    config: {
        cls: 'rtl',
        itemId: 'ProjectDetailsView',
        layout: 'vbox',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [
            {
                xtype: 'image',
                cls: 'img',
                height: 201,
                itemId: 'imgDetails'
            },
            {
                xtype: 'panel',
                cls: 'text-panel',
                items: [
                    {
                        xtype: 'label',
                        cls: 'recall-label-1',
                        html: 'اسم المبادرة',
                        itemId: 'InitiativeName'
                    },
                    {
                        xtype: 'label',
                        cls: 'text-container2',
                        html: '',
                        itemId: 'lblTitle'
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'text-panel',
                items: [
                    {
                        xtype: 'label',
                        cls: 'project-label-1',
                        html: 'عن المبادرة',
                        itemId: 'AboutInitiative'
                    },
                    {
                        xtype: 'label',
                        cls: 'text-container2',
                        itemId: 'lblDescription'
                    }
                ]
            },
            {
                xtype: 'panel',
                cls: 'text-panel',
                items: [
                    {
                        xtype: 'label',
                        cls: 'recall-label-3',
                        html: 'بيانات الاتصال',
                        itemId: 'ContactInfo'
                    },
                    {
                        xtype: 'label',
                        cls: 'text-container2',
                        itemId: 'lblUrl'
                    }
                ]
            }
        ]
    },

    initialize: function() {

        this.callParent();

        Ext.Localization.LoadLocalization();

        Ext.Localization.LocalizeView(this);
        /*
        var view = this;

        var contactInfo  = view.down('#lblUrl').element;

            contactInfo.on('tap', function(){
                window.open(view.down('#lblUrl').getHtml(),'_blank');
            }, contactInfo);
        */
    }

});