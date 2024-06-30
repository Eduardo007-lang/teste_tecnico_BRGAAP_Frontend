sap.ui.define([
	"sap/ui/base/Object",
	"sap/ui/core/util/MockServer"
], function(BaseObject, MockServer){
	"use strict";

	/* Export requires an absolute path */
	var SERVICE_URL = "https://fake.host.com/local/service/";

	var DemoMockServer = BaseObject.extend("sap.ui.comp.sample.smarttable.refAppMockServer.DemoMockServer", {

		constructor : function() {
            BaseObject.apply(this);

            var oMockServer = new MockServer({
                rootUri: SERVICE_URL
            });

            this._oMockServer = oMockServer;
            this._sMockdataUrl = sap.ui.require.toUrl("sap/ui/comp/sample/smarttable/refAppMockServer");

            oMockServer.simulate(this._sMockdataUrl + "/metadata.xml", {
                sMockdataBaseUrl: this._sMockdataUrl,
                bGenerateMissingMockData: true
            });

            this.start();
        },

		start: function() {
            this._oMockServer.start();
            console.log("MockServer started");
        },

        stop: function() {
            this._oMockServer.stop();
            console.log("MockServer stopped");
        }

	});

	DemoMockServer.prototype.getServiceUrl = function() {
		return SERVICE_URL;
	};

	DemoMockServer.prototype.getAnnotationUrl = function() {
		return this._sMockdataUrl + "/STTA_PROD_MAN_ANNO_MDL.xml";
	};

	return DemoMockServer;
});