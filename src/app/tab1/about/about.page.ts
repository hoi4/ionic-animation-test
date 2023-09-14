import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'about-page',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPage {}
