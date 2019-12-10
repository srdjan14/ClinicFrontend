import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public name: string,
    public description: string,
  ) { }
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  //todos: Todo[]

  todos = [{ id: 1, name: 'ime1', description: 'opiss' },
  { id: 2, name: 'ime2', description: 'asfasf' },
  { id: 3, name: 'ime3', description: 'asfsaf' }
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getId(id) {
    console.log(id);
    this.router.navigate(['/auth/login', id]);
  }


}
