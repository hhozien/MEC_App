/*
 * File: app/view/ComplaintsView.js
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

Ext.define('MEC_App.view.ComplaintsView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.ComplaintsView',

    requires: [
        'Ext.Label',
        'Ext.form.FieldSet',
        'Ext.field.TextArea',
        'Ext.field.Email',
        'Ext.field.Number',
        'Ext.Panel',
        'Ext.Img',
        'Ext.Button',
        'Ext.device.Camera',
        'Ext.device.Notification',
        'MEC_App.controller.DeviceController'
    ],

    config: {
        cls: 'complaint-view',
        itemId: 'ComplaintsView',
        layout: 'vbox',
        enableSubmissionForm: false,
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                html: 'ابلغ عن شكوى',
                itemId: 'viewLbl'
            },
            {
                xtype: 'fieldset',
                flex: 1,
                itemId: 'frmComplaint',
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                items: [
                    {
                        xtype: 'textfield',
                        id: 'shopName',
                        itemId: 'shopName',
                        label: '',
                        labelWidth: '40%',
                        name: 'shopName',
                        required: true,
                        placeHolder: 'اسم المحل'
                    },
                    {
                        xtype: 'textfield',
                        id: 'shopLocation',
                        itemId: 'shopLocation',
                        label: '',
                        labelWidth: '40%',
                        name: 'shopLocation',
                        placeHolder: 'موقع المتجر'
                    },
                    {
                        xtype: 'textfield',
                        hidden: false,
                        id: 'txtCategory',
                        itemId: 'txtCategory',
                        labelWidth: '40%',
                        name: 'txtCategory',
                        placeHolder: 'نوع الشكوى',
                        readOnly: true,
                        listeners: [
                            {
                                fn: function(component, eOpts) {

                                    // add tab function on text field
                                    var me = this;
                                    me.element.on('tap', function(){

                                        var btn = this;
                                        var config = {
                                            title: Ext.Localization.GetMessage('ComplaintType'),
                                            items: [
                                            { text: Ext.Localization.GetMessage('ComplaintType1'), value: Ext.Localization.GetMessage('ComplaintType1') },
                                            { text: Ext.Localization.GetMessage('ComplaintType2'), value: Ext.Localization.GetMessage('ComplaintType2') },
                                            { text: Ext.Localization.GetMessage('ComplaintType3'), value: Ext.Localization.GetMessage('ComplaintType3') },
                                            { text: Ext.Localization.GetMessage('ComplaintType4'), value: Ext.Localization.GetMessage('ComplaintType4') }

                                            ],
                                            selectedValue: "1",
                                            doneButtonLabel: Ext.Localization.GetMessage('Choose'),
                                            cancelButtonLabel: Ext.Localization.GetMessage('Cancel')
                                        };

                                        Ext.DeviceController.ShowNativePicker(me,config);


                                    }, me);



                                },
                                event: 'initialize'
                            }
                        ]
                    },
                    {
                        xtype: 'textareafield',
                        id: 'txtComplaint',
                        itemId: 'txtComplaint',
                        label: '',
                        labelWidth: '40%',
                        name: 'txtComplaint',
                        required: true,
                        placeHolder: 'نص الشكوى'
                    },
                    {
                        xtype: 'textfield',
                        id: 'fullName',
                        itemId: 'fullName',
                        label: '',
                        labelWidth: '40%',
                        name: 'fullName',
                        required: true,
                        placeHolder: 'الاسم بالكامل'
                    },
                    {
                        xtype: 'emailfield',
                        id: 'email',
                        itemId: 'email',
                        label: '',
                        labelWidth: '40%',
                        name: 'email',
                        placeHolder: 'البريد الالكتروني'
                    },
                    {
                        xtype: 'numberfield',
                        id: 'mobile',
                        itemId: 'mobile',
                        component: {
                            type: 'tel'
                        },
                        label: '',
                        labelWidth: '40%',
                        name: 'mobile',
                        required: true,
                        placeHolder: 'رقم الهاتف'
                    },
                    {
                        xtype: 'textfield',
                        hidden: false,
                        id: 'txtBarCode',
                        itemId: 'mytextfield',
                        label: '',
                        labelWidth: '40%',
                        name: 'txtBarCode',
                        placeHolder: 'barcode',
                        readOnly: true,
                        listeners: [
                            {
                                fn: function(component, eOpts) {
                                    // add tab function on text field
                                    var me = this;
                                    me.element.on('tap', function(){


                                        Ext.DeviceController.GetBarcode(me);


                                    }, me);

                                },
                                event: 'initialize'
                            }
                        ]
                    },
                    {
                        xtype: 'label',
                        html: 'ارفق صورة',
                        id: 'lblAttachImage',
                        itemId: 'lblAttachImage'
                    },
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'image',
                                flex: 1,
                                height: 120,
                                hidden: false,
                                id: 'img1',
                                itemId: 'img1',
                                src: 'resources/images/attach-default.png'
                            },
                            {
                                xtype: 'image',
                                flex: 1,
                                hidden: false,
                                id: 'img2',
                                itemId: 'img2',
                                src: 'resources/images/attach-default.png'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'image',
                                flex: 1,
                                height: 120,
                                id: 'img3',
                                itemId: 'img3',
                                src: 'resources/images/attach-default.png'
                            },
                            {
                                xtype: 'image',
                                flex: 1,
                                height: 120,
                                id: 'img4',
                                itemId: 'img4',
                                width: 200,
                                src: 'resources/images/attach-default.png'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {

                            var frm = button.up('ComplaintsView');



                            //alert(frm.getValues().shopName);
                            var formData =frm.getValues();


                            var err='';

                            if(formData.shopName===''){

                                err+=Ext.Localization.GetMessage('errShopName');
                            }


                            //if(formData.txtCategory===''){

                            //    err+=Ext.Global.GetValidationMsg('errComplaintType');
                            //}



                            if(formData.txtComplaint===''){

                                err+=Ext.Localization.GetMessage('errComplaintText');
                            }



                            if(formData.fullName===''){

                                err+=Ext.Localization.GetMessage('errFullName');
                            }


                            if(formData.mobile===null){

                                err+=Ext.Localization.GetMessage('errMobile');
                            }




                            if(err.length>0){

                                Ext.device.Notification.show({
                                    title: Ext.Localization.GetMessage('Error'),
                                    buttons:[Ext.Localization.GetMessage('OK')],
                                    message: err
                                });
                            }else{



                                //    try{




                                Ext.AnimationHelper.ShowLoading();


                                var img1 = frm.down('#img1');
                                var img2 = frm.down('#img2');
                                var img3 = frm.down('#img3');
                                var img4 = frm.down('#img4');


                                //send mail

                                var requestData = {
                                    "shopName": formData.shopName,
                                    "shopLocation": formData.shopLocation,
                                    "complaint": formData.txtComplaint,
                                    "email":formData.email,
                                    "barcode":formData.txtBarCode,
                                    "fullName":formData.fullName,
                                    "mobile":formData.mobile,
                                    "identityNationality":  Ext.Global.identityNationality,
                                    "img1": img1.getSrc(),
                                    "img2": img2.getSrc(),
                                    "img3": img3.getSrc(),
                                    "img4": img4.getSrc()
                                };



                                var me = this;

                                var url =  Ext.Global.GetConfig('CMSWSUrlEmails') +'/SendComplaint';



                                Ext.Ajax.request({

                                    url : url,
                                    method : 'POST',
                                    jsonData :requestData,
                                    success : function (response) {

                                        Ext.AnimationHelper.HideLoading();


                                        Ext.device.Notification.show({
                                            title: Ext.Localization.GetMessage('Message'),
                                            buttons:[Ext.Localization.GetMessage('OK')],
                                            message: Ext.Localization.GetMessage('ComplaintsConfirmation'),
                                            callback: function(button) {

                                                //return user to home page

                                                Ext.Viewport.getActiveItem().reset();

                                            }
                                        });



                                    }


                                });



                                //------------------------





                                /*
                                }catch(er){


                                Ext.AnimationHelper.HideLoading();

                                Ext.device.Notification.show({
                                title: Ext.Localization.GetMessage('Message'),
                                buttons:[Ext.Localization.GetMessage('OK')],
                                message: Ext.Localization.GetMessage('ComplaintsConfirmation'),
                                callback: function(button) {

                                //return user to home page

                                Ext.Viewport.getActiveItem().reset();

                            }
                        });





                    }

                    */


                    //==========================================




                }


                        },
                        cls: 'btn-send',
                        id: 'btnSubmitComplaint',
                        itemId: 'btnSubmitComplaint',
                        text: 'ارسال'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onImg1Tap',
                event: 'tap',
                delegate: '#img1'
            },
            {
                fn: 'onImg2Tap',
                event: 'tap',
                delegate: '#img2'
            },
            {
                fn: 'onImg3Tap',
                event: 'tap',
                delegate: '#img3'
            },
            {
                fn: 'onImg4Tap',
                event: 'tap',
                delegate: '#img4'
            }
        ]
    },

    onImg1Tap: function(image, e, eOpts) {
                //custom class MEC_App.controller.DeviceController
                Ext.DeviceController.CaptureImage(image);


    },

    onImg2Tap: function(image, e, eOpts) {

                //custom class MEC_App.controller.DeviceController
                Ext.DeviceController.CaptureImage(image);

    },

    onImg3Tap: function(image, e, eOpts) {

                //custom class MEC_App.controller.DeviceController
                Ext.DeviceController.CaptureImage(image);

    },

    onImg4Tap: function(image, e, eOpts) {

                //custom class MEC_App.controller.DeviceController
                Ext.DeviceController.CaptureImage(image);

    },

    initialize: function() {
        this.callParent();


        this.down('#shopName').setPlaceHolder(Ext.Global.GetComplaintsTitle('shopName'))
        .setLabel(Ext.Global.GetComplaintsTitle('shopName'));


        this.down('#shopLocation').setPlaceHolder(Ext.Global.GetComplaintsTitle('shopLocation'))
        .setLabel(Ext.Global.GetComplaintsTitle('shopLocation'));

        this.down('#txtCategory').setPlaceHolder(Ext.Global.GetComplaintsTitle('ComplaintType'))
        .setLabel(Ext.Global.GetComplaintsTitle('ComplaintType'));

        this.down('#txtComplaint').setPlaceHolder(Ext.Global.GetComplaintsTitle('txtComplaint'))
        .setLabel(Ext.Global.GetComplaintsTitle('txtComplaint'));

        this.down('#fullName').setPlaceHolder(Ext.Global.GetComplaintsTitle('fullName'))
        .setLabel(Ext.Global.GetComplaintsTitle('fullName'));

        this.down('#email').setPlaceHolder(Ext.Global.GetComplaintsTitle('email'))
        .setLabel(Ext.Global.GetComplaintsTitle('email'));

        this.down('#mobile').setPlaceHolder(Ext.Global.GetComplaintsTitle('mobile'))
        .setLabel(Ext.Global.GetComplaintsTitle('mobile'));


        this.down('#txtBarCode').setPlaceHolder(Ext.Global.GetComplaintsTitle('barcode'))
        .setLabel(Ext.Global.GetComplaintsTitle('barcode'));


        this.down('#lblAttachImage').setHtml(Ext.Global.GetComplaintsTitle('AttachImg'));

        this.down('#btnSubmitComplaint').setText(Ext.Global.GetComplaintsTitle('Submit'));


        Ext.Localization.LoadLocalization();

        Ext.Localization.LocalizeView(this);

    }

});