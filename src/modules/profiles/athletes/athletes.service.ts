import { Injectable } from '@nestjs/common';

@Injectable()
export class AthletesService {
	async getAthletes() {
		return data;
	}
}

const data = [
	{
		id: 1,
		first_name: 'Marco',
		last_name: 'Rossi',
		date_of_birth: '1988-09-10',
		place_of_birth: 'Roma',
		fiscal_code: 'MLSFGR56T34J654T',
		category: 2,
	},
	{
		id: 2,
		first_name: 'Davide',
		last_name: 'Marcolini',
		date_of_birth: '2008-09-04',
		place_of_birth: 'Ostia',
		fiscal_code: 'DVBTHJ04F10Y543W',
		category: 1,
	},
];
