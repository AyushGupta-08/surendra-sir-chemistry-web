import React from 'react';
import { Download } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SampleNotes = () => {
  const notes = [
    {
      title: 'D & F Block Elements – Sample Notes',
      description: 'Click below to download the PDF',
      pdfUrl: '/downloads/d_f_block_elements.pdf',
    },
    {
      title: 'Organic Chemistry – Sample Notes',
      description: 'Click below to download the PDF',
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
              className="hover:shadow-lg transition-shadow duration-300 bg-card border-border"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">
                  {note.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {note.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href={note.pdfUrl}
                  download
                  className="block"
                >
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
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
