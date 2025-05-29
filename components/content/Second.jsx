"use client";
import { PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "./MyDocument";
import { useState } from "react";
import PDFToolbar from "./PDFToolbar";

const Second = () => {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.1, 2));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.1, 0.5));
  };

  const handleRotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const handleDownload = async () => {
    try {
      const blob = await fetch('/api/generate-pdf').then(res => res.blob());
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'document.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div className="flex-1 flex h-full flex-col">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Select prompt</h2>
        <p>Enter the basic information for your project.</p>
      </div>

      <div className="flex-1 h-full flex flex-col border rounded-lg overflow-hidden">
        <PDFToolbar
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onRotate={handleRotate}
          onDownload={handleDownload}
        />
        <div className="flex-1 relative">
          <PDFViewer 
            className="w-full h-full"
            // showToolbar={false}
            width="100%"
            height="100%"
            style={{
              transform: `scale(${scale}) rotate(${rotation}deg)`,
              transformOrigin: 'center center',
              transition: 'transform 0.2s ease-in-out'
            }}
          >
            <MyDocument />
          </PDFViewer>
        </div>
      </div>
    </div>
  );
};

export default Second;
