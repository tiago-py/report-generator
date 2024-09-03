import { Injectable } from '@nestjs/common';
import * as ExcelJS from 'exceljs';
import * as PDFDocument from 'pdfkit';
import { Response } from 'express';

@Injectable()
export class ReportService {
  async generateExcelReport(data: any[], res: Response): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Relatório');

    // Adiciona Cabeçalhos
    worksheet.columns = Object.keys(data[0]).map((key) => ({ header: key, key }));

    // Adiciona Dados
    data.forEach((item) => {
      worksheet.addRow(item);
    });

    // Envia o arquivo Excel na resposta
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', 'attachment; filename=report.xlsx');

    await workbook.xlsx.write(res);
    res.end();
  }

  generatePdfReport(data: any[], res: Response): void {
    const doc = new PDFDocument();

    // Configura o arquivo de resposta para PDF
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');

    doc.pipe(res);

    // Adiciona o conteúdo ao PDF
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

