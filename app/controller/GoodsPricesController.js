/*
 * File: app/controller/GoodsPricesController.js
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

Ext.define('MEC_App.controller.GoodsPricesController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.GoodsPricesController',

    config: {
        control: {
            "container#ShopsContainer": {
                show: 'onShopsContainerShow'
            },
            "container#GoodsContainer": {
                show: 'onGoodsContainerShow'
            },
            "list#lstShops": {
                itemtap: 'onLstShopsItemTap'
            },
            "list#lstProducts": {
                itemtap: 'onLstProductsItemTap'
            }
        }
    },

    onShopsContainerShow: function(component, eOpts) {
        var view = component;



        Ext.AnimationHelper.ShowLoading();


        Ext.Ajax.request({

            url : Ext.Global.GetConfig('CMSWSUrl')+ '/Shop/GetAllShops?culture='+ Ext.Global.LanguageFlag +'&pageIndex=0&pageSize=20',
            method : 'Get',
            success : function (response) {

                var json = Ext.util.JSON.decode(response.responseText);


                var store = new Ext.data.Store({
                    data : json
                });

                var lstShops = view.down('#lstShops');
                lstShops.setStore(store);

                Ext.AnimationHelper.HideLoading();
            }
        });



    },

    onGoodsContainerShow: function(component, eOpts) {
        var view = component;

        Ext.AnimationHelper.ShowLoading();


        Ext.Ajax.request({

            url : Ext.Global.GetConfig('CMSWSUrl')+ '/Product/GetAllProducts?culture='+ Ext.Global.LanguageFlag +'&pageIndex=0&pageSize=20',
            method : 'Get',
            success : function (response) {

                var json = Ext.util.JSON.decode(response.responseText);


                var store = new Ext.data.Store({
                    data : json
                });

                var lstProducts = view.down('#lstProducts');
                lstProducts.setStore(store);

                Ext.AnimationHelper.HideLoading();
            }
        });


    },

    onLstShopsItemTap: function(dataview, index, target, record, e, eOpts) {
            /*dataview.up('MainNavView').push({
                    xtype: 'ShopPriceListView',
                    title: Ext.Global.GetFixedTitle(),
                    data: record.data

                });*/

    },

    onLstProductsItemTap: function(dataview, index, target, record, e, eOpts) {
            /*dataview.up('MainNavView').push({
                    xtype: 'GoodPriceListView',
                    title: Ext.Global.GetFixedTitle(),
                    data: record.data

                });*/

    }

});