import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  aboutTitle: string = "Wer wir sind";
  aboutText: string = "Winter Tours hat seinen Sitz auf den wunderschönen Jungferninseln. Hier betreiben wir einen quietschgelben Postkasten. Toll. Wir haben 20 Jahre Erfahrung in Skireisen & Steuervermeidung. Unser Gründer & Guru, M. Arnautovic fährt einen goldenen Sportwagen und ist stets am Boden geblieben. Werde auch DU teil der Winter Tours Familie und buche das - Einer von uns Package - und mach mit!";
  aboutBtnText: string = "Mehr erfahren";
  aboutBtnUrl: string  = "www.orf.at";

  constructor() { }

  ngOnInit(): void {
  }

}
