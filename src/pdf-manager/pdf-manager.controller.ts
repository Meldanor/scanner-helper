import { Controller, Post } from '@nestjs/common';
import { PdfManagerService } from './pdf-manager.service';

@Controller('pdf-manager')
export class PdfManagerController {
  constructor(private service: PdfManagerService) {}

  @Post('finish-scan')
  async finishScan() {
    await this.service.finishScan();
  }

  @Post('concatenate-files')
  async concatenateFiles() {
    await this.service.concatenateFiles();
  }

  @Post('merge-duplex')
  async mergeDuplex() {
    await this.service.mergeDuplex();
  }

  @Post('clear-files')
  async clearFiles() {
    await this.service.clearFiles();
  }
}
