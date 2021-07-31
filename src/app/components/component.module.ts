import { NgModule } from '@angular/core';
import { PipeModule } from '../pipe/pipe.module';
import { CardShowStatusComponent } from './card-show-status/card-show-status.component';
import { MainStatusComponent } from './main-status/main-status.component';


@NgModule({
  imports: [
    PipeModule
  ],
  exports: [CardShowStatusComponent, MainStatusComponent, PipeModule],
  declarations: [CardShowStatusComponent, MainStatusComponent],
  providers: [],
})
export class ComponentsModule { }
