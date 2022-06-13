import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeTitle: string = "Galtür";
  homeText: string = "Verbringe eine Woche im zauberhaften Galtür. Es werden dir über 200km Piste, Kultur und Natur geboten.";
  homeBtnText: string = "Jetzt buchen";
  homeBtnUrl: string  = "www.orf.at";
  homeImg:string = "https://images.unsplash.com/photo-1544044307-d09d2ef95e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

  homeTitle2: string = "Saalbach";
  homeText2: string = "Die beste Ski-Schaukel Österreichs. Mehr Lifte gehen gar nicht. Wir tragen alle Berge ab, damit du FUN hast!";
  homeBtnText2: string = "Jetzt buchen";
  homeBtnUrl2: string  = "www.orf.at";
  homeImg2:string = "https://images.unsplash.com/photo-1583943358657-bc6a506fe3de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80";


  constructor() { }

  ngOnInit(): void {
  }

}
