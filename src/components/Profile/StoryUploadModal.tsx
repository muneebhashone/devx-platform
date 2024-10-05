"use client";

import React, { useState, useRef } from "react";
import { X, Upload } from "lucide-react";
import { Button } from "../ui/button";

interface StoryUploadModalProps {
  onClose: () => void;
  onUpload: (file: File) => void;
}

const StoryUploadModal: React.FC<StoryUploadModalProps> = ({ onClose, onUpload }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Upload Story</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="mb-4">
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" className="w-full h-64 object-cover rounded-lg" />
          ) : (
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
              <Upload size={48} className="text-gray-400" />
            </div>
          )}
        </div>
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
        />
        <div className="flex justify-between">
          <Button
            onClick={() => fileInputRef.current?.click()}
            variant="outline"
            className="w-1/2 mr-2"
          >
            Select File
          </Button>
          <Button
            onClick={handleUpload}
            disabled={!selectedFile}
            className="w-1/2 ml-2"
          >
            Upload Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryUploadModal;