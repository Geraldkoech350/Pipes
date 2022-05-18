import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverse-char',
  templateUrl: './reverse-char.component.html',
  styleUrls: ['./reverse-char.component.css']
})
export class ReverseCharComponent implements OnInit {

  public text: string ="Gerald Koech"

  constructor() { }

  ngOnInit(): void {
  }

}
