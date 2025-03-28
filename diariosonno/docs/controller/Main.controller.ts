import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace diario.diariosonno.controller
 */
export default class Main extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        let days = [];
        if (localStorage.getItem('days')) {
          const storedDays = localStorage.getItem('days');
          if (storedDays) {
            days = JSON.parse(storedDays);
            const oModel = new sap.ui.model.json.JSONModel({ days });
            const view = this.getView();
            if (view) {
                view.setModel(oModel);
            }
          }
        } 
        else {
          for (let i = 1; i <= 31; i++) {
            days.push({
              date: `${i.toString().padStart(2, '0')}/02`, // es. 01/02
              hours: {
                0: false,
                1: false,
                2: false,
                3: false,
                4: false,
                5: false,
                6: false,
                7: false,
                8: false,
                9: false,
                10: false,
                11: false,
                12: false,
                13: false,
                14: false,
                15: false,
                16: false,
                17: false,
                18: false,
                19: false,
                20: false,
                21: false,
                22: false,
                23: false
          
              }
            });
            const oModel = new sap.ui.model.json.JSONModel({ days });
            this.getView().setModel(oModel);
    
            const today = new Date();
            const currentMonth = today.getMonth() + 1; // da 0-based a 1-based
         this.loadDaysForMonth(currentMonth);
          }
        }
    }

    public onMonthChange(oEvent: any): void {
        const selectedMonth = parseInt(oEvent.getSource().getSelectedKey(), 10);
        this.loadDaysForMonth(selectedMonth);
    }
      
    public loadDaysForMonth(month: number): void {
        const year = new Date().getFullYear();
        const numDays = new Date(year, month, 0).getDate(); // zero = ultimo giorno mese precedente
      
        const days = [];
      
        for (let i = 1; i <= numDays; i++) {
          days.push({
            date: `${i.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}`,
            hours: {
              0: false, 1: false, 2: false, 3: false, 4: false,
              5: false, 6: false, 7: false, 8: false, 9: false,
              10: false, 11: false, 12: false
            }
          });
        }
      
        const oModel = new sap.ui.model.json.JSONModel({ days });
        this.getView().setModel(oModel);
    };

    public onSavePress(): void {
      const oModel = this.getView().getModel();
      const days = oModel.getProperty('/days');
      localStorage.setItem('days', JSON.stringify(days));
    
      console.log(data);
    };

    public onButtonPress(oEvent: any ): void {
        // Ottieni il binding context del pulsante cliccato
        var oButton = oEvent.getSource();

        var icon_n  = oButton.getId();
        icon_n = icon_n.split("_")[1];
        icon_n = icon_n.split("-")[0];
        var icon_n2 = icon_n.slice(-2); 
        var path_icona = "/icon" + icon_n2;
        var oContext = oButton.getBindingContext();
        var icon_current = oContext.getPath();
        
        var icon_init = oButton.getBinding("icon").getValue();
        // Aggiorna il modello
        let icon: string | undefined;
        if (icon_init === "sap-icon://color-fill") {
            icon = "sap-icon://border";
        }
        else if (icon_init === "sap-icon://border") {  
          icon = undefined;
        }
        else if (icon_init === undefined ) {
          icon = "sap-icon://color-fill";
        };
              
              oContext.getModel().setProperty(oContext.getPath()  + path_icona, icon);
        }
      }
    