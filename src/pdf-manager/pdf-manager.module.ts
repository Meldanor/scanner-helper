import { Module } from '@nestjs/common';
import { PdfManagerController } from './pdf-manager.controller';
import { PdfManagerService } from './pdf-manager.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [PdfManagerController],
  providers: [PdfManagerService],
  imports: [ConfigModule],
})
export class PdfManagerModule {}
