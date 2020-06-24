import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NavCollapseService } from 'src/app/services/nav-collapse.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  public isCollapsed = true;
  public uiBasicCollapsed = false;
  public uiBasicCollapsedr = false;
  constructor(private router: Router, private navservice: NavCollapseService) { }

  ngOnInit() {
  }

  // Logout User
  public DoLogout() {
    this.router.navigate(['/login']);
  }

  sidebarToggle(): void {
    this.navservice.sidebarToggle();
    this.navservice.setNavCollapse(false);
  }

}
