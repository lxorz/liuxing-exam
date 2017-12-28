import { Component, OnInit } from '@angular/core';

interface User{
  id:number,
  name:string,
  types:string,
  price:string
}

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  users:Array<User>;
  constructor() {
    this.loadUsersData();
  }
  sortUsers(type){
    // 参考MDN中的ES6，Array语法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    if (type == "asc") {
      this.users.sort(function(a, b) {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
      });
    } else if (type == "desc") {
      this.users.sort(function(a, b) {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
      });
    } else {
      this.users.sort(function(a, b) {
        return Math.trunc(Math.random()*10)});
    }

    console.log("sortUsers Works!");
  }
  loadUsersData(){
    this.users = [
      {id:1,name:"苹果",types:"红富士",price:"12"},
      {id:2,name:"香蕉",types:"芭蕉",price:"32"},
      {id:3,name:"白梨",types:"大白梨",price:"4"},
      {id:4,name:"西红柿",types:"蔬菜",price:"1"},
      {id:5,name:"土豆",types:"蔬菜",price:"3"}
    ];
  }
  addNewUser(){
    let uuid = Number(Math.random()*1000).toFixed(0);
    let newUser:User = {
      id:Number(uuid),
      name:"西瓜",
      types:"水果",
      price:"100"
    }
    this.users.push(newUser);
  }
  deleteUserByID(id){
    this.users.forEach((user,index,arr)=>{
      if(user.id==id){
        arr.splice(index,1);
      }
    })
  }
  ngOnInit() {
  }

}
