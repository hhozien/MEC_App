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
            title: 'الخدمات العامة'
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
                    title: 'الاستعلامات والاصدارات '
                });



    },

    onBtnContactTap: function(button, e, eOpts) {
           Ext.Viewport.toggleMenu('right');


                        Ext.Viewport.getActiveItem().push({
                            xtype: 'InquiriesView',
                            title: 'الاستعلامات والاصدارات '
                        });


    },

    onBtnProjectsTap: function(button, e, eOpts) {
          Ext.Viewport.toggleMenu('right');


                                Ext.Viewport.getActiveItem().push({
                                    xtype: 'ProjectsView',
                                    title: 'المبادرات والمشاريع'
                                });
    },

    onBtnReportsTap: function(button, e, eOpts) {
                Ext.Viewport.toggleMenu('right');


                                        Ext.Viewport.getActiveItem().push({
                                            xtype: 'ReportsView',
                                            title: 'المؤشرات والتقارير'
                                        });


    },

    onBtnSettingsTap: function(button, e, eOpts) {
         Ext.Viewport.toggleMenu('right');


                                                Ext.Viewport.getActiveItem().push({
                                                    xtype: 'SettingsView',
                                                    title: 'الاعدادات'
                                                });



    },

    onBtnLoginTap: function(button, e, eOpts) {
               Ext.Viewport.toggleMenu('right');


                                                        Ext.Viewport.getActiveItem().push({
                                                            xtype: 'LogivFormView',
                                                            title: 'تسجيل الدخول'
                                                        });


    },

    onImgHomeTap: function(image, e, eOpts) {
         Ext.Viewport.toggleMenu('right');
        Ext.Viewport.getActiveItem().reset();
    }

});