import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { mkdirSync } from 'fs';
import { readdir, rename } from 'fs/promises';
import { join, resolve } from 'path';

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

  async finishScan() {
    const files = await readdir(this.inputPath);
    await Promise.all(
      files.map((file) => {
        const oldFile = join(this.inputPath, file);
        const newFile = join(this.outputPath, file);
        return rename(oldFile, newFile);
      }),
    );
  }
  async concatenateFiles() {
    throw new Error('Method not implemented.');
  }
  async mergeDuplex() {
    throw new Error('Method not implemented.');
  }
  async clearFiles() {
    throw new Error('Method not implemented.');
  }
}
