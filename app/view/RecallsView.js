/*
 * File: app/view/RecallsView.js
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

Ext.define('MEC_App.view.RecallsView', {
    extend: 'Ext.Panel',
    alias: 'widget.RecallsView',

    requires: [
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        cls: 'complaint-view',
        itemId: 'RecallsView',
        layout: 'fit',
        scrollable: false,
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                docked: 'top',
                html: 'الاستدعاءات',
                itemId: 'lblTitle'
            },
            {
                xtype: 'list',
                cls: 'news-lstng',
                height: '100%',
                itemId: 'lstRecalls',
                itemTpl: Ext.create('Ext.XTemplate', 
                    '<div class="x-horizontal x-align-stretch x-pack-start x-layout-box">',
                    '    <div class="x-img x-img-image lstng-img x-img-background x-layout-box-item x-flexed x-stretched" style="-webkit-box-flex: 2; background-image: url({[this.getImgSrc(values.Id)]});"></div>',
                    '    <div class="lstng-title x-layout-box-item x-flexed x-stretched" style="-webkit-box-flex: 7;"><span>{ProductTitle}</span></div>',
                    '</div>',
                    {
                        getImgSrc: function(Id) {
                            return Ext.Global.GetConfig('CMSWSUrl')+"/Recall/Image/"+Id;

                        }
                    }
                ),
                onItemDisclosure: true,
                pinHeaders: false,
                useSimpleItems: false
            }
        ]
    }

});