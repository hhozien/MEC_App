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
        'Ext.carousel.Carousel',
        'Ext.Spacer',
        'Ext.Label',
        'Ext.Button',
        'Ext.Menu',
        'MEC_App.controller.Localization',
        'Ext.data.proxy.JsonP'
    ],

    config: {
        cls: 'home-wrapper',
        fullscreen: true,
        itemId: 'MainNavView',
        defaultBackButtonText: ' ',
        items: [
            {
                xtype: 'panel',
                title: '<img src="resources/images/toplogo.png" />',
                id: 'pnlMain',
                itemId: 'pnlMain',
                layout: 'vbox',
                items: [
                    {
                        xtype: 'carousel',
                        flex: 1,
                        cls: 'home-carousel',
                        itemId: 'NewsCarousel',
                        indicator: false,
                        items: [
                            {
                                xtype: 'panel',
                                cls: 'home-header',
                                itemId: 'pnlNews'
                            },
                            {
                                xtype: 'panel',
                                cls: 'home-header2',
                                itemId: 'pnlNews1'
                            },
                            {
                                xtype: 'panel',
                                cls: 'home-header3',
                                itemId: 'pnlNews2'
                            }
                        ],
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    // loaad top 3 news



                                    var me = this;

                                    Ext.Ajax.request({

                                        url : Ext.Global.GetConfig('CMSWSUrl')+ '/EconomyNews/GetAllNewsByCategory?culture='+Ext.Global.LanguageFlag+'&pageIndex=0&pageSize=3&categoryId=1',
                                        method : 'Get',
                                        success : function (response) {

                                            var json = Ext.util.JSON.decode(response.responseText);

                                            var pnlNews1 = me.down('#pnlNews');
                                            var pnlNews2 = me.down('#pnlNews1');
                                            var pnlNews3 = me.down('#pnlNews2');

                                            pnlNews1.setStyle({'background-image': 'url('+Ext.Global.GetConfig('CMSWSUrl')+'/EconomyNews/Image/'+json[0].Id +')','background-size':'cover'});
                                            pnlNews2.setStyle({'background-image': 'url('+Ext.Global.GetConfig('CMSWSUrl')+'/EconomyNews/Image/'+json[1].Id +')','background-size':'cover'});
                                            pnlNews3.setStyle({'background-image': 'url('+Ext.Global.GetConfig('CMSWSUrl')+'/EconomyNews/Image/'+json[2].Id +')','background-size':'cover'});

                                            pnlNews1.setHtml('<div class="header-text-bg">' + json[0].NewsTitle  + '</div)');
                                            pnlNews2.setHtml('<div class="header-text-bg">' + json[1].NewsTitle  + '</div)');
                                            pnlNews3.setHtml('<div class="header-text-bg">' + json[2].NewsTitle  + '</div)');



                                            pnlNews1.element.on('tap', function(){

                                                me.up('MainNavView').push({
                                                    xtype: 'NewsDetailsView',
                                                    title: Ext.Global.GetFixedTitle(),
                                                    data: json[0]
                                                });

                                            });

                                            pnlNews2.element.on('tap', function(){
                                                me.up('MainNavView').push({
                                                    xtype: 'NewsDetailsView',
                                                    title: Ext.Global.GetFixedTitle(),
                                                    data: json[1]
                                                });
                                            });

                                            pnlNews3.element.on('tap', function(){
                                                me.up('MainNavView').push({
                                                    xtype: 'NewsDetailsView',
                                                    title: Ext.Global.GetFixedTitle(),
                                                    data: json[2]
                                                });
                                            });


                                        }
                                    });


                                    var carousel = this;



                                    carousel.onDragStart = function(e){

                                        //    alert(e);

                                        return false;
                                    };





                                    setInterval(function(){
                                        carousel.next();
                                    },3500);
                                },
                                event: 'initialize'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 2,
                        cls: 'home-btns',
                        itemId: 'home-links',
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
                                                xtype: 'spacer'
                                            },
                                            {
                                                xtype: 'panel',
                                                flex: 1,
                                                cls: 'services'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'الخدمات العامة',
                                                id: 'homeServices',
                                                itemId: 'homeServices'
                                            },
                                            {
                                                xtype: 'spacer'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'homeServices1',
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
                                                xtype: 'spacer'
                                            },
                                            {
                                                xtype: 'panel',
                                                flex: 1,
                                                cls: 'media'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'المركز الاعلامي',
                                                itemId: 'btnMediaCenter'
                                            },
                                            {
                                                xtype: 'spacer'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'btnMediaCenter1',
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
                                                xtype: 'spacer'
                                            },
                                            {
                                                xtype: 'panel',
                                                flex: 1,
                                                cls: 'inquiries'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'الاستعلامات والاصدارات ',
                                                itemId: 'homeInquire'
                                            },
                                            {
                                                xtype: 'spacer'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'homeInquire1',
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
                                                xtype: 'spacer'
                                            },
                                            {
                                                xtype: 'panel',
                                                flex: 1,
                                                cls: 'reports'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'المؤشرات والتقارير',
                                                itemId: 'homeReports'
                                            },
                                            {
                                                xtype: 'spacer'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'homeReports1',
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
                                                xtype: 'spacer'
                                            },
                                            {
                                                xtype: 'panel',
                                                flex: 1,
                                                cls: 'projects'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'المبادرات والمشاريع',
                                                itemId: 'btnProjects'
                                            },
                                            {
                                                xtype: 'spacer'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'btnProjects1',
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
                                                xtype: 'spacer'
                                            },
                                            {
                                                xtype: 'panel',
                                                flex: 1,
                                                cls: 'contact'
                                            },
                                            {
                                                xtype: 'label',
                                                flex: 1,
                                                cls: 'home-icon-text',
                                                html: 'التواصل',
                                                itemId: 'homeContact'
                                            },
                                            {
                                                xtype: 'spacer'
                                            },
                                            {
                                                xtype: 'button',
                                                bottom: 0,
                                                centered: true,
                                                itemId: 'homeContact1',
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
                ],
                listeners: [
                    {
                        fn: function(element, eOpts) {
                            Ext.Viewport.getActiveItem().getNavigationBar().down('#btnNotofication').show();

                        },
                        event: 'painted'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onNewsCarouselActiveItemChange',
                event: 'activeitemchange',
                delegate: '#NewsCarousel'
            },
            {
                fn: 'onMainNavPush',
                event: 'push'
            },
            {
                fn: 'onMainNavViewActiveItemChange',
                event: 'activeitemchange'
            },
            {
                fn: 'onMainNavViewBack',
                event: 'back'
            }
        ]
    },

    onNewsCarouselActiveItemChange: function(container, value, oldValue, eOpts) {
        if(container.activeIndex == container.items.length-1) {
            setTimeout(function(){
                container.previous().previous();
            },3501);
        }
    },

    onMainNavPush: function(navigationview, view, eOpts) {
        //console.log(view);

        Ext.Viewport.getActiveItem().getNavigationBar().down('#btnNotofication').hide();

    },

    onMainNavViewActiveItemChange: function(container, value, oldValue, eOpts) {

        if(value.getId() == 'pnlMain' && oldValue.getId() == 'SettingsView') {

            Ext.Localization.LoadLocalization();
            Ext.Localization.LocalizeView(container);
            Ext.Localization.LocalizeView(Ext.Viewport.getMenus().right);

        }

    },

    onMainNavViewBack: function(navigationview, eOpts) {
        //console.log(navigationview);

        //alert(navigationview.innerItems.length);
        if(navigationview.innerItems.length>1)
        {





        if(navigationview.innerItems[navigationview.innerItems.length-2]._itemId==='LoginFomView')
            {

                //alert('123');

               // alert(navigationview.innerItems[navigationview.innerItems.length-2]._itemId);

               // navigationview.getNavigationBar().fireEvent('back',
               //      navigationview.innerItems[navigationview.innerItems.length-1]);

            }





        }

    },

    initialize: function() {
        this.callParent();


        // load Localization
        Ext.Localization.LoadLocalization();



        //Localize myself
        Ext.Localization.LocalizeView(this);








        //Create Menu
        var theMenu = Ext.create('MEC_App.view.SideMenu');
        Ext.Viewport.setMenu(theMenu,{
            side: 'right',
            reveal: false,
            cover: false
        });









        // Add menu button
        var navBar = this.getNavigationBar();
        navBar.add({
            xtype:'button',
            iconCls: 'list',
            align:'right',
            handler: function(){
                Ext.Viewport.toggleMenu('right');
            }
        });


        // Add Notification Icon
        var me = this;
        navBar.add({
            xtype:'button',
            cls: 'notify-icon',
            align:'left',
            itemId:'btnNotofication',
            handler: function(){


                Ext.Global.RedirectLoggedUser('NotificationView');


            }
        });


        navBar.setAnimation(false);


        //Localization


        //Ext.Viewport.getActiveItem().getNavigationBar().titleComponent.setTitle(Ext.Global.GetViewTitle('Home'));

        //this.down('#homeServices').setHtml(Ext.Global.GetViewTitle('PublicServices'));
        //this.down('#btnMediaCenter').setHtml(Ext.Global.GetViewTitle('MediaCenter'));
        //this.down('#homeInquire').setHtml(Ext.Global.GetViewTitle('Inquiries'));
        //this.down('#btnProjects').setHtml(Ext.Global.GetViewTitle('Projects'));
        //this.down('#homeReports').setHtml(Ext.Global.GetViewTitle('Reports'));
        //this.down('#homeContact').setHtml(Ext.Global.GetViewTitle('ContactUs'));
        //this.down('#pnlNews').setHtml(Ext.Global.GetGenericContent('HomeNews'));


        Ext.Viewport.bodyElement.on('swipe', function (event, node, options){

            //if (node.closest('.x-carousel-item')) {
                //event.stopPropagation();
            //}

            //else {
                if (event.direction == 'left' && theMenu.isHidden()) {
                    Ext.Viewport.showMenu('right');
                } else if (event.direction == 'right') {
                    if (theMenu.isHidden()) {
                        Ext.Viewport.getActiveItem().getNavigationBar().getBackButton().fireAction('tap');
                    }

                }
            //}

        });

    }

});