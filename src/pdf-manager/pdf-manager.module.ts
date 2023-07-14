import { Module } from '@nestjs/common';
import { PdfManagerController } from './pdf-manager.controller';
import { PdfManagerService } from './pdf-manager.service';

@Module({
  controllers: [PdfManagerController],
  providers: [PdfManagerService],
})
export class PdfManagerModule {}
