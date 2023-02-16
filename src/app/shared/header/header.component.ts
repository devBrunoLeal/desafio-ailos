import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  page: string = '';
  breadcrumb: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    // Monitora as trocas de rotas para alterar o breadcrumb e nome da página.

    this.router.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        const data = this.router.routerState.root.firstChild?.data;
        data?.subscribe(value => {
            this.page = value.page;
            this.breadcrumb = value.breadcrumb
        })
      }
    })
  }

}
