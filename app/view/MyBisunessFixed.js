/*
 * File: app/view/MyBisunessFixed.js
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

Ext.define('MEC_App.view.MyBisunessFixed', {
    extend: 'Ext.Panel',
    alias: 'widget.MyBisunessFixed',

    requires: [
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        itemId: 'MyBisunessFixed',
        layout: 'vbox',
        cls: [
            'complaint-view',
            'rtl'
        ],
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                docked: 'top',
                html: 'بياناتي الخاصة',
                itemId: 'lblTitle'
            },
            {
                xtype: 'list',
                flex: 1,
                height: '100%',
                itemId: 'lstEstablishments',
                itemCls: 'item-request',
                itemTpl: Ext.create('Ext.XTemplate', 
                    '    <div class=\'tpl-signatory-1\'>{[this.CheckLang(values.establishmentArabicName, values.establishmentEnglishName)]}</div>',
                    '    <div class=\'tpl-signatory-2\'><span class=\'FA\'>{[this.CheckCrName()]} {commercialRegistration}</span> <span class=\'FB\'>{companyStatus}</span></div>',
                    '',
                    {
                        CheckLang: function(ar, en) {
                            if(Ext.Global.LanguageFlag=='ar')
                            return ar;
                            else
                            return en;

                        },
                        CheckCrName: function() {
                            if(Ext.Global.LanguageFlag=='ar')
                            return 'سجل تجاري:';
                            else
                            return 'CR:';
                        }
                    }
                )
            }
        ],
        listeners: [
            {
                fn: 'onLstItemTap',
                event: 'itemtap',
                delegate: '#lstEstablishments'
            }
        ]
    },

    onLstItemTap: function(dataview, index, target, record, e, eOpts) {


        var cr = record.data.commercialRegistration;
        var cp = record.data.commercialPermit;



        if(cr==='' && cp===''){


            Ext.device.Notification.show({
                title: Ext.Localization.GetMessage('Error'),
                buttons: [Ext.Localization.GetMessage('OK')],
                message:  Ext.Localization.GetMessage('ErrNocrcp')
            });


        }else{



        dataview.up('MainNavView').push({
            xtype: 'MyEstablishmentDetails',
            title: Ext.Global.GetFixedTitle(),
            data: record.data

        });

        }

    },

    initialize: function() {
        this.callParent();




        var view = this;

        Ext.Localization.LocalizeView(view);


        Ext.AnimationHelper.ShowLoading();



        var requestData = {
            "serviceId": "2",
            "token": Ext.Global.userToken,
            "language": Ext.Global.LanguageFlag,
            "identityType":Ext.Global.identityTypeCode,//'QID', //Ext.Global.identityType,
            "identityNum": Ext.Global.identityNum,
            "identityNationality":  Ext.Global.identityNationality
        };

        //console.log(requestData);


        var me = this;

        Ext.Ajax.request({

            url : Ext.Global.GetConfig('webServiceUrl'),
            method : 'POST',
            jsonData :requestData,
            success : function (response) {



                Ext.AnimationHelper.HideLoading();

                var json = Ext.util.JSON.decode(response.responseText);

                //Companies




                if(json.listOfPrimaryEstablishment.primaryEstablishment.length>0)
                {

                    var storeCompanies = new Ext.data.Store({
                        data : json.listOfPrimaryEstablishment.primaryEstablishment
                    });


                    var lstComapnies = view.down('#lstEstablishments');
                    //lstComapnies.refresh();
                    lstComapnies.setStore(storeCompanies);


                }else{


                    Ext.device.Notification.show({
                        title: Ext.Localization.GetMessage('Error'),
                        buttons:[Ext.Localization.GetMessage('OK')],
                        message: Ext.Localization.GetMessage('NoData')
                    });

                }



                /*

                var lstComapnies = view.add({
                        xtype: 'list',
                        //flex: 1,
                        height: '100px',
                        itemId: 'lstMyCompanies',
                        itemCls: 'item-company',
                        itemTpl: [
                            '    <div class=\'tpl-signatory-1\'>{establishmentArabicName}</div>',
                            '    <div class=\'tpl-signatory-2\'><span class=\'FA\'>سجل تجاري: {commercialRegistration}</span> <span class=\'FB\'>{companyStatus}</span></div>',
                            ''
                        ],
                        onItemDisclosure: false
                    });

        */




            }
        });

    }

});