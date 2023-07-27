import { Component } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public selectedNode = null;

  public model: go.TreeModel = new go.TreeModel(
    [
      { 'key': 1, 'name': '', 'title': '','duty':'' },
      { 'key': 2, 'name': '', 'title': '', 'parent': 1,'duty':'' },
      { 'key': 3, 'name': '', 'title': '', 'parent': 2,'duty':'' },
      { 'key': 4, 'name': '', 'title': '', 'parent': 1,'duty':'' },
      { 'key': 5, 'name': '', 'title': '', 'parent': 4,'duty':'' },
      { 'key': 6, 'name': '', 'title': '', 'parent': 2,'duty':'' },
      { 'key': 7, 'name': '', 'title': '', 'parent': 3,'duty':'' },
      { 'key': 8, 'name': '', 'title': '', 'parent': 5 ,'duty':''},
      { 'key': 9, 'name': '', 'title': '', 'parent': 6,'duty':'' },
      { 'key': 10, 'name': '', 'title': '', 'parent': 4,'duty':'' },
      { 'key': 11, 'name': '', 'title': '', 'parent': 5 ,'duty':''},
      { 'key': 12, 'name': '', 'title': '', 'parent': 10 ,'duty':''},
      { 'key': 13, 'name': '', 'title': '', 'parent': 10 ,'duty':''},
      { 'key': 14, 'name': '', 'title': '', 'parent': 10 ,'duty':''},
      { 'key': 15, 'name': '', 'title': '', 'parent': 5,'duty':'' },
      { 'key': 16, 'name': '', 'title': '', 'parent': 3 ,'duty':''}
    ]
  );

  public setSelectedNode(node) {
    this.selectedNode = node;
  }

}
