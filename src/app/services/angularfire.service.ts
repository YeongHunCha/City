import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AngularfireService {

  constructor(private afd:AngularFireDatabase) {}

  getContentList(){
    return this.afd.list<any>('subject').valueChanges();
  }
}
