import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page-doctor',
  templateUrl: './home-page-doctor.component.html',
  styleUrls: ['./home-page-doctor.component.css']
})
export class HomePageDoctorComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  goToList() {
    const id = this.route.snapshot.params.id;
    this.router.navigate(['/app/doctor/list', id]);
  }

}
