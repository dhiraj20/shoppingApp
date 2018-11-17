import { Component, OnInit } from '@angular/core';
import { SidenavMenuService } from '../theme/components/sidenav-menu/sidenav-menu.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [SidenavMenuService]
})
export class PagesComponent implements OnInit {

  public sidenavMenuItems: Array<any>;

  constructor(private sidenavMenuService: SidenavMenuService) { }

  ngOnInit() {
    this.sidenavMenuItems = this.sidenavMenuService.getSidenavMenuItems();
  }

}
