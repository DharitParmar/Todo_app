import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray, ToastController} from 'ionic-angular';
import { TodoProvider } from '../../providers/todo/todo'
import { ArchiveTodosPage } from '../archived-todos/archive-todos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // creates an arrray that holds todo items
  public todos = [];
  public reorderIsEnabled = false;
  public archiveTodoPage = ArchiveTodosPage;

  constructor(private toastController: ToastController, 
              private todoProvider: TodoProvider, 
              public navCtrl: NavController, 
              private alertController: AlertController) {
    this.todos = this.todoProvider.getTodos();
  }

  //method toggles reorderIsEnable
  toggleReorder(){
    this.reorderIsEnabled = !this.reorderIsEnabled;
  }

  //method reorders the item list with new index
  itemReordered($event){
    reorderArray(this.todos, $event);
  }

  // Method prompts new window for to input new todo 
  openTodoAlert(){
    let addTodoAlert = this.alertController.create({
      title: "Add a todo",
      message: "Enter your todo",
      inputs:[
        {
          type:"text",
          name:"addTodoInput"
        },
      ],
      buttons:[
        {
          text:"Cancel"
        },
        {
          text:"Add todo",
          
          // enters' input and store it into an array
          handler: (inputData)=>{
            let todoText;
            todoText = inputData.addTodoInput;
            // push todo text into todos array within todoProvoder
            this.todoProvider.addTodo(todoText);

            addTodoAlert.onDidDismiss(()=>{
            
              // creates and display Toast message using Toast controller
              let todoToast = this.toastController.create({
                message:"Todo added",
                duration:2000
              });

            todoToast.present();
            })  
          }
        }
      ]
    })
    addTodoAlert.present();
  }

  // methos nevigates to AchivetodoPage
  gotoArchiveTodoPage(){
    this.navCtrl.push(ArchiveTodosPage);
  }

  // function removes todo from perticular index in 'todos' array
  archiveTodo(itemIndex){
    this.todoProvider.archiveTodo(itemIndex);
  }

  // take the reference to editTodo function in todo service for editing the todo at selected index
  editTodo(itemIndex){
    let addTodoAlert = this.alertController.create({
      title: "Add a todo",
      message: "Enter your todo",
      inputs:[
        {
          type:"text",
          name:"addTodoInput",
          value:this.todos[itemIndex]
        },
      ],
      buttons:[
        {
          text:"Cancel"
        },
        {
          text:"Add todo",
          
          // enters' input and store it into an array
          handler: (inputData)=>{
            let todoText;
            todoText = inputData.addTodoInput;
            this.todoProvider.editTodo(todoText, itemIndex);

            addTodoAlert.onDidDismiss(()=>{
              // creates and display Toast message using Toast controller
              let todoToast = this.toastController.create({
                message:"Todo Edited",
                duration:2000
              });
            todoToast.present();
            })  
          }
        }
      ]
    })
    addTodoAlert.present();
  }

  
}
