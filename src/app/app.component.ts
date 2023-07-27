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
      { 'key': 1, 'name': '', 'title': 'Shop Manager','parent': "TBD", 'duty':'\nOverseeing the opertion\n making decesion\n coordinating workflow\n adjusting the schedule \n coordinate with Scheduller \n tracking due dates', 'shift':'NA' },
      { 'key': 2, 'name': '', 'title': 'Press Op\nlead', 'parent': 1,'duty':'\nQc print\n Adjustment', 'shift':'m'},
      { 'key': 3, 'name': '', 'title': 'Press Operator', 'parent': 2,'duty':'\n', 'shift':'m' },
      { 'key': 4, 'name': '', 'title': 'Press Operator', 'parent': 2,'duty':'\n', 'shift':'m' },
      { 'key': 5, 'name': '', 'title': 'Press Assistant', 'parent': 16,'duty':'\nprepare \n setup\n tear out\n tape', 'shift':'m' },
      { 'key': 6, 'name': '', 'title': 'Press Assistant', 'parent': 16,'duty':'\n', 'shift':'m' },
    //  { 'key': 7, 'name': '', 'title': 'Press Assistant', 'parent': 16,'duty':'', 'shift':'' },
      { 'key': 8, 'name': '', 'title': 'Shop Helper', 'parent': 16 ,'duty':'\n cleaning Screen \n etc', 'shift':'m'},
      { 'key': 9, 'name': '', 'title': 'Shop Helper', 'parent': 16,'duty':'\nCleaning\n prepare\nheat press', 'shift':'m+2' },
      { 'key': 10, 'name': '', 'title': 'Darkroom op', 'parent': 1,'duty':'\nPreparing screen\nburning screen\norganizing films', 'shift':'m' },
      { 'key': 11, 'name': '', 'title': 'Catcher', 'parent': 17,'duty':'\nreceive\ncount\nstack\ncatch\nfold\ncount\nbox\nlabel', 'shift':'m'},
      { 'key': 12, 'name': '', 'title': 'Catcher', 'parent': 17 ,'duty':'\nreceive\ncount\nstack\ncatch\nfold\ncount\nbox\nlabel', 'shift':'m'},
      { 'key': 13, 'name': '', 'title': 'Catcher', 'parent': 17 ,'duty':'\nreceive\ncount\nstack\ncatch\nfold\ncount\nbox\nlabel', 'shift':'m+2'},
      { 'key': 14, 'name': '', 'title': 'Supervisor', 'parent': 1 ,'duty':'\n', 'shift':'m'},
      { 'key': 15, 'name': '', 'title': 'Ink mixer', 'parent': 16,'duty':'\nMixing ink\n documentation \n coordinate with art dep.', 'shift':'m+2' },
      { 'key': 16, 'name': '', 'title': 'Assistant lead', 'parent': 14 ,'duty':'\ncoordinating workflow', 'shift':'m'},
      { 'key': 17, 'name': '', 'title': 'Shipping-Receiving manager', 'parent': 14 ,'duty':'\noverall Qc\n reconciliation\n shipping \ncoordinating workflow \n tracking shipments', 'shift':'m'}
    ]

    
  );

  public setSelectedNode(node) {
    this.selectedNode = node;
  }

}
