/*
 * File: app/controller/ViolationsController.js
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

Ext.define('MEC_App.controller.ViolationsController', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            "panel#ViolationsView": {
                initialize: 'onViolationsViewInitialize'
            },
            "panel#ViolationsDetailsView": {
                initialize: 'onViolationsDetailsViewInitialize'
            },
            "list#lstViolations": {
                itemtap: 'onLstViolationsItemTap'
            }
        }
    },

    onViolationsViewInitialize: function(component, eOpts) {
        var view = component;//me.getMyBusinessView();


        Ext.Localization.LocalizeView(view);

        Ext.AnimationHelper.ShowLoading();




        var me = this;

        Ext.Ajax.request({

            url : Ext.Global.GetConfig('CMSWSUrl')+ '/Violation/GetAllViolations?culture='+Ext.Global.LanguageFlag+'&pageSize=20&pageIndex=0',
            method : 'Get',
            success : function (response) {

                var json = Ext.util.JSON.decode(response.responseText);

                console.log(json);


                var store = new Ext.data.Store({
                    data : json
                });

                var lstViolations = view.down('#lstViolations');
                lstViolations.setStore(store);

                Ext.AnimationHelper.HideLoading();
            }
        });

    },

    onViolationsDetailsViewInitialize: function(component, eOpts) {
        var view = component;
        Ext.Localization.LocalizeView(view);


        var data = view.getData();
        view.down('#lblCompanyName').setHtml(data.CompanyName);
        view.down('#lblViolation').setHtml(data.Violations);
        view.down('#lblPunishment').setHtml(data.Punishment);
        view.down('#lblDecisionNumber').setHtml(data.DecisionNumber);
        view.down('#imgDetails').setSrc( Ext.Global.GetConfig('CMSWSUrl') + '/Violation/Image/'+data.Id);//.setSrc(this.getData().NewsImgUrl);

    },

    onLstViolationsItemTap: function(dataview, index, target, record, e, eOpts) {
        dataview.up('MainNavView').push({
            xtype: 'ViolationsDetailsView',
            title: Ext.Global.GetFixedTitle(),
            data: record.data

        });
    }

});