import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Event } from './event.model';



@Injectable()
export class EventService {
  eventList: AngularFireList<any>;
  selectedEvent: Event = new Event();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.eventList = this.firebase.list('event');
    return this.eventList;
  }

  insertEvent(event: Event) {
    this.eventList.push({
        nama : event.nama,
        lokasi : event.lokasi,
        alamat : event.alamat,
        tanggal : event.tanggal,
        jam: event.jam,
        lng: event.lng,
        lat: event.lat
    });
  }

//   updateEmployee(emp : Employee){
//      this.employeeList.update(emp.$key,{
//        name : emp.name,
//        position : emp.position,
//        office : emp.office,
//        salary : emp.salary
//      })
//   }

//   deleteEmployee(key : string){
//     this.employeeList.remove(key);
//   }

}
