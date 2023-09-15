import {ChangeDetectionStrategy, Component} from "@angular/core";
import {NavController} from "@ionic/angular";

@Component({
  selector: 'about-page',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPage {
  constructor(private readonly navController: NavController) {
  }

  navigateToProfile(): void {
    void this.navController.navigateForward('tabs/tab1/profile');
  }
}
