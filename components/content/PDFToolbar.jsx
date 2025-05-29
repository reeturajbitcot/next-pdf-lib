import React from "react";
import { Button } from "../ui/button";
import { ZoomIn, ZoomOut, Download, RotateCw } from "lucide-react";

const PDFToolbar = ({ onZoomIn, onZoomOut, onDownload, onRotate }) => {
  return (
    <div className="flex items-center gap-2 p-2 bg-white border-b">
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={onZoomOut}
          title="Zoom Out"
          className="hover:bg-gray-100"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={onZoomIn}
          title="Zoom In"
          className="hover:bg-gray-100"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>

      <Button
        variant="ghost"
        size="icon"
        onClick={onRotate}
        title="Rotate"
        className="hover:bg-gray-100"
      >
        <RotateCw className="h-4 w-4" />
      </Button>

      <div className="flex-1" />

      <Button
        variant="ghost"
        size="icon"
        onClick={onDownload}
        title="Download PDF"
        className="hover:bg-gray-100"
      >
        <Download className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default PDFToolbar; 