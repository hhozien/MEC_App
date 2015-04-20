/*
 * File: app/controller/SupplyServiceController.js
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

Ext.define('MEC_App.controller.SupplyServiceController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.SupplyServiceController',

    config: {
        refs: {
            lblFamilyCount: '#lblFamilyCount'
        },

        control: {
            "panel#SupplyServiceView1": {
                initialize: 'onSupplyServiceView1Initialize'
            },
            "button#btnSupplyNext1": {
                tap: 'onBtnSupplyNext1Tap'
            },
            "map#mapSuppliers": {
                initialize: 'onMapSuppliersInitialize'
            }
        }
    },

    onSupplyServiceView1Initialize: function(component, eOpts) {

        var url = Ext.Global.GetConfig('supplyWebServiceUrl')+ '/GetFamilyDetails';
        var requestData = {"qid":"24263400239", "languageID":"2", "mobileDeviceID":"1231"};


        Ext.AnimationHelper.ShowLoading();

        Ext.Ajax.request({

            url : url,
            method : 'POST',
            jsonData :requestData,
            success : function (response) {

                var json1 = Ext.util.JSON.decode(response.responseText);
                var json2 = Ext.util.JSON.decode(json1.d);


                Ext.ComponentQuery.query("#lblFamilyCount")[0].setHtml(json2.Data.FamilyMembers.length);

                //console.log(json2);


                //Ext.AnimationHelper.HideLoading();


            },
            failure: function(request, resp) {
                alert("in failure");
            }
        });



        ///////////////////////////



        var url2 = Ext.Global.GetConfig('supplyWebServiceUrl')+ '/GetFamilyItemDetails';
        var requestData2 = {"qid":"24263400239", "languageID":"1", "mobileDeviceID":"1231"};


        Ext.AnimationHelper.ShowLoading();

        Ext.Ajax.request({

            url : url2,
            method : 'POST',
            jsonData :requestData2,
            success : function (response) {

                var json1 = Ext.util.JSON.decode(response.responseText);
                var json2 = Ext.util.JSON.decode(json1.d);





                var store = new Ext.data.Store({
                    data : json2.Data.Items
                });

               // console.log(json2);

                var lst = Ext.getCmp('lstSuppyItems');
                lst.setStore(store);


                lst.setHeight(json2.Data.Items.length * 4 + 'em');
                lst.setScrollable(false);



                Ext.AnimationHelper.HideLoading();


            },
            failure: function(request, resp) {
                alert("in failure");
            }
        });












    },

    onBtnSupplyNext1Tap: function(button, e, eOpts) {

          Ext.Viewport.getActiveItem().push({
                    xtype: 'SupplyServiceView2',
                    title:  Ext.Global.GetFixedTitle()
                });





    },

    onMapSuppliersInitialize: function(component, eOpts) {

        var map = component.getMap();


        console.log(map.getCenter());


        var url = Ext.Global.GetConfig('supplyWebServiceUrl')+ '/GetNearbyDealers';


        var requestData =  {"qid":"24263400239", "languageID":"2",
                            "mobileDeviceID":"1231",
                            "latitude":map.getCenter().k,
                            "longtitude":map.getCenter().D};




                Ext.AnimationHelper.ShowLoading();

                Ext.Ajax.request({

                    url : url,
                    method : 'POST',
                    jsonData :requestData,
                    success : function (response) {

                        var json1 = Ext.util.JSON.decode(response.responseText);
                        var json2 = Ext.util.JSON.decode(json1.d);



                        console.log(json2);


                        //Ext.AnimationHelper.HideLoading();


                    },
                    failure: function(request, resp) {
                        alert("in failure");
                    }
                });




    }

});