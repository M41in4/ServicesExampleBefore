import { Component, OnInit, ViewContainerRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ToastsManager } from 'ng2-toastr';
// import { UserService } from '../../core/user/user.service';
import { Page } from '../../model/index';
import { User } from '../../model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  maxSize = 4;
  user: string;
  page: Page = new Page();

  constructor(
    // private authService: AuthService,
    // private userService: UserService,
    private router: Router,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser')).email;
    this.getUsers(this.page.pageNumber);
  }

  logout() {
    // this.authService.logout();
    // this.router.navigate(['/login']);
  }

  getUsers(pageNumber: number) {
    // this.userService.getUsers(pageNumber)
    // .subscribe((response: any) => {
    //   this.page = response;
    //   this.toastr.success('Users are loaded successfully.', 'Success');
    // }, error => {
    //   this.toastr.error(error, 'Error');
    // });
  }

  pageChanged($event) {
    this.getUsers($event);
  }
}
