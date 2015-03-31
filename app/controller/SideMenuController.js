/*
 * File: app/controller/SideMenuController.js
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

Ext.define('MEC_App.controller.SideMenuController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "button#btnServices": {
                tap: 'onBtnServicesTap'
            },
            "button#btnHome": {
                tap: 'onBtnHomeTap'
            },
            "button#btnMedai": {
                tap: 'onBtnMedaiTap'
            },
            "button#btnInquiry": {
                tap: 'onBtnInquiryTap'
            },
            "button#btnContact": {
                tap: 'onBtnContactTap'
            },
            "button#btnProjects": {
                tap: 'onBtnProjectsTap'
            },
            "button#btnReports": {
                tap: 'onBtnReportsTap'
            },
            "button#btnSettings": {
                tap: 'onBtnSettingsTap'
            },
            "button#btnLogin": {
                tap: 'onBtnLoginTap'
            },
            "image#imgHome": {
                tap: 'onImgHomeTap'
            }
        }
    },

    onBtnServicesTap: function(button, e, eOpts) {

        Ext.Viewport.toggleMenu('right');


        Ext.Viewport.getActiveItem().push({
            xtype: 'PublicServiceView',
            title: Ext.Global.GetViewTitle('PublicServices')
        });



    },

    onBtnHomeTap: function(button, e, eOpts) {
        Ext.Viewport.toggleMenu('right');


        Ext.Viewport.getActiveItem().reset();





    },

    onBtnMedaiTap: function(button, e, eOpts) {

        Ext.Viewport.toggleMenu('right');


        Ext.Viewport.getActiveItem().push({
            xtype: 'MediaCenterView',
            title: Ext.Global.GetViewTitle('MediaCenter')
        });


    },

    onBtnInquiryTap: function(button, e, eOpts) {
         Ext.Viewport.toggleMenu('right');


                Ext.Viewport.getActiveItem().push({
                    xtype: 'InquiriesView',
                    title: Ext.Global.GetViewTitle('Inquiries')
                });



    },

    onBtnContactTap: function(button, e, eOpts) {
           Ext.Viewport.toggleMenu('right');


                        Ext.Viewport.getActiveItem().push({
                            xtype: 'InquiriesView',
                            title:  Ext.Global.GetViewTitle('Inquiries')
                        });


    },

    onBtnProjectsTap: function(button, e, eOpts) {
          Ext.Viewport.toggleMenu('right');


                                Ext.Viewport.getActiveItem().push({
                                    xtype: 'ProjectsView',
                                    title: Ext.Global.GetViewTitle('Projects')
                                });
    },

    onBtnReportsTap: function(button, e, eOpts) {
                Ext.Viewport.toggleMenu('right');


                                        Ext.Viewport.getActiveItem().push({
                                            xtype: 'ReportsView',
                                            title:  Ext.Global.GetViewTitle('Reports')
                                        });


    },

    onBtnSettingsTap: function(button, e, eOpts) {
         Ext.Viewport.toggleMenu('right');


                                                Ext.Viewport.getActiveItem().push({
                                                    xtype: 'SettingsView',
                                                    title: Ext.Global.GetViewTitle('Settings')
                                                });



    },

    onBtnLoginTap: function(button, e, eOpts) {
               Ext.Viewport.toggleMenu('right');


                                                        Ext.Viewport.getActiveItem().push({
                                                            xtype: 'LogivFormView',
                                                            title:  Ext.Global.GetViewTitle('LogivForm')
                                                        });


    },

    onImgHomeTap: function(image, e, eOpts) {
        Ext.Viewport.toggleMenu('right');
        Ext.Viewport.getActiveItem().reset();
    }

});