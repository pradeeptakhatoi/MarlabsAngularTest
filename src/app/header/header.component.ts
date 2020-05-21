import { Component, OnInit, Input, ChangeDetectionStrategy, DoCheck, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  title = 'MarlabsTest';
  loading = false;

  constructor(private router: Router,  private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // ngOnInit
  }

}
