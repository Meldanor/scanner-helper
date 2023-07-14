import { Module } from '@nestjs/common';
import { PdfManagerModule } from './pdf-manager/pdf-manager.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PdfManagerModule, ConfigModule.forRoot({ envFilePath: '.env' })],
})
export class AppModule {}
