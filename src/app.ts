import { PLATFORM } from 'aurelia-pal';
import {Router, RouterConfiguration} from 'aurelia-router';
import { viewResources } from "aurelia-framework";

@viewResources(PLATFORM.moduleName('semantic-ui-css/semantic.min'))
export class App {
  private router: Router

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router
    config.title = 'Aurelia';
    config.map([
      {
        route: [
          '',
          'home'
        ],
        name: 'home',
        moduleId: PLATFORM.moduleName('./resources/elements/home-page'),
        nav: true,
        title: 'Burmese Lexicon',
        settings: {
          icon: 'book',
          iconColor: 'red'
        }
      },
      {
        route: 'words',
        name: 'words',
        moduleId: PLATFORM.moduleName('./resources/elements/words-page'),
        nav: true,
        title: 'Words',
        settings: {
          icon: 'list',
          iconColor: 'green'
        }
      },
      {
        route: 'contributors',
        name: 'contributors',
        moduleId: PLATFORM.moduleName('./resources/elements/contributors-page'),
        nav: true,
        title: 'Top Contributors',
        settings: {
          icon: 'trophy',
          iconColor: 'gold'
        }
      },
    ]);
  }
}
