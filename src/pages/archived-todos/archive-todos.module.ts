import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchiveTodosPage } from './archive-todos';

@NgModule({
  declarations: [
    ArchiveTodosPage,
  ],
  imports: [
    IonicPageModule.forChild(ArchiveTodosPage),
  ],
})
export class ArchiveTodosPageModule {}
