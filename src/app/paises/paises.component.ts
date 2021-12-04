import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
})
export class PaisesComponent implements OnInit {
  paises: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://restcountries.com/v2/lang/es')
      .subscribe((paises) => (this.paises = paises));
  }

  drop(evento: CdkDragDrop<any>) {
    //console.log('OK', evento);
    moveItemInArray(this.paises, evento.previousIndex, evento.currentIndex);
  }
}
