import { Controller, Get } from '@nestjs/common';
import { AthletesService } from './athletes.service';

@Controller({ path: 'profiles/athletes', version: '2' })
export class AthletesController {
	constructor(private readonly athletesService: AthletesService) {}

	@Get()
	getAthletes() {
		return this.athletesService.getAthletes();
	}
}
