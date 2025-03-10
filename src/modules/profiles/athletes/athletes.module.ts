import { Module } from '@nestjs/common';
import { AthletesController } from './athletes.controller';

@Module({
    controllers: [AthletesController],
})
export class AthletesModule {}
