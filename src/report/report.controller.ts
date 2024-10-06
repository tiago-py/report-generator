import { Controller, Post, Body, Res } from '@nestjs/common';
import { ReportService } from './report.service';
import { Response } from 'express';

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post('excel')
  async createExcelReport(@Body() data: any[], @Res() res: Response) {
    await this.reportService.generateExcelReport(data, res);
  }

  @Post('pdf')
  async createPdfReport(@Body() data: any[], @Res() res: Response) {
    await this.reportService.generatePdfReport(data, res);
  }
}

