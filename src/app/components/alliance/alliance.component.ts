import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alliance',
  templateUrl: './alliance.component.html',
  styleUrls: ['./alliance.component.scss']
})
export class AllianceComponent implements OnInit {

  players : IPlayer[] = [
    {
      name : 'Jon Snow',
      img : './../../assets/images/jon-snow.jpg',
    },
        {
      name : 'Sansa Stark',
      img : './../../assets/images/sansa.jpg',
    },
        {
      name : 'Arya Stark',
      img : './../../assets/images/arya.jpg',
    },
        {
      name : 'Bran Stark',
      img : './../../assets/images/Bran_Stark.jpg',
    },
        {
      name : 'Cersei Lannister',
      img : './../../assets/images/jon-snow.jpg',
    },
        {
      name : 'Jamie Lannister',
      img : './../../assets/images/jon-snow.jpg',
    },
        {
      name : 'Tyrion Lannister',
      img : './../../assets/images/jon-snow.jpg',
    },
        {
      name : 'Daenerys Targaryen',
      img : './../../assets/images/jon-snow.jpg',
    },
        {
      name : 'Petyr Baelish',
      img : './../../assets/images/jon-snow.jpg',
    },
        {
      name : 'Varys',
      img : './../../assets/images/jon-snow.jpg',
    },
        {
      name : 'Melisandre',
      img : './../../assets/images/jon-snow.jpg',
    },
        {
      name : 'Theon Greyjoy',
      img : './../../assets/images/jon-snow.jpg',
    },
            {
      name : 'Euron Greyjoy',
      img : './../../assets/images/jon-snow.jpg',
    },
            {
      name : 'Brienne',
      img : './../../assets/images/jon-snow.jpg',
    },
            {
      name : 'Bronn',
      img : './../../assets/images/jon-snow.jpg',
    },
            {
      name : 'Hound',
      img : './../../assets/images/jon-snow.jpg',
    },
            {
      name : 'Davos',
      img : './../../assets/images/jon-snow.jpg',
    },
            {
      name : 'Jorah Mormont',
      img : './../../assets/images/jon-snow.jpg',
    },
            {
      name : 'Ellaria Sand',
      img : './../../assets/images/jon-snow.jpg',
    },
            {
      name : 'Olenna Tyrell',
      img : './../../assets/images/jon-snow.jpg',
    }
    ,{
      name : 'Tormund',
      img : './../../assets/images/jon-snow.jpg',
    }
    ,{
      name : 'Samwell Tarly',
      img : './../../assets/images/jon-snow.jpg',
    }
        ,{
      name : 'Qyburn',
      img : './../../assets/images/jon-snow.jpg',
    }        ,{
      name : 'Lyanna Mormont',
      img : './../../assets/images/jon-snow.jpg',
    }

    



  ];

  themeSource = '../../../assets/music/got_theme_01.mp3'

  constructor() { }

  ngOnInit() {
  }

}

export interface IPlayer{
  name : String,
  img : String
}