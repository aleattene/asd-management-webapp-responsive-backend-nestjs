import { Module } from '@nestjs/common';
import { AthletesModule } from './modules/profiles/athletes/athletes.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [AthletesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
