import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace diario.diariosonno.controller
 */
export default class Main extends Controller {

    /*eslint-disable @typescript-eslint/no-empty-function*/
    public onInit(): void {
        const days = [];

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
        }
      
        const oModel = new sap.ui.model.json.JSONModel({ days });
        this.getView().setModel(oModel);

        const today = new Date();
        const currentMonth = today.getMonth() + 1; // da 0-based a 1-based
     this.loadDaysForMonth(currentMonth);

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
    }

    }