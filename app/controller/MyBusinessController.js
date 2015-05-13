/*
 * File: app/controller/MyBusinessController.js
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

Ext.define('MEC_App.controller.MyBusinessController', {
    extend: 'Ext.app.Controller',

    requires: [
        'Ext.Date'
    ],

    config: {
        refs: {
            MyBusinessView: '#MyBusinessView',
            MyEstablishmentDetails: '#MyEstablishmentDetails'
        },

        control: {
            "panel#MyBusinessView": {
                initialize: 'onMyBusinessViewInitialize'
            },
            "list#lstMyCompanies": {
                itemtap: 'onLstMyCompaniesItemTap'
            },
            "panel#MyEstablishmentDetails": {
                initialize: 'onMyEstablishmentDetailsInitialize'
            },
            "list#lstBranches-c1": {
                itemtap: 'onLstBranchesc1ItemTap'
            },
            "panel#MyBranchDetails": {
                initialize: 'onMyBranchDetailsInitialize'
            }
        }
    },

    onMyBusinessViewInitialize: function(component, eOpts) {

        Ext.Localization.LocalizeView(component);


        Ext.AnimationHelper.ShowLoading();

        var view = component;

        var requestData = {
            "serviceId": "2",
            "token": Ext.Global.userToken,
            "language": Ext.Global.LanguageFlag,
            "identityType":Ext.Global.identityTypeCode,//'QID', //Ext.Global.identityType,
            "identityNum": Ext.Global.identityNum,
            "identityNationality":  Ext.Global.identityNationality
        };

        console.log(requestData);


        var me = this;

        Ext.Ajax.request({

            url : Ext.Global.GetConfig('webServiceUrl'),
            method : 'POST',
            jsonData :requestData,
            success : function (response) {



                Ext.AnimationHelper.HideLoading();

                var json = Ext.util.JSON.decode(response.responseText);

                //Companies



                var view = me.getMyBusinessView();


                if(json.listOfPrimaryEstablishment.primaryEstablishment.length>0)
                {

                    var storeCompanies = new Ext.data.Store({
                        data : json.listOfPrimaryEstablishment.primaryEstablishment
                    });


                    var lstComapnies = view.down('#lstMyCompanies');
                    lstComapnies.refresh();
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


    },

    onLstMyCompaniesItemTap: function(dataview, index, target, record, e, eOpts) {


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

    onMyEstablishmentDetailsInitialize: function(component, eOpts) {
        var view = component; //me.getMyEstablishmentDetails();


        Ext.Localization.LocalizeView(view);



        var cr = view.getData().commercialRegistration;
        var cp = view.getData().commercialPermit;



        if(cr==='' && cp===''){

            Ext.device.Notification.show({
                title: Ext.Localization.GetMessage('Error'),
                buttons: [ Ext.Localization.GetMessage('Ok')],
                message:  Ext.Localization.GetMessage('ErrNocrcp')
            });

            return;

        }



        Ext.AnimationHelper.ShowLoading();




        // get establishment details

        var me = this;

        console.log(cr);

        requestData = {
            "serviceId": "8",
            "token": Ext.Global.userToken,
            "language": Ext.Global.LanguageFlag,
            "commercialRegistrationNum":cr,
            "moiEstablishmentNum":"",
            "siebelSpcOperationSpcObjectSpcId":"",
            "qatarChamberNum":"",
            "statusMsg":"",
            "commercialPermitNum":cp,
            "numOutputObjects":"",
            "economicalNum":""
        };


        Ext.Ajax.request({

            url : Ext.Global.GetConfig('webServiceUrl'),
            method : 'POST',
            // useDefaultXhrHeader: false,
            jsonData :requestData,
            success : function (response) {
                var json = Ext.util.JSON.decode(response.responseText);
                console.log(json);

                //Bind Data to controls
                var company= json.listOfMecPrimaryEstablishment.companyEstablishment[0];


                //console.log(company);


                view.down('#commercialRegistration').setHtml(company.commercialRegistration);
                view.down('#commercialRegistrationIssueDate').setHtml(Ext.Global.FormatDate(company.commercialRegistrationIssueDate)!==undefined?Ext.Global.FormatJsonDate(company.commercialRegistrationIssueDate):'');
                view.down('#commercialRegistrationExpiryDate').setHtml(Ext.Global.FormatDate(company.commercialRegistrationExpiryDate)!==undefined?Ext.Global.FormatJsonDate(company.commercialRegistrationExpiryDate):'');
                view.down('#commercialRegistrationStatus').setHtml(company.commercialRegistrationStatus);
                view.down('#establishmentEnglishName').setHtml(company.establishmentEnglishName);
                view.down('#establishmentArabicName').setHtml(company.establishmentArabicName);
                view.down('#companyCapital').setHtml(company.companyCapital);
                view.down('#commercialPermit').setHtml(company.commercialPermit);
                view.down('#commercialPermitStatus').setHtml(company.commercialPermitStatus);



                view.down('#commercialPermitExpiryDate').setHtml(Ext.Global.FormatDate(company.commercialPermitExpiryDate)!==undefined ? Ext.Global.FormatJsonDate(company.commercialPermitExpiryDate):'');
                view.down('#establishmentDate').setHtml(Ext.Global.FormatDate(company.establishmentDate));
                view.down('#establishmentType').setHtml(company.establishmentType);
                view.down('#establishmentLegalForm').setHtml(company.establishmentLegalForm);
                view.down('#establishmentStatus').setHtml(company.establishmentStatus);
                view.down('#establishmentRegNumber').setHtml(company.moiEstablishmentId);



                //signatories
                if(company.listOfSignatories.signatories.length>0)
                {
                    var storeSignatories = new Ext.data.Store({
                        data : company.listOfSignatories.signatories
                    });

                    var lst = view.down('#lstSignatories');
                    lst.setStore(storeSignatories);

                    lst.setHeight(company.listOfSignatories.signatories.length*6 + 'em');
                    lst.setScrollable(false);
                }




                if(company.listOfHumanPartners.humanPartners.length>0)
                {
                    //partners
                    var storePartners = new Ext.data.Store({
                        data : company.listOfHumanPartners.humanPartners
                    });

                    var lstPartners = view.down('#lstPartners');
                    lstPartners.setStore(storePartners);

                    lstPartners.setHeight(company.listOfHumanPartners.humanPartners.length*6 + 'em');
                    lstPartners.setScrollable(false);

                }




                //Branches

                if(company.listOfBranches.branches.length > 0){
                    var storeBranches = new Ext.data.Store({
                        data : company.listOfBranches.branches
                    });



                    var lstBranches = view.down('#lstBranches');
                    lstBranches.setStore(storeBranches);

                    lstBranches.setHeight(company.listOfBranches.branches.length* 4.4 + 'em');
                    lstBranches.setScrollable(false);

                }




                // business activities


                if(company.listOfCRBusinessActivities.crBusinessActivities.length > 0){
                    var storActivities = new Ext.data.Store({
                        data : company.listOfCRBusinessActivities.crBusinessActivities
                    });


                    var lstBizActivities = view.down('#lstBizActivities');
                    lstBizActivities.setStore(storActivities);

                    lstBizActivities.setHeight(company.listOfCRBusinessActivities.crBusinessActivities.length*3.6 + 'em');
                    lstBizActivities.setScrollable(false);

                }



                Ext.AnimationHelper.HideLoading();


            }
        });



    },

    onLstBranchesc1ItemTap: function(dataview, index, target, record, e, eOpts) {

        if(record.data.branchCR==='' && record.data.branchCP===''){

            Ext.device.Notification.show({
                title: Ext.Localization.GetMessage('Error'),
                buttons: [ Ext.Localization.GetMessage('Ok')],
                message:  Ext.Localization.GetMessage('ErrNocrcp')
            });


        }else{

            dataview.up('MainNavView').push({
                xtype: 'MyBranchDetails',
                title: Ext.Global.GetFixedTitle(),
                data: record.data

            });

        }

    },

    onMyBranchDetailsInitialize: function(component, eOpts) {
        var view = component; //me.getMyEstablishmentDetails();
        Ext.Localization.LocalizeView(view);


        //console.log(view.getData());

        var cr = view.getData().branchCR;
        var cp = view.getData().branchCP;


        if(cr!=='')cp='';




        //Ext.AnimationHelper.ShowLoading();




        // get establishment details

        var me = this;


        requestData = {
            "serviceId": "8",
            "token": Ext.Global.userToken,
            "language": Ext.Global.LanguageFlag,
            "commercialRegistrationNum":cr,
            "moiEstablishmentNum":"",
            "siebelSpcOperationSpcObjectSpcId":"",
            "qatarChamberNum":"",
            "statusMsg":"",
            "commercialPermitNum":cp,
            "numOutputObjects":"",
            "economicalNum":""
        };



        Ext.Ajax.request({

            url : Ext.Global.GetConfig('webServiceUrl'),
            method : 'POST',
            // useDefaultXhrHeader: false,
            jsonData :requestData,
            success : function (response) {
                var json = Ext.util.JSON.decode(response.responseText);

                //Ext.AnimationHelper.HideLoading();


                //Bind Data to controls
                var company= json.listOfMecPrimaryEstablishment.companyEstablishment[0];




                view.down('#commercialRegistration').setHtml(company.commercialRegistration);


                view.down('#commercialRegistrationIssueDate').setHtml(Ext.Global.FormatDate(company.commercialRegistrationIssueDate));


                view.down('#commercialRegistrationExpiryDate').setHtml(Ext.Global.FormatDate(company.commercialRegistrationExpiryDate));
                view.down('#commercialRegistrationStatus').setHtml(company.commercialRegistrationStatus);
                view.down('#establishmentEnglishName').setHtml(company.establishmentEnglishName);
                view.down('#establishmentArabicName').setHtml(company.establishmentArabicName);
                view.down('#companyCapital').setHtml(company.companyCapital);
                view.down('#commercialPermit').setHtml(company.commercialPermit);
                view.down('#commercialPermitStatus').setHtml(company.commercialPermitStatus);
                view.down('#commercialPermitExpiryDate').setHtml(Ext.Global.FormatDate(company.commercialPermitExpiryDate));
                view.down('#establishmentDate').setHtml(Ext.Global.FormatDate(company.establishmentDate));
                view.down('#establishmentType').setHtml(company.establishmentType);
                view.down('#establishmentLegalForm').setHtml(company.establishmentLegalForm);
                view.down('#establishmentStatus').setHtml(company.establishmentStatus);
                view.down('#establishmentRegNumber').setHtml(company.moiEstablishmentId);






                if(company.listOfSignatories.signatories.length>0)
                {
                    //signatories
                    var storeSignatories = new Ext.data.Store({
                        data : company.listOfSignatories.signatories
                    });

                    var lst = view.down('#lstSignatories');
                    lst.setStore(storeSignatories);

                    lst.setHeight(company.listOfSignatories.signatories.length*6 + 'em');
                    lst.setScrollable(false);

                }





                if(company.listOfCRBusinessActivities.crBusinessActivities.length>0)
                {

                    //signatories
                    var storeAct = new Ext.data.Store({
                        data : company.listOfCRBusinessActivities.crBusinessActivities
                    });

                    var lst2 = view.down('#lstBizActivities');
                    lst2.setStore(storeAct);

                    lst2.setHeight(company.listOfCRBusinessActivities.crBusinessActivities.length*6 + 'em');
                    lst2.setScrollable(false);

                }




            },
            failure:function(response){


                console.log(response);

            }
        });

    }

});