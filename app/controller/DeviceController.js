/*
 * File: app/controller/DeviceController.js
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

Ext.define('MEC_App.controller.DeviceController', {
    extend: 'Ext.Base',

    alternateClassName: [
        'Ext.DeviceController'
    ],
    requires: [
        'Ext.device.Camera'
    ],
    singleton: true,

    config: {
    },

    CaptureImage: function(image) {
        var options = {
            'title': 'Chose a method to add Photo',
            'buttonLabels': ['Camera', 'Library'],
            'addCancelButtonWithLabel': 'Cancel',
            'androidEnableCancelButton' : true, // default false
            'winphoneEnableCancelButton' : true // default false

        };
        // of the SocialSharing plugin (https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin)
        window.plugins.actionsheet.show(options, function(buttonIndex){
            //callback
            var captureSource = '';

            if(buttonIndex===1)captureSource='camera';
            if(buttonIndex===2)captureSource='library';


            if(captureSource!=='')
            {

                Ext.device.Camera.capture({
                    source: captureSource,
                    destination: 'file',
                    success: function(url) {
                        //show the newly captured image in a full screen Ext.Img component:
                        image.setSrc(url);



                    }
                });
            }




        });



    },

    ShowNativePicker: function(txtField, config) {

        // Show the picker
        window.plugins.listpicker.showPicker(config,
                                             //select item
                                             function(item) {

                                                 txtField.setValue(item);


                                             },
                                             //cancel
                                             function() {
                                                 //  alert("You have cancelled");
                                             }
                                            );



    },

    ShowNativePickerWithValue: function(txtField, hiddenField, config) {
        // Show the picker
        window.plugins.listpicker.showPicker(config,
                                             //select item
                                             function(selectedValue) {

                                                 hiddenField.setValue(selectedValue);

                                                 Ext.each(config.items, function(item){

                                                     if(item.value==selectedValue){
                                                         txtField.setValue(item.text);
                                                     }

                                                 });


                                             },
                                             //cancel
                                             function() {
                                                 //  alert("You have cancelled");
                                             }
                                            );





    },

    GetBarcode: function(txtField) {
        cordova.plugins.barcodeScanner.scan(
            function (result) {

                /*  alert("We got a barcode\n" +
                                        "Result: " + result.text + "\n" +
                                        "Format: " + result.format + "\n" +
                                        "Cancelled: " + result.cancelled);
                                        */

                txtField.setValue(result.text);




            },
            function (error) {
                alert("Barcode Scanning failed: " + error);
            }
        );




    },

    UploadImage: function(key, imgUrl, phone) {

        var win = function (r) {
            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            console.log("Sent = " + r.bytesSent);
        };

        var fail = function (error) {
            //alert("An error has occurred: Code = " + error.code);
            console.log("upload error source " + error.source);
            console.log("upload error target " + error.target);
        };






        var options = new FileUploadOptions();
        options.fileKey = key;
        options.fileName = imgUrl.substr(fileURL.lastIndexOf('/') + 1);
        options.mimeType = "image/jpeg";

        var params = {};
        params.Phone = phone;

        options.params = params;

        var ft = new FileTransfer();
        ft.upload(fileURL,Ext.Global.GetConfig('CMSWSUrlEmails')+'/Upload'  , win, fail, options);



    }

});