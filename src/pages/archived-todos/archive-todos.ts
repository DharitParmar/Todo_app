import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TodoProvider} from '../../providers/todo/todo';

/**
 * Generated class for the ArchiveTodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archive-todos',
  templateUrl: 'archive-todos.html',
})
export class ArchiveTodosPage {
  public todoArchived = [];

  constructor(private todoProvider: TodoProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.todoArchived = this.todoProvider.getArchivedTodos();
  }

}
