/*
 * File: app/view/MainNavView.js
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

Ext.define('MEC_App.view.MainNavView', {
    extend: 'Ext.navigation.View',
    alias: 'widget.MainNavView',

    requires: [
        'Ext.Panel',
        'Ext.Label',
        'Ext.Button',
        'Ext.Menu'
    ],

    config: {
        cls: 'home-wrapper',
        fullscreen: true,
        itemId: 'mainNav',
        scrollable: false,
        defaultBackButtonText: ' ',
        items: [
            {
                xtype: 'panel',
                title: 'الريئيسية',
                itemId: 'mypanel',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'panel',
                        flex: 1,
                        cls: 'home-header',
                        html: '<div class="header-text-bg"><b>اخبار عامّة اخبار عامّة اخبار عامّة</b><br />اخبار عامّة اخبار عامّة  </div>'
                    },
                    {
                        xtype: 'panel',
                        flex: 2,
                        cls: 'home-btns',
                        layout: 'vbox',
                        items: [
                            {
                                xtype: 'panel',
                                flex: 1,
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        cls: 'btn-services',
                                        layout: 'vbox',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                flex: 2,
                                                cls: 'services'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'الخدمات العامة'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'homeServices',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                text: ''
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        cls: 'btn-news',
                                        layout: 'vbox',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                flex: 2,
                                                cls: 'media'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'المركز الاعلامي'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'homeNews',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                text: ''
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                flex: 1,
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        cls: 'btn-reports',
                                        layout: 'vbox',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                flex: 2,
                                                cls: 'inquiries'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'الاستعلامات والاصدارات '
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'homeInquire',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                text: ''
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        cls: 'btn-inquire',
                                        itemId: 'mypanel18',
                                        layout: 'vbox',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                flex: 2,
                                                cls: 'reports'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'المؤشرات والتقارير'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'homeReports',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                text: ''
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                xtype: 'panel',
                                flex: 1,
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        cls: 'btn-projects',
                                        itemId: 'homeProjects',
                                        layout: 'vbox',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                flex: 2,
                                                cls: 'projects'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'المبادرات والمشاريع'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'homeProjects',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                text: ''
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'panel',
                                        flex: 1,
                                        cls: 'btn-contact',
                                        itemId: 'homeeContact',
                                        layout: 'vbox',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                flex: 2,
                                                cls: 'contact'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'التواصل'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'homeeContact',
                                                left: 0,
                                                right: 0,
                                                top: 0,
                                                text: ''
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();


        //var me = this;
        var theMenu = Ext.create('MEC_App.view.SideMenu');


              Ext.Viewport.setMenu(theMenu,{
                  side: 'right',
                  reveal: false,
                  cover: false
               });



        Ext.ComponentQuery.query('MainNavView')[0].getNavigationBar().add({
            xtype:'button',
            iconCls: 'list',
            align:'right',
            handler: function(){



                //Ext.Viewport.setActiveItem({xtype:'SideMenuView'});


                //var theMenu = me.createMenu();

        Ext.Viewport.toggleMenu('right');




        }


        });

        Ext.Viewport.bodyElement.on('swipe', function (event, node, options){
            if (event.direction == 'left' && theMenu.isHidden()) {
                Ext.Viewport.showMenu('right');
            } else {
                if (theMenu.isHidden()) {
                    Ext.Viewport.getActiveItem().getNavigationBar().getBackButton().fireAction('tap');
                }

            }

        });


    }

});