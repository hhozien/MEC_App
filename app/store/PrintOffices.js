/*
 * File: app/store/PrintOffices.js
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

Ext.define('MEC_App.store.PrintOffices', {
    extend: 'Ext.data.Store',
    alias: 'store.printoffices',

    requires: [
        'MEC_App.model.PrintOffice',
        'MEC_App.store.override.PrintOffices',
        'Ext.data.proxy.Memory'
    ],

    config: {
        data: [
            {
                ItemName: 'rerum',
                ItemView: 'ad'
            },
            {
                ItemName: 'eos',
                ItemView: 'voluptas'
            },
            {
                ItemName: 'labore',
                ItemView: 'repellat'
            },
            {
                ItemName: 'consectetur',
                ItemView: 'nostrum'
            },
            {
                ItemName: 'minus',
                ItemView: 'repudiandae'
            },
            {
                ItemName: 'aut',
                ItemView: 'eos'
            },
            {
                ItemName: 'iusto',
                ItemView: 'animi'
            },
            {
                ItemName: 'quam',
                ItemView: 'dicta'
            },
            {
                ItemName: 'nemo',
                ItemView: 'nesciunt'
            },
            {
                ItemName: 'ut',
                ItemView: 'rerum'
            },
            {
                ItemName: 'sit',
                ItemView: 'voluptatibus'
            },
            {
                ItemName: 'id',
                ItemView: 'officia'
            },
            {
                ItemName: 'consequatur',
                ItemView: 'praesentium'
            },
            {
                ItemName: 'et',
                ItemView: 'sit'
            },
            {
                ItemName: 'odit',
                ItemView: 'iure'
            },
            {
                ItemName: 'ratione',
                ItemView: 'esse'
            },
            {
                ItemName: 'error',
                ItemView: 'dolores'
            },
            {
                ItemName: 'mollitia',
                ItemView: 'dolorum'
            },
            {
                ItemName: 'eligendi',
                ItemView: 'quia'
            },
            {
                ItemName: 'et',
                ItemView: 'sequi'
            },
            {
                ItemName: 'mollitia',
                ItemView: 'tempore'
            },
            {
                ItemName: 'debitis',
                ItemView: 'ut'
            },
            {
                ItemName: 'voluptatem',
                ItemView: 'suscipit'
            },
            {
                ItemName: 'atque',
                ItemView: 'corporis'
            },
            {
                ItemName: 'provident',
                ItemView: 'deserunt'
            },
            {
                ItemName: 'perspiciatis',
                ItemView: 'ea'
            },
            {
                ItemName: 'quo',
                ItemView: 'ad'
            },
            {
                ItemName: 'eos',
                ItemView: 'exercitationem'
            },
            {
                ItemName: 'commodi',
                ItemView: 'sequi'
            },
            {
                ItemName: 'officia',
                ItemView: 'sint'
            }
        ],
        model: 'MEC_App.model.PrintOffice',
        storeId: 'PrintOffices',
        proxy: {
            type: 'memory'
        }
    }
});