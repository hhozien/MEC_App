/*
 * File: app/controller/Localization.js
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

Ext.define('MEC_App.controller.Localization', {
    extend: 'Ext.Base',

    alternateClassName: [
        'Ext.Localization'
    ],
    singleton: true,

    config: {
    },

    LoadLocalization: function() {

        //read localization flag set from Language screen

        if(Ext.Global.LanguageFlag == 'ar')
        {

            // laod arabic json file

            Ext.Global.Localization = localeAr;

            if(Ext.Viewport.down('MainNavView'))Ext.Viewport.down('MainNavView').setDefaultBackButtonText('عودة');

        }
        else if(Ext.Global.LanguageFlag == 'en')
        {
            // laod english json file

            Ext.Global.Localization = localeEn;

            if(Ext.Viewport.down('MainNavView'))Ext.Viewport.down('MainNavView').setDefaultBackButtonText('Back');

        }



    },

    LocalizeView: function(viewObj) {

        // if the localization is set ==> english
        if(Ext.Global.Localization) {
            if(Ext.Global.LanguageFlag == 'en' || viewObj.getItemId() == 'MainNavView' || viewObj.getItemId() == 'SideMenu') {
                var loc = Ext.Global.Localization;
                var viewLoc;

                Ext.each(loc.Views,function(item){
                    if(item.itemId==viewObj._itemId)
                    {
                        viewLoc = item;
                        return;
                    }
                });

                if(viewLoc.cls) viewObj.addCls(viewLoc.cls);

                if(viewLoc.items)
                {
                    Ext.each(viewLoc.items,function(item){
                        var viewItem = viewObj.down('#'+item.itemId);

                        if(item.xtype=='button') viewItem.setText(item.value);
                        if(item.xtype=='label') viewItem.setHtml(item.value);
                        if(item.xtype=='titlebar') viewItem.setTitle(item.value).setTitleAlign(item.align);
                        //if(item.xtype=='container') viewItem.setTitle(item.value);
                        if(item.xtype=='textfield')
                        {
                            viewItem.setPlaceHolder(item.value);
                            viewItem.setLabel(item.value);
                        }
                        if(item.xtype=='cls') viewItem.addCls(item.value);

                    });
                }

            }
        }




    },

    getLinks: function(viewObj) {
            if(Ext.Global.Localization) {
                var loc = Ext.Global.Localization;
                var viewLoc;

                Ext.each(loc.Links,function(item){
                    if(item.itemId==viewObj._itemId)
                    {
                        viewLoc = item.items;
                        return;
                    }
                });

                return viewLoc;

            }
    },

    GetMessage: function(key) {
            if(Ext.Global.Localization) {
                var loc = Ext.Global.Localization;

                return loc.Messages[key];

            }
    }

});