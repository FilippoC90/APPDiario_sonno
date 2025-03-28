sap.ui.define([], function () {
    "use strict";
    return {
      stateIcon: function (state) {
        // Ritorna un'icona in base allo stato
        switch (state) {
          case 1:
            return "sap-icon://flag";        // Flag normale
          case 2:
            return "sap-icon://decline";       // Icona con X (oppure scegli un'altra icona)
          default:
            return "";                        // Nessuna icona
        }
      }
    };
  });