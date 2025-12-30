/**
 * MERCHANT IMPORT ORDERS PAGE
 * Excel file upload UI
 */

import { useState, useRef } from 'react';
import { Upload, FileSpreadsheet, Download, CheckCircle, AlertCircle } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

export default function MerchantImport() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<{ success: boolean; count: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleFile = (file: File) => {
    // Validate file type
    const validTypes = [
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel',
      'text/csv',
    ];
    
    if (!validTypes.includes(file.type) && !file.name.endsWith('.xlsx') && !file.name.endsWith('.csv')) {
      toast({
        title: 'Invalid File Type',
        description: 'Please upload an Excel (.xlsx) or CSV file.',
        variant: 'destructive',
      });
      return;
    }

    setUploadedFile(file);
    setUploadResult(null);
  };

  const handleUpload = async () => {
    if (!uploadedFile) return;

    setIsUploading(true);

    // Simulate API upload
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const result = {
      success: true,
      count: Math.floor(Math.random() * 50) + 10,
    };

    setUploadResult(result);
    setIsUploading(false);

    toast({
      title: 'Import Successful',
      description: `${result.count} orders have been imported successfully.`,
    });
  };

  const resetUpload = () => {
    setUploadedFile(null);
    setUploadResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <PageHeader
        title="Import Orders"
        description="Upload an Excel file to create multiple orders at once"
      />

      {/* Template Download */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <FileSpreadsheet className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold">Download Template</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Use our Excel template to ensure your data is formatted correctly for import.
            </p>
            <Button variant="outline" size="sm" className="mt-3">
              <Download className="mr-2 h-4 w-4" />
              Download Template
            </Button>
          </div>
        </div>
      </div>

      {/* Upload Area */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="font-semibold mb-4">Upload Orders File</h3>

        {!uploadedFile ? (
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={cn(
              'border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all',
              isDragging
                ? 'border-accent bg-accent/5'
                : 'border-border hover:border-accent/50 hover:bg-muted/30'
            )}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                <Upload className="h-7 w-7 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium">
                  Drop your file here, or{' '}
                  <span className="text-accent">browse</span>
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Supports .xlsx and .csv files
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* File Info */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <FileSpreadsheet className="h-6 w-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{uploadedFile.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(uploadedFile.size / 1024).toFixed(1)} KB
                </p>
              </div>
              {!uploadResult && (
                <Button variant="ghost" size="sm" onClick={resetUpload}>
                  Remove
                </Button>
              )}
            </div>

            {/* Upload Result */}
            {uploadResult && (
              <div className={cn(
                'flex items-center gap-3 p-4 rounded-lg',
                uploadResult.success ? 'bg-success/10' : 'bg-destructive/10'
              )}>
                {uploadResult.success ? (
                  <CheckCircle className="h-5 w-5 text-success" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-destructive" />
                )}
                <div>
                  <p className={cn(
                    'font-medium',
                    uploadResult.success ? 'text-success' : 'text-destructive'
                  )}>
                    {uploadResult.success ? 'Import Successful' : 'Import Failed'}
                  </p>
                  {uploadResult.success && (
                    <p className="text-sm text-muted-foreground">
                      {uploadResult.count} orders imported successfully
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              {!uploadResult ? (
                <>
                  <Button variant="outline" onClick={resetUpload}>
                    Cancel
                  </Button>
                  <Button
                    className="bg-accent hover:bg-accent/90 text-accent-foreground"
                    onClick={handleUpload}
                    disabled={isUploading}
                  >
                    {isUploading ? 'Uploading...' : 'Upload & Import'}
                  </Button>
                </>
              ) : (
                <Button
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  onClick={resetUpload}
                >
                  Upload Another File
                </Button>
              )}
            </div>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {/* Instructions */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="font-semibold mb-3">Import Guidelines</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">•</span>
            Each row represents one order
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">•</span>
            Required columns: Customer Name, Phone, Address, City, COD Amount
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">•</span>
            Optional columns: Notes
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent mt-0.5">•</span>
            Maximum 500 orders per file
          </li>
        </ul>
      </div>
    </div>
  );
}
