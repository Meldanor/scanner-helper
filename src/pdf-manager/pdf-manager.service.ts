import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { mkdirSync } from 'fs';
import { readdir, rename, rm } from 'fs/promises';
import { join, resolve } from 'path';
import PDFMerger = require('pdf-merger-js');

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
    const merger = new PDFMerger();

    const inputFiles = await readdir(this.inputPath);
    if (inputFiles.length === 0) {
      console.warn('No files in input dir to concatenate');
      return;
    }
    await Promise.all(
      inputFiles.map(async (file) => {
        await merger.add(join(this.inputPath, file));
      }),
    );

    // Serialize the PDFDocument to bytes (a Uint8Array)
    await merger.save(join(this.outputPath, inputFiles[0]));
    await this.clearFiles();
  }
  async mergeDuplex() {
    throw new Error('Method not implemented.');
  }
  async clearFiles() {
    const files = await readdir(this.inputPath);
    await Promise.all(
      files.map((file) => {
        return rm(join(this.inputPath, file));
      }),
    );
  }
}
