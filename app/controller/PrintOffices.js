/*
 * File: app/controller/PrintOffices.js
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

Ext.define('MEC_App.controller.PrintOffices', {
    extend: 'Ext.app.Controller',
    alias: 'controller.printoffices',

    requires: [
        'Ext.MessageBox'
    ],

    config: {
        refs: {
            navView: 'printoffices',
            list: 'printoffices #list',
            form: 'printoffices printofficeform',
            addButton: 'printoffices #addButton',
            editButton: 'printoffices #editButton',
            removeButton: 'printoffices #removeButton'
        },

        control: {
            "printoffices #list": {
                itemtap: 'select'
            },
            "printoffices #addButton": {
                tap: 'add'
            },
            "printoffices #editButton": {
                tap: 'edit'
            },
            "printoffices #saveButton": {
                tap: 'save'
            },
            "printoffices #removeButton": {
                tap: 'remove'
            },
            "printoffices > *": {
                show: 'setButtons'
            }
        }
    },

    select: function(dataview, index, target, record, e, eOpts) {
        // Show details
        this.getNavView().push({
            xtype: 'printofficedetails',
            title: 'PrintOffice Details',
            record: record
        });
    },

    add: function() {
        // Remove current selection
        this.getList().deselectAll();

        // Show form
        this.getNavView().push({
            xtype: 'printofficeform',
            title: 'Add PrintOffice',
            record: Ext.create('model.printoffice')
        });
    },

    edit: function() {
        // Get selected record
        var record = this.getList().getSelection()[0];

        // Show form
        this.getNavView().push({
            xtype: 'printofficeform',
            title: 'Edit PrintOffice',
            record: record
        });
    },

    save: function() {
        var form = this.getForm(),
            record = form.getRecord(),
            store = Ext.getStore('PrintOffices');

        // Update associated record with form values
        form.updateRecord(record);

        // Run validation
        var errors = record.validate();

        // Valid
        if (errors.isValid()) {

            // Add to store if new record
            if (record.phantom) {

                // TODO: Assign the record's ID from data source
                // Normally, this value would be auto-generated,
                // or returned from the server
                var id = store.getData().all.length + 1;
                record.set('id', id);

                // Add to store
                store.add(record);

            }

            // Commit changes
            store.sync();

            // Back to list
            this.getNavView().reset(record);

        }

        // Invalid
        else {

            var msg = '';
            errors.each(function (error) {
                msg += error.getMessage() + '<br/>';
            });
            Ext.Msg.alert('Error', msg);

        }
    },

    remove: function() {
        var me = this,
            title = 'Delete',
            message = 'Are you sure you want to delete this printoffice?';

        // Show confirmation message
        Ext.Msg.confirm(title, message, function(response) {
            if (response == 'yes') {

                // Remove record
                var store = Ext.getStore('PrintOffices'),
                    record = me.getList().getSelection()[0];
                store.remove(record);

                // Back to list view
                me.getNavView().reset();

            }
        });
    },

    setButtons: function(component) {
        // Hide/Show buttons based on view

        var add = this.getAddButton(),
            edit = this.getEditButton(),
            remove = this.getRemoveButton();

        switch (component.getItemId()) {
            case 'list':
                add.show();
                edit.hide();
                remove.hide();
                break;
            case 'details':
                add.hide();
                edit.show();
                remove.show();
                break;
            case 'form':
                add.hide();
                edit.hide();
                remove.hide();
                break;
        }
    }

});