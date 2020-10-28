import { SettingsService } from './../../services/settings.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: []
})
export class AccountSettingsComponent implements OnInit {

/*   public linkTheme = document.querySelector('#theme');
  public links: NodeListOf<Element>; */

  constructor(private settingsServices: SettingsService) { }

  ngOnInit(): void {
    this.settingsServices.checkCurrentTheme();

  }

  changeTheme(theme: string) {
    this.settingsServices.changeTheme(theme);
  }

}
