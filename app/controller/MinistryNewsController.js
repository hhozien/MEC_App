/*
 * File: app/controller/MinistryNewsController.js
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

Ext.define('MEC_App.controller.MinistryNewsController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "list#MinistryNewsView": {
                initialize: 'onMinistryNewsViewInitialize',
                itemtap: 'onMinistryNewsViewItemTap'
            }
        }
    },

    onMinistryNewsViewInitialize: function(component, eOpts) {

        var data = component.getData()[0];

        //console.log(data);

        component.down('#lblTitle').setHtml(data.Title);

        this.GetNews(component,data.CatID);

    },

    onMinistryNewsViewItemTap: function(dataview, index, target, record, e, eOpts) {
        dataview.up('MainNavView').push({
            xtype: 'NewsDetailsView',
            title: Ext.Global.GetFixedTitle(),
            data: record.data

        });
    },

    GetNews: function(view, categoryID) {

        Ext.AnimationHelper.ShowLoading();


        var me = this;

        Ext.Ajax.request({

            url : Ext.Global.GetConfig('CMSWSUrl')+ '/EconomyNews/GetAllNewsByCategory?culture='+Ext.Global.LanguageFlag+'&pageIndex=0&pageSize=20&categoryId='+categoryID,
            method : 'Get',
            success : function (response) {

                var json = Ext.util.JSON.decode(response.responseText);


                var store = new Ext.data.Store({
                    data : json
                });

                view.setStore(store);


                Ext.AnimationHelper.HideLoading();
            }
        });



    }

});