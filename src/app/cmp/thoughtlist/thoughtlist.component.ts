import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thoughtlist',
  templateUrl: './thoughtlist.component.html',
  styleUrls: ['./thoughtlist.component.css']
})
export class ThoughtlistComponent implements OnInit {
  list = [
  
      {
        text: 'Well, thats a first',
        createdBy: 'SomeGuy',
        comments: [
          {
            text: 'calling first is stupid',
            createdBy: 'SomeOtherGuy',
            comments: []
          }
        ],
        shares: [
          'NotJustSomeGuy'
        ]
      },
  
      {
        text: 'Woot, second',
        createdBy: 'SomeOtherGuy',
        comments: [
          {
            text: 'calling second is stupider',
            createdBy: 'SomeOtherGuy',
            comments: []
          }
        ],
        shares: [
          'NotJustSomeGuy'
        ]
      },
  
      {
        text: 'I\'ll share anything\!',
        createdBy: 'NotJustSomeGuy',
        comments: [
          {
            text: 'cool',
            createdBy: 'SomeGuy',
            comments: []
          }
        ],
        shares: [
          'NotJustSomeGuy'
        ]
      },
  
      {
        text: 'Does anyone have anything meaningful to say?',
        createdBy: 'Shitposter',
        comments: [
          {
            text: 'Wah',
            createdBy: 'Antagonotron',
            comments: [
              {
                text: 'Does anyone have anything meaningful to say?',
                createdBy: 'Shitposter',
                comments: [
                  {
                    text: 'Woweeeee this is a suuuuuuuuuuuuuuuuuuuuuuuuuuuper looooooooooooooong comment, I don\'t know how its going to look lets check er out!',
                    createdBy: 'Antagonotron',
                    comments: [
                      {
                        text: 'Does anyone have anything meaningful to say?',
                        createdBy: 'Shitposter',
                        comments: [
                          {
                            text: 'Wah',
                            createdBy: 'Antagonotron',
                            comments: []
                          }
                        ]
                      }
                    ]
                  }
                ]
              }   
            ]
          }
        ],
        shares: [
          'NotJustSomeGuy'
        ]
      }

  ];
  odd = false;
  constructor() { }

  ngOnInit() {
  }

  testOdd(){
    this.odd = !this.odd;
    return this.odd;
  }

}