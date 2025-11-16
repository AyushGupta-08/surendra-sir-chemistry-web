import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SampleNotes = () => {
  const notes = [
    {
      title: 'D & F Block Elements – Sample Notes',
      description: 'Preview and download the PDF below',
      pdfUrl: '/downloads/d_f_block_elements.pdf',
    },
    {
      title: 'Organic Chemistry – Sample Notes',
      description: 'Preview and download the PDF below',
      pdfUrl: '/downloads/organic_notes.pdf',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            📘 Sample Notes (Free Downloads)
          </h2>
          <p className="text-muted-foreground">
            Access high-quality chemistry notes for free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {notes.map((note, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 bg-card border-border overflow-hidden"
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {note.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-1">
                      {note.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* PDF Preview */}
                <div className="w-full rounded-lg overflow-hidden border border-border shadow-sm">
                  <iframe
                    src={`${note.pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="w-full h-48 md:h-56"
                    title={`Preview of ${note.title}`}
                    loading="lazy"
                  />
                </div>
                
                {/* Download Button */}
                <a 
                  href={note.pdfUrl}
                  download
                  className="block"
                >
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 hover:shadow-md text-primary-foreground font-semibold transition-all duration-200"
                    size="lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SampleNotes;
