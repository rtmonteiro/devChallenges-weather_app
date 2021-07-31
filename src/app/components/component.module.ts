import { NgModule } from '@angular/core';
import { PipeModule } from '../pipe/pipe.module';
import { CardShowStatusComponent } from './card-show-status/card-show-status.component';


@NgModule({
  imports: [
    PipeModule
  ],
  exports: [CardShowStatusComponent, PipeModule],
  declarations: [CardShowStatusComponent],
  providers: [],
})
export class ComponentsModule { }
