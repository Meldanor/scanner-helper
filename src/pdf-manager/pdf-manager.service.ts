import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { mkdirSync } from 'fs';
import { resolve } from 'path';

@Injectable()
export class PdfManagerService {
  private inputPath: string;
  private outputPath: string;

  constructor(private configService: ConfigService) {
    this.inputPath = resolve(this.configService.get<string>('INPUT_DIR'));
    this.outputPath = resolve(this.configService.get<string>('OUTPUT_DIR'));
    mkdirSync(this.inputPath, { recursive: true });
    mkdirSync(this.outputPath, { recursive: true });
  }

  moveOutput() {
    throw new Error('Method not implemented.');
  }
  concatenateFiles() {
    throw new Error('Method not implemented.');
  }
  mergeDuplex() {
    throw new Error('Method not implemented.');
  }
  clearFiles() {
    throw new Error('Method not implemented.');
  }
}
