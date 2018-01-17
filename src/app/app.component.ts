import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor( ) { }

  ngOnInit() {

    // window.location.href =
    // 'https://dribbble.com/oauth/authorize?client_id=a3f9ec31788a8a46e08be755a9ff17c2bf918f10e7ddfb4ecf929bb8d2bea2bc&scope=';
  }
}
