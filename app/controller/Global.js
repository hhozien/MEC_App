/*
 * File: app/controller/Global.js
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

Ext.define('MEC_App.controller.Global', {
    extend: 'Ext.Base',

    alternateClassName: [
        'Ext.Global'
    ],
    singleton: true,

    config: {
    },

    LoadLocalization: function() {
                var loc = Ext.create('MEC_App.controller.LocAr');
                loc.Load(this);

    },

    GetViewTitle: function(view) {
        //return '<div class=toplogo></div>';

        return this.ViewTitles[view];
    },

    GetGenericContent: function(content) {
                return this.GenericContent[content];
    },

    GetComplaintsTitle: function(title) {
        return this.ComplaintsLabels[title];


    },

    GetValidationMsg: function(msg) {
                 return this.ValidationMsg[msg];

    },

    GetConfirmationMsg: function(msg) {
                 return this.ConfirmationMsg[msg];

    },

    GetConfig: function(key) {

        var config={

            webServiceUrl : 'https://webservicesstg.mec.gov.qa/MECBSSGateway/mecbssgw/bssgateway/accept',
            supplyWebServiceUrl: 'http://supply-staging.mec.gov.qa/mservice/mservice.svc',


            //  supplyWebServiceUrl: 'http://supply-staging.mec.gov.qa/mservice/paymentservice/mob_pay_go.aspx',

            //production
            //supplyWebServiceUrl: 'https://supply.mec.gov.qa/mservice/mservice.svc',
            //payment: https://supply.mec.gov.qa/mservice/paymentservice/...

            CMSWSUrl : 'http://cms.mec.gov.qa/CMS/api',
            SupplyServicePaymentUrl: 'http://supply-staging.mec.gov.qa/mservice/paymentservice/CS_VPC_3Party_DO_mob.aspx',

            BSSPaymentGatewayUrl: 'https://eservicesstg.mec.gov.qa/QNB_Paymentgateway/mob_pay_go.aspx'



            //        BSSPaymentGatewayUrl: 'https://services.mec.gov.qa/QNB_Paymentgateway/mob_pay_go.aspx'


        };


        return config[key];
    },

    GetFixedTitle: function() {
                return '<div class="fixed-ar-title">وزارة الاقتصاد و التجارة</div><div class="fixed-en-title">MINISTRY OF ECONOMY AND COMMERCE</div>';
    },

    LoadSessionVariables: function() {
                this.isLogged = false;
                this.userToken ='';
                this.identityType  ='';
                this.identityNum  ='';
                this.identityNationality  ='';



    },

    RedirectLoggedUser: function(view) {
        if(Ext.Global.isLogged){
            Ext.Viewport.getActiveItem().push({
                xtype: view,
                title: Ext.Global.GetFixedTitle()
            });
        }else{
            Ext.Viewport.getActiveItem().push({
                xtype: 'LoginFomView',
                title: Ext.Global.GetFixedTitle(),
                data: view
            });


        }
    },

    RedirectToView: function(viewData) {



        if (viewData.Url.indexOf('http')>-1){


            if(viewData.OpenExternalWindow){


                window.open(viewData.Url,'_system');




            }else{
                Ext.Viewport.getActiveItem().push({
                    xtype: 'WebFrameView',
                    title: Ext.Global.GetFixedTitle(),
                    data: viewData
                });

            }

        }else{

            if(viewData.RequireLogin)
            {
                Ext.Global.RedirectLoggedUser(viewData.Url);

            }else{
                Ext.Viewport.getActiveItem().push({
                    xtype: viewData.Url,
                    title: Ext.Global.GetFixedTitle()
                });
            }

        }
    },

    FormatJsonDate: function(JsonDate) {

        if(JsonDate && JsonDate!=='')
        {
            var ds = JsonDate;

            function timeconvert(ds){
                var D, dtime, T, tz, off,
                    dobj= ds.match(/(\d+)|([+-])|(\d{4})/g);
                T= parseInt(dobj[0]);
                tz= dobj[1];
                off= dobj[2];
                if(off){
                    off= (parseInt(off.substring(0, 2), 10)*3600000)+
                        (parseInt(off.substring(2), 10)*60000);
                    if(tz== '-') off*= -1;
                }
                else off= 0;
                return new Date(T+= off).toUTCString();
            }

            var date = timeconvert(JsonDate);


            var dateFormat = function () {
                var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
                    timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                    timezoneClip = /[^-+\dA-Z]/g,
                    pad = function (val, len) {
                        val = String(val);
                        len = len || 2;
                        while (val.length < len) val = "0" + val;
                        return val;
                    };

                // Regexes and supporting functions are cached through closure
                return function (date, mask, utc) {
                    var dF = dateFormat;

                    // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
                    if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
                        mask = date;
                        date = undefined;
                    }

                    // Passing date through Date applies Date.parse, if necessary
                    date = date ? new Date(date) : new Date;
                    if (isNaN(date)) throw SyntaxError("invalid date");

                    mask = String(dF.masks[mask] || mask || dF.masks["default"]);

                    // Allow setting the utc argument via the mask
                    if (mask.slice(0, 4) == "UTC:") {
                        mask = mask.slice(4);
                        utc = true;
                    }

                    var	_ = utc ? "getUTC" : "get",
                        d = date[_ + "Date"](),
                        D = date[_ + "Day"](),
                        m = date[_ + "Month"](),
                        y = date[_ + "FullYear"](),
                        H = date[_ + "Hours"](),
                        M = date[_ + "Minutes"](),
                        s = date[_ + "Seconds"](),
                        L = date[_ + "Milliseconds"](),
                        o = utc ? 0 : date.getTimezoneOffset(),
                        flags = {
                            d:    d,
                            dd:   pad(d),
                            ddd:  dF.i18n.dayNames[D],
                            dddd: dF.i18n.dayNames[D + 7],
                            m:    m + 1,
                            mm:   pad(m + 1),
                            mmm:  dF.i18n.monthNames[m],
                            mmmm: dF.i18n.monthNames[m + 12],
                            yy:   String(y).slice(2),
                            yyyy: y,
                            h:    H % 12 || 12,
                            hh:   pad(H % 12 || 12),
                            H:    H,
                            HH:   pad(H),
                            M:    M,
                            MM:   pad(M),
                            s:    s,
                            ss:   pad(s),
                            l:    pad(L, 3),
                            L:    pad(L > 99 ? Math.round(L / 10) : L),
                            t:    H < 12 ? "a"  : "p",
                            tt:   H < 12 ? "am" : "pm",
                            T:    H < 12 ? "A"  : "P",
                            TT:   H < 12 ? "AM" : "PM",
                            Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                            o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                            S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
                        };

                    return mask.replace(token, function ($0) {
                        return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
                    });
                };
            }();

            // Some common format strings
            dateFormat.masks = {
                "default":      "ddd mmm dd yyyy HH:MM:ss",
                shortDate:      "m/d/yy",
                mediumDate:     "mmm d, yyyy",
                longDate:       "mmmm d, yyyy",
                fullDate:       "dddd, mmmm d, yyyy",
                shortTime:      "h:MM TT",
                mediumTime:     "h:MM:ss TT",
                longTime:       "h:MM:ss TT Z",
                isoDate:        "yyyy-mm-dd",
                isoTime:        "HH:MM:ss",
                isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
                isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
            };

            // Internationalization strings
            dateFormat.i18n = {
                dayNames: [
                    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
                    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
                ],
                monthNames: [
                    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
                ]
            };

            // For convenience...
            Date.prototype.format = function (mask, utc) {
                return dateFormat(this, mask, utc);
            };


            return dateFormat(date, "ddd, mmm dS, yyyy");
        }


    },

    SubmitCase: function() {
        /*

        var caseData = Ext.Viewport.getActiveItem().down('PrintOffsView3').getData();





        Ext.AnimationHelper.ShowLoading();

        var requestData = {
            "serviceId": "10",
            "token": Ext.Global.userToken,
            "objectSpcId": caseData.recordID,
            "caseSerialNum":""
        };


        Ext.Ajax.request({

            url : Ext.Global.GetConfig('webServiceUrl'),
            method : 'POST',
            jsonData :requestData,
            success : function (response) {
                var json = Ext.util.JSON.decode(response.responseText);




                Ext.AnimationHelper.HideLoading();


                if(json.statusMsg!='success')
                {

                    Ext.device.Notification.show({
                        title: Ext.Localization.GetMessage('Confirm'),
                        buttons: [Ext.Localization.GetMessage('OK')],
                        message:  Ext.Localization.GetMessage('CaseSubmitted')
                    });


                    // go back to Home
                    Ext.Viewport.getActiveItem().reset();



                }else{


                    Ext.device.Notification.show({
                        title: Ext.Localization.GetMessage('Error'),
                        buttons: [Ext.Localization.GetMessage('OK')],
                        message:  Ext.Localization.GetMessage('GenericError')
                    });

                }



            }
        });


        */






    }

});