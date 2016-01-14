/*
 *   SeerDataCruncher is a Data Quality Firewall, a Data Quality Monitor and an ETL middleware to manage data streams on the fly.
 *   SeerDataCruncher is released under AGPL license.

 *   Copyright (c) 2015 foreSEE-Revolution ltd
 *   All rights reserved
 *
 *   Site: http://www.see-r.com
 *   Contact:  info@see-r.com
 */

function loadSchemaFields() {
    var record = schemasGrid.getSelectionModel().getSelection()[0];
    if (!record) {
        App.setAlert(false , _alert['selectRecord']);
        return false;
    };

    var idStreamType = record.get('idStreamType');
    if (idStreamType != 1 && idStreamType != 2) {
        App.setAlert(false , _alert["loadNotPermittedStep3"]);
        return false;
    };
    editorSchemas.cancelEdit();
    Ext.Ajax.request({
        params: {
            idSchema: record.get('idSchema')
        },
        success: function (response, opts) {
            recordResult = Ext.decode(response.responseText);
            if (recordResult.success) {
                popupUploadXSD(record);
                //Ext.getCmp('content').layout.setActiveItem('schemasGrid');
                //schemasList();
            } else {
                App.setAlert(false , _alert['loadNotPermittedStep2']);
            }
        },
        url: './schemasCheckRoot.json'
    });
};

function popupUploadXSD(record) {
    var uploadContent = {
        xtype: 'form',
        id: 'uploadForm',
        fileUpload: true,
        frame: true,
        labelWidth: 50,
        items: [
			{name: 'file' , fieldLabel: 'File' , id: 'form-file' , emptyText: 'Select a File to import' , xtype: 'fileuploadfield' , width: 350}
		]
    };
     
	new Ext.Window({
		height: 105,
		id: 'popupUploadXSD',
		items: [
			uploadContent,
			{text: _message["upload"], x: 135 , xtype: 'button' , width: 100 , y: 45 ,
				handler: function(){
				    var form = Ext.getCmp('uploadForm').getForm();
					if (form.isValid()) {
						form.submit({
							url: './fieldsImportFromXSD.json?idSchemaXSD=' + record.get('idSchema'),
	                        waitMsg: _message["loadTheFile"],
							success: function(form, action) {
								//loadedXSD never used..
								//record.set('loadedXSD' , true);
                                //schemasGrid.store.load();
                                var errMsg = action.result.message;
                                if (errMsg != '') {
                                    Ext.MessageBox.show({
                                        title: _message['xsdUploadedSuccessfully'],
                                        buttons: Ext.MessageBox.OK,
                                        msg: errMsg,
                                        icon: Ext.MessageBox.WARNING
                                    });
                                }else{
                                    App.setAlert(App.STATUS_OK,_message['xsdUploadedSuccessfully']);
                                }
								Ext.getCmp('popupUploadXSD').close();
								editSchemaFields();
							},
							failure: function(form, action) {
								if(action.result.message == "1") {
									App.setAlert(_message["error"], _error["invalidFileExtError"]);
                                } else if(action.result.message == "2"){
                                    App.setAlert(_message["error"], _error["invalidXSDFileError"]);
                                } else if(action.result.message == "3"){
                                    callAlert(action.result.errText);
                                } else {
                                    App.setAlert(_message["error"], action.result.message);
								}
								
							}
						});
					}
				}
			},
			{text: _message["close"] , x: 250 , xtype: 'button' , width: 100 , y: 45 ,
	        	handler: function(){
	        		Ext.getCmp('popupUploadXSD').close();
	        	}
	        }
		],
		layout: 'absolute',
		modal: true,
		resizable: false,
	    title: _message['uploadXSD'],
	    width: 500
    }).show();
};