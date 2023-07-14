import { Module } from '@nestjs/common';
import { PdfManagerModule } from './pdf-manager/pdf-manager.module';

@Module({
  imports: [PdfManagerModule],
})
export class AppModule {}
