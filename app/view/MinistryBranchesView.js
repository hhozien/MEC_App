/*
 * File: app/view/MinistryBranchesView.js
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

Ext.define('MEC_App.view.MinistryBranchesView', {
    extend: 'Ext.Panel',
    alias: 'widget.MinistryBranchesView',

    requires: [
        'Ext.Label',
        'Ext.Panel',
        'Ext.Map',
        'Ext.field.Hidden'
    ],

    config: {
        cls: 'contact-us-view',
        itemId: 'MinistryBranchesView',
        layout: 'vbox',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [
            {
                xtype: 'label',
                cls: 'inners-title',
                html: 'فروع الوزارة',
                itemId: 'viewLbl'
            },
            {
                xtype: 'panel',
                flex: 2.5,
                cls: 'map-panel',
                items: [
                    {
                        xtype: 'map',
                        height: '100%',
                        id: 'mymap1',
                        itemId: 'mymap',
                        mapOptions: {
                            disableDefaultUI: true
                        }
                    }
                ]
            },
            {
                xtype: 'label',
                cls: 'branch-title',
                itemId: 'lblTitle'
            },
            {
                xtype: 'label',
                cls: 'branch-goto',
                html: 'الذهاب إلي الفرع',
                itemId: 'lblGoTo',
                listeners: [
                    {
                        fn: function(component, eOpts) {


                            var me = this;

                            me.element.on('tap', function(){
                                window.open('http://maps.google.com?q='+me.up('MinistryBranchesView').down('#lat').getValue()+','+me.up('MinistryBranchesView').down('#lng').getValue(),'_system');
                            }, me.element);

                        },
                        event: 'initialize'
                    }
                ]
            },
            {
                xtype: 'label',
                cls: 'branch-tel',
                itemId: 'lblTel'
            },
            {
                xtype: 'label',
                cls: 'branch-fax',
                itemId: 'lblFax'
            },
            {
                xtype: 'hiddenfield',
                itemId: 'lat'
            },
            {
                xtype: 'hiddenfield',
                itemId: 'lng'
            }
        ]
    },

    initialize: function() {
        this.callParent();

        var view = this;

        Ext.Localization.LocalizeView(this);


        var mapPanel = this.down('map');
        var gMap = mapPanel.getMap();

        Ext.Function.defer(function(){

            if (gMap === null) {
                //Ext.Function.defer(this.initMap,500,this);
            } else {
                // ready to start calling google map methods

                // alert('not null');


                gMap.setCenter(new google.maps.LatLng (25.321283,51.528329));
                gMap.setZoom(11);



                var branches = [];




                if(Ext.Global.LanguageFlag == 'en')
                {

                    branches = [
                        {Name:'Headquarters',Lat:'25.321283',Lng:'51.528329',Address:'TBD',Tel:'40122222',Fax:''},

                        {Name:'Al-Shahanya Immigration center',Lat:'25.3769',Lng:'51.23146',Tel:'',Fax:''},
                        {Name:'Al-Rayyan Municipality',Lat:'25.30137',Lng:'51.43637',Tel:'44265918',Fax:'44266126'},

                        {Name:'Um Salal Municipality',Lat:'25.41506',Lng:'51.39724',Tel:'235185 - 40288670',Fax:''},
                        {Name:'Um Sallal Registration Branch',Lat:'25.4679',Lng:'51.40586',Tel:'44264255',Fax:'44784622'},

                        {Name:'Al Zubarah',Lat:'25.82954',Lng:'51.34425',Tel:'2353630 - 40288680',Fax:''},
                        {Name:'Al-Hilal Service Center',Lat:'25.26332',Lng:'51.53486',Tel:'',Fax:''},
                        {Name:'Al- Zaaien Municipality',Lat:'25.5636',Lng:'51.45246',Tel:'44347843',Fax:''},
                        {Name:'Al-Wakrah Municipality', Lat:'25.16715',Lng:'51.59787',Tel:'44264088',Fax:'44631647'}
                    ];

                }else{


                    branches = [
                        {Name:'الفرع الرئيسي',Lat:'25.321283',Lng:'51.528329',Address:'TBD',Tel:'40122222',Fax:''},

                        {Name:'مركز جوازات الشحانيه',Lat:'25.3769',Lng:'51.23146',Tel:'',Fax:''},
                        {Name:'بلديه الريان',Lat:'25.30137',Lng:'51.43637',Tel:'44265918',Fax:'44266126'},
                        {Name:'بلديه ام صلال لترخيص',Lat:'25.41506',Lng:'51.39724',Tel:'235185 - 40288670',Fax:''},
                        {Name:'ام صلال للتسجيل',Lat:'25.4679',Lng:'51.40586',Tel:'44264255',Fax:'44784622'},
                        {Name:'مركز شرطه الزباره',Lat:'25.82954',Lng:'51.34425',Tel:'2353630 - 40288680',Fax:''},
                        {Name:'مجمع خدمات الهلال',Lat:'25.26332',Lng:'51.53486',Tel:'',Fax:''},
                        {Name:'بلدية الظعاين',Lat:'25.5636',Lng:'51.45246',Tel:'44347843',Fax:''},
                        {Name:'بلدية الوكرة',Lat:'25.16715',Lng:'51.59787',Tel:'44264088',Fax:'44631647'}
                    ];

                }







                var infowindow = new google.maps.InfoWindow();


                var i = 0;

                Ext.each(branches,function(item){

                    var marker = new google.maps.Marker({
                        map: gMap,
                        animation: google.maps.Animation.DROP,
                        position: new google.maps.LatLng (item.Lat,item.Lng),
                        icon: 'resources/images/drop-pin.png',
                        data:item
                    });

                    google.maps.event.addListener(marker,'click',function(pos) {

                        var info = '<div style="font-size:16px;font-family:PFDinTextUniversal;padding-right:5px" class="branch-title">'+marker.data.Name+'</div>';
                        infowindow.setContent(info);
                        infowindow.open(gMap,marker);

                        view.down('#lblTitle').setHtml(marker.data.Name);
                        view.down('#lblTel').setHtml(marker.data.Tel);
                        view.down('#lblFax').setHtml(marker.data.Fax);


                         view.down('#lat').setValue(marker.data.Lat);
                          view.down('#lng').setValue(marker.data.Lng);





                    });

                    if(i===0)
                    {
                        new google.maps.event.trigger( marker, 'click' );

                    }

                    i++;
                });




            }
        } ,300,this);





        mapPanel.element.on({
            tap: this.domEvent,
            touchstart:this.domEvent,
            touchmove:this.domEvent,
            touchdown:this.domEvent,
            scroll:this.domEvent,
            pinch:this.domEvent,
            pinchstart:this.domEvent,
            pinchend:this.domEvent,
            swipe:this.domEvent
        });
    },

    domEvent: function(evt, el, o) {
        evt.stopPropagation();
    }

});