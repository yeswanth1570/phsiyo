import { NgModule } from "@angular/core";
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar'
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
 exports:[
    MatSliderModule,
    MatToolbarModule,
    MatMenuModule,
 ]
})
export class AppMaterialModule { }