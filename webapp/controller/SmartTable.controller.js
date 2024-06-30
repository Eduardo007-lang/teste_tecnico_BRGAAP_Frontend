sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("sap.ui.comp.sample.smarttable.smartMTableWithCriticality.controller.SmartTable", {
        onInit: function () {
            var oView = this.getView();

            // URL da sua API
            var sUrl = "http://localhost:5295/api/NotaFiscal";
            console.log("Iniciando requisição para URL:", sUrl);

            // Fazendo a requisição para a API
            fetch(sUrl)
                .then(response => {
                    console.log("Recebida resposta da API");
                    if (!response.ok) {
                        throw new Error('Network response was not ok ' + response.statusText);
                    }
                    return response.json();
                })
                .then(data => {
                    var oModel = new JSONModel(data);
                    oView.setModel(oModel, "NotaFiscal");
                })
                .catch(error => {
                    console.error("Erro ao carregar dados da API", error);
                });
        },

        onOpenNotaFiscalDetails: function (oEvent) {
            // Obtendo o contexto da linha selecionada
            var oButton = oEvent.getSource();
            var oBindingContext = oButton.getBindingContext("NotaFiscal");

            // Cria e define o modelo para o diálogo com base no contexto da linha
            var oNotaFiscalData = oBindingContext.getObject();
            var oNotaFiscalModel = new JSONModel(oNotaFiscalData);
            this.getView().setModel(oNotaFiscalModel, "NotaFiscalSelected");

            // Abre o diálogo
            this.byId("notaFiscalDetailsDialog").open();
        },

        onCloseNotaFiscalDetails: function () {
            // Fecha o diálogo
            this.byId("notaFiscalDetailsDialog").close();
        },

        onBeforeExport: function (oEvt) {
            var mExcelSettings = oEvt.getParameter("exportSettings");
            mExcelSettings.worker = false;
        },

        onExit: function () {
            console.log("Finalizando controlador");
        }
    });
});
