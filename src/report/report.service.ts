import { Injectable } from '@nestjs/common';
import * as ExcelJS from 'exceljs';
import * as PDFDocument from 'pdfkit';
import { Response } from 'express';

@Injectable()
export class ReportService {
  async generateExcelReport(data: any[], res: Response): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Relatório');

    worksheet.columns = Object.keys(data[0]).map((key) => ({ header: key, key }));

    data.forEach((item) => {
      worksheet.addRow(item);
    });

    const buffer = await workbook.xlsx.writeBuffer();

    res.setHeader('Content-Disposition', 'attachment; filename="report.xlsx"');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

    res.send(buffer); 
  }

  async generatePdfReport(data: any[], res: Response): Promise<void> {
    const doc = new PDFDocument();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="report.pdf"');

    doc.pipe(res);

    doc.fontSize(16).text('Relatório', { align: 'center' });

    data.forEach((item) => {
      Object.keys(item).forEach((key) => {
        doc.fontSize(12).text(`${key}: ${item[key]}`);
      });
      doc.moveDown();
    });

    doc.end();
  }
}
