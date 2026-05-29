import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './app-hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHero {
  private countryService = inject(CountryService);

  countryResource = rxResource({
    stream: () => this.countryService.getItems(),
  });
}