import { DbService } from './services/db-service'
import { AuthService } from './services/auth-service'
import { autoinject } from 'aurelia-dependency-injection'
import { PLATFORM } from 'aurelia-pal'
import {Router, RouterConfiguration} from 'aurelia-router'
import { viewResources } from 'aurelia-framework'
import { AuthorizeStep } from './resources/steps/authorize-step'
import firebase from '@firebase/app'
import routes from './routes'

@autoinject
@viewResources(PLATFORM.moduleName('semantic-ui-css/semantic.min'))
export class App {
  private router: Router

  constructor (private authService: AuthService, private dbService: DbService) {}

  created () {
    this.authService.configure()
    this.dbService.configure()
  }

  configureRouter (config: RouterConfiguration, router: Router): void {
    this.router = router
    config.title = 'Burmese Lexicon'
    config.addAuthorizeStep(AuthorizeStep)
    config.map(routes)
  }

  handleNavClick = () => {
    jQuery('.sidebar').sidebar('hide')
    return true
  }
}
