import { Controller, Get } from '@nestjs/common';

@Controller({ path: 'profiles/athletes', version: '2' })
export class AthletesController {
    @Get()
    getAthletes() {
        return [
            {
                id: 1,
                firstName: 'Mario',
                lastName: 'Rossi',
                dateOfBirth: '1980-01-01',
                placeOfBirth: 'Roma',
                fiscalCode: 'MRARSS80A01H501U',
                category: {
                    id: 1,
                    code: 'AM',
                    description: 'Allievi Maschile'
                }
            },
            {
                id: 2,
                firstName: 'Luigi',
                lastName: 'Bianchi',
                dateOfBirth: '1985-03-15',
                placeOfBirth: 'Milano',
                fiscalCode: 'LUGBNC85C15F205Z',
                category: {
                    id: 2,
                    code: 'AF',
                    description: 'Allieve Femminile'
                }
            }
        ];
    }
}
