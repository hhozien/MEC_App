/*
 * File: app/view/PrintOffsView1.js
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

Ext.define('MEC_App.view.PrintOffsView1', {
    extend: 'Ext.form.Panel',
    alias: 'widget.PrintOffsView1',

    requires: [
        'Ext.Label',
        'Ext.form.FieldSet',
        'Ext.field.Hidden',
        'Ext.field.Spinner',
        'Ext.Button'
    ],

    config: {
        cls: 'complaint-view',
        id: 'PrintOffsView1',
        itemId: 'PrintOffsView1',
        layout: 'vbox',
        enableSubmissionForm: false,
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                html: 'طلب مستخرجات',
                itemId: 'lblTitle'
            },
            {
                xtype: 'fieldset',
                flex: 1,
                itemId: 'fsForm',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                items: [
                    {
                        xtype: 'textfield',
                        itemId: 'txtPrintoutType',
                        label: 'نوع المستخرج',
                        name: 'txtPrintoutType',
                        placeHolder: 'نوع المستخرج',
                        readOnly: true,
                        listeners: [
                            {
                                fn: function(component, eOpts) {

                                    // Create Native drop down
                                    var me = this;

                                    me.element.on('tap', function(){

                                        var btn = this;
                                        var config = {
                                            title: Ext.Localization.GetMessage('PrintType'),
                                            items: [

                                            { text: Ext.Localization.GetMessage('PrintType1') , value: "51" },
                                            { text: Ext.Localization.GetMessage('PrintType2'), value: "52" },
                                            { text: Ext.Localization.GetMessage('PrintType3'), value: "53" },
                                            { text: Ext.Localization.GetMessage('PrintType4'), value: "50" }

                                            ],
                                            doneButtonLabel: Ext.Localization.GetMessage('Choose'),
                                            cancelButtonLabel: Ext.Localization.GetMessage('Cancel')
                                        };

                                        var hiddenPrintType = Ext.ComponentQuery.query("#hiddenPrintoutType")[0];

                                        //    Ext.DeviceController.ShowNativePickerWithValue(me,hiddenPrintType, config);




                                        // Show the picker
                                        window.plugins.listpicker.showPicker(config,
                                        //select item
                                        function(selectedValue) {

                                            hiddenPrintType.setValue(selectedValue);

                                            Ext.each(config.items, function(item){

                                                if(item.value==selectedValue){
                                                    txtField.setValue(item.text);
                                                }
                                            });



                                        },
                                        //cancel
                                        function() {}
                                        );















                                    }, me);







                                },
                                event: 'initialize'
                            }
                        ]
                    },
                    {
                        xtype: 'textfield',
                        itemId: 'companyName',
                        label: 'اسم الشركة',
                        name: 'companyName',
                        required: true,
                        placeHolder: 'اسم الشركة',
                        readOnly: true,
                        listeners: [
                            {
                                fn: function(component, eOpts) {

                                    // Create Native drop down
                                    var me = this;



                                    me.element.on('tap', function(){


                                        var data = me.up('PrintOffsView1').getData();



                                        var items = [];

                                        Ext.each(data, function(item){

                                            if(Ext.Global.LanguageFlag=='ar')
                                            items.push({ text: item.establishmentArabicName, value: item.commercialRegistration });
                                            else
                                            items.push({ text: item.establishmentEnglishName, value: item.commercialRegistration });
                                        });




                                        var btn = this;
                                        var config = {
                                            title: Ext.Localization.GetMessage('EstName'),
                                            items: items,
                                            doneButtonLabel: Ext.Localization.GetMessage('Choose'),
                                            cancelButtonLabel: Ext.Localization.GetMessage('Cancel')
                                        };


                                        var hiddenCompanyCR = Ext.ComponentQuery.query("#hiddenCompanyCR")[0];

                                        Ext.DeviceController.ShowNativePickerWithValue(me, hiddenCompanyCR,config);


                                    }, me);


                                },
                                event: 'initialize'
                            }
                        ]
                    },
                    {
                        xtype: 'hiddenfield',
                        itemId: 'hiddenCompanyCR',
                        name: 'hiddenCompanyCR',
                        value: 21
                    },
                    {
                        xtype: 'hiddenfield',
                        itemId: 'hiddenPrintoutType',
                        name: 'hiddenPrintoutType',
                        value: 52
                    },
                    {
                        xtype: 'textfield',
                        hidden: false,
                        itemId: 'txtDeliveryMethod',
                        label: 'طريقة الاستلام',
                        name: 'txtDeliveryMethod',
                        placeHolder: 'طريقة الاستلام',
                        readOnly: true,
                        listeners: [
                            {
                                fn: function(component, eOpts) {

                                    // add tab function on text field
                                    var me = this;
                                    me.element.on('tap', function(){

                                        var btn = this;
                                        var config = {
                                            title: Ext.Localization.GetMessage('DeliveryMethod') ,
                                            items: [
                                            { text: Ext.Localization.GetMessage('Personal') , value: "1" },
                                            { text: Ext.Localization.GetMessage('Email'), value: "3" }


                                            ],
                                            selectedValue: "",
                                            doneButtonLabel: Ext.Localization.GetMessage('Choose'),
                                            cancelButtonLabel: Ext.Localization.GetMessage('Cancel')
                                        };


                                        var hiddenDeliveryMethod = Ext.ComponentQuery.query("#hiddenDeliveryMethod")[0];

                                        Ext.DeviceController.ShowNativePickerWithValue(me,hiddenDeliveryMethod, config);


                                    }, me);



                                },
                                event: 'initialize'
                            }
                        ]
                    },
                    {
                        xtype: 'hiddenfield',
                        itemId: 'hiddenDeliveryMethod',
                        name: 'hiddenDeliveryMethod',
                        value: 01
                    },
                    {
                        xtype: 'spinnerfield',
                        itemId: 'txtNoOfCopies',
                        label: 'عدد النسخ',
                        name: 'txtNoOfCopies',
                        maxValue: 10,
                        minValue: 1,
                        stepValue: 1
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {

                            // Create Case with Form Values


                            // validation

                            var view = button.up('PrintOffsView1'); //this.getPrintOffsView1();


                            var formData = view.getValues();


                            console.log(formData);


                            var err='';


                            if(formData.hiddenCompanyCR===''){

                                err+="برجاء اختيار الشركة \n";
                            }



                            if(formData.hiddenPrintoutType===''){

                                err+="برجاء اختيار طريقة الاستلام";
                            }


                            if(formData.txtNoOfCopies===''){

                                err+="برجاء اختيار عدد النسخ";
                            }





                            if(err.length>0){
                                navigator.vibrate(300);

                                Ext.device.Notification.show({
                                    title: 'خطأ',
                                    buttons:["موافق"],
                                    message: err
                                });

                            }else{






                                Ext.AnimationHelper.ShowLoading();

                                var requestData = {
                                    "serviceId": "9",
                                    "token": Ext.Global.userToken,
                                    "language": Ext.Global.LanguageFlag,
                                    "identityType": 'QID',//Ext.Global.identityType,
                                    "identityNum": Ext.Global.identityNum,
                                    "identityNationality": Ext.Global.identityNationality,
                                    "commercialRegistrationNum":view.down('#hiddenCompanyCR').getValue(),
                                    "caseType":view.down('#hiddenPrintoutType').getValue(),
                                    "establishmentSpcId":"",
                                    "caseSubType":"01",
                                    "contactId":"",
                                    "numOfCopies":view.down('#txtNoOfCopies').getValue(),
                                    "moiEstablishmentNum":"",
                                    "qatarChamberNum":"",
                                    "commercialPermitNum":"",
                                    "economicalNum":""
                                };



                                Ext.Ajax.request({

                                    url : Ext.Global.GetConfig('webServiceUrl'),
                                    method : 'POST',
                                    jsonData :requestData,
                                    success : function (response) {
                                        var json = Ext.util.JSON.decode(response.responseText);

                                        json.NoOfCopies = view.down('#txtNoOfCopies').getValue();





                                        if(json.status==='Their is Active Cases for this account from the same case type !')
                                        {

                                            Ext.device.Notification.show({
                                                title: Ext.Localization.GetMessage('Error'),
                                                buttons: [Ext.Localization.GetMessage('OK')],
                                                message: Ext.Localization.GetMessage('ActiveRequestError')
                                            });


                                        }else{


                                            //              console.log(json);


                                            Ext.Viewport.getActiveItem().push({
                                                xtype: 'PrintOffsView2',
                                                title: Ext.Global.GetFixedTitle(),
                                                data: json
                                            });

                                        }

                                        Ext.AnimationHelper.HideLoading();
                                    }
                                });


                            }








                        },
                        cls: 'btn-send',
                        itemId: 'btnPrintoffsNext',
                        text: 'التالي'
                    }
                ]
            }
        ]
    },

    initialize: function() {
        Ext.Localization.LocalizeView(this);




        Ext.AnimationHelper.ShowLoading();


        var requestData = {
            "serviceId": "2",
            "token": Ext.Global.userToken,
            "language": Ext.Global.LanguageFlag,
            "identityType":'QID',
            "identityNum": Ext.Global.identityNum,
            "identityNationality":  Ext.Global.identityNationality
        };


        var me = this;

        Ext.Ajax.request({

            url : Ext.Global.GetConfig('webServiceUrl'),
            method : 'POST',
            jsonData :requestData,
            success : function (response) {

                var json = Ext.util.JSON.decode(response.responseText);


                //var view = me.getPrintOffsView1();

                me.setData(json.listOfPrimaryEstablishment.primaryEstablishment);

                Ext.AnimationHelper.HideLoading();




            }
        });



        this.callParent();
    }

});