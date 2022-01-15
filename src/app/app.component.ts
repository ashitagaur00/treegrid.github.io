import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataStateChangeEventArgs, DataSourceChangedEventArgs } from '@syncfusion/ej2-angular-grids';
import { CrudService } from './services/crud.service';
import { Customer } from './models/customer';
import { MenuItemModel } from '@syncfusion/ej2-navigations';
import { VirtualScrollService, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { dataSource, virtualData } from './services/data_source';
import { MenuEventArgs } from '@syncfusion/ej2-angular-navigations';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  public title = " Angular Application";
  public data: Observable<DataStateChangeEventArgs>;
  public pageOptions!: Object;
  public editSettings!: Object;
  public toolbar!: string[];
  public state!: DataStateChangeEventArgs;
  customers!: Customer[];

  // public isHidden: Boolean = true;
  // xPosTabMenu: Number;
  // yPosTabMenu: Number;

  // @ViewChild('dialog')
  // public alertDialog: DialogComponent;

  // name = 'Angular';
  menuItems= [
  {
    text: 'Add'
  },
  {
    text: 'Edit'
  },
  {
    text: 'Delete'
  },
  {
    separator: true
  },
  {
    text: 'Update'
  },
  {
    text: 'Cancel'
  }
  ];

  // public visible: Boolean = false;

  // public position: any = {X: 100, Y: 100};

  // public alertDlgButtons: Object[] = [{
  //       buttonModel: {
  //           isPrimary: true,
  //           content: 'Submit',
  //           cssClass: 'e-flat',
  //       },
  //       click: function () {
  //           this.hide();
  //       }
  //   }];

  public itemSelect(args: MenuEventArgs): void {
    if (args.item.text == 'Add') {
      // this.alertDialog.show();
      alert("works");
    }
  }
 
//  / -----
  constructor(private crudService: CrudService) {
    this.data = crudService;
  }

  getData(): void {
    this.crudService.getAllData()
      .subscribe((customers) => {
        alert(JSON.stringify(customers))
      });
  }

  public dataStateChange(state: DataStateChangeEventArgs): void {
    this.crudService.execute(state);
  }

  public dataSourceChanged(state: DataSourceChangedEventArgs): void {
    if (state.action === 'add') {
        this.crudService.addRecord(state).subscribe(() => state.endEdit());
    } else if (state.action === 'edit') {
        this.crudService.updateRecord(state).subscribe(() => state.endEdit());
    } else if (state.requestType === 'delete') {
        this.crudService.deleteRecord(state).subscribe(() => state.endEdit());
    }
  }

  public ngOnInit(): void {
    
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true  };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];        
    let state = { skip: 0, take: 12 };
    this.crudService.execute(state);
  }

  // rightClick(event) {
  //   event.stopPropagation();
  //   this.xPosTabMenu = event.clientX;
  //   this.yPosTabMenu = event.clientY;
  //   this.isHidden = false;
  //   return false;
  // }

  // closeRightClickMenu() {
  //   this.isHidden = true;
  // }

}
