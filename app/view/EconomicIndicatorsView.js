/*
 * File: app/view/EconomicIndicatorsView.js
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

Ext.define('MEC_App.view.EconomicIndicatorsView', {
    extend: 'Ext.Panel',
    alias: 'widget.EconomicIndicatorsView',

    requires: [
        'Ext.Label',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        itemId: 'EconomicIndicatorsView',
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
                html: 'مؤشرات اقتصادية',
                itemId: 'lblTitle'
            },
            {
                xtype: 'list',
                flex: 1,
                height: '100%',
                itemId: 'lstIndicators',
                itemCls: 'item-indicator',
                itemTpl: Ext.create('Ext.XTemplate', 
                    '<div class="tpl-indicator-1"><span>{Title}</span><br/><span class="sub-title">{Value} {[this.Translate()]}</span></div>',
                    '    <div class="tpl-indicator-2 {[this.CheckPercentOfChange(values.ChangePercent)]}"> {ChangePercent}%</div>',
                    {
                        CheckPercentOfChange: function(changePercent) {
                            if(changePercent>0){
                                return 'arrow-up';
                            }else{
                                return 'arrow-down';

                            }
                        },
                        Translate: function() {
                            var text='مليون (ر.ق)';
                            if(Ext.Global.LanguageFlag == 'en'){
                                text='Million (QAR)';
                            }

                            return text;
                        }
                    }
                )
            }
        ]
    },

    initialize: function() {
        this.callParent();

        Ext.Localization.LoadLocalization();

        Ext.Localization.LocalizeView(this);

    }

});