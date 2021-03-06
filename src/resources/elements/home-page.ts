import { ContributionsApi } from './../../api/contributions-api'
import { autoinject } from 'aurelia-framework'
import { NotiService } from 'services/noti-service'

@autoinject
export class HomePage {
  private loading: boolean = true
  private error: boolean
  private stats: object

  constructor (private contributionsApi: ContributionsApi, private notiService: NotiService) {}

  async created () {
    try {
      this.stats = await this.contributionsApi.getStats()
    } catch (e) {
      this.error = true
      console.error(e)
    } finally {
      this.loading = false
    }
  }
}
