import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../app.component.scss']
})
export class SidebarComponent implements OnInit {
  items : any[] = [{
    title: 'Main',
    children : [{
      title : 'Home',
      router : '/',
      count : 0,
      icon : 'fa fa-home'
    }, {
      title : 'Projects',
      router : '/projects',
      count : 0,
      icon : 'fa fa-list-alt'
    }, {
      title : 'Messages',
      router : '/messages',
      count : 9,
      icon : 'fa fa-comment-o'
    }, {
      title : 'Analytics',
      router : '/analytics',
      count : 0,
      icon : 'fa fa-line-chart'
    }, {
      title : 'Tasks',
      router : '/tasks',
      count : 0,
      icon : 'fa fa-tasks'
    }, {
      title : 'Calendar',
      router : '/calendar',
      count : 0,
      icon : 'fa fa-calendar'
    }, {
      title : 'Layouts',
      router : '/layouts',
      count : 0,
      icon : 'fa fa-th-large'
    }, {
      title : 'Accounts',
      router : '/account',
      count : 0,
      icon : 'fa fa-user-circle-o'
    }]
  }, {
    title: 'More',
    children : [{
      title : 'Payments',
      router : '/payments',
      count : 0,
      icon : 'fa fa-credit-card-alt'
    }, {
      title : 'Directory',
      router : '/directory',
      count : 0,
      icon : 'fa fa-folder'
    }, {
      title : 'Library',
      router : '/library',
      count : 0,
      icon : 'fa fa-database'
    }, {
      title : 'Help',
      router : '/help',
      count : 0,
      icon : 'fa fa-question-circle'
    }]
  }];
  constructor() { }

  ngOnInit() {
  }

}
