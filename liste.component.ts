import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  listes:string[] = []  ;
  item:string=''
  constructor() { }
  ajouter():void{
    this.listes.push(this.item);
    this.item="";
  }
  supprimer(element:string){
    let index = this.listes.indexOf(element)
    this.listes.splice(index,1)
  }
  ngOnInit(): void {
  }

}
