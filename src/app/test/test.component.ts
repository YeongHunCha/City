import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'

import { AngularfireService } from '../services/angularfire.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TestComponent implements OnInit {
  items:Observable<any[]>;
  constructor(public afs:AngularfireService) {
    this.items = afs.getContentList();

  }

  ngOnInit() {
  }


}
