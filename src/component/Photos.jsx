import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ImagePlus, X, Trash2, Download } from "lucide-react";

function Photos() {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // For modal
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setUploadedImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleRemoveImage = (index) => {
    setUploadedImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleClearAll = () => {
    setUploadedImages([]);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image); // Open modal
  };

  const closeModal = () => {
    setSelectedImage(null); // Close modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Photo Gallery</h1>
          <div className="flex items-center space-x-4">
            <Button onClick={handleUploadClick} variant="default">
              <ImagePlus className="mr-2 h-4 w-4" />
              Upload
            </Button>
            <Button onClick={handleClearAll} variant="outline">
              <Trash2 className="mr-2 h-4 w-4" />
              Clear All
            </Button>
          </div>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          multiple
          className="hidden"
        />

        {uploadedImages.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {uploadedImages.map((image, index) => (
              <div
                key={index}
                className="relative group rounded-lg overflow-hidden border border-gray-300"
              >
                <img
                  src={image}
                  alt={`Uploaded ${index + 1}`}
                  className="w-full h-40 object-cover cursor-pointer"
                  onClick={() => handleImageClick(image)}
                />
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white"
                  onClick={() => handleRemoveImage(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-64 bg-white rounded-lg shadow-inner">
            <p className="text-xl text-gray-500">No images uploaded yet. Click the upload button to add photos.</p>
          </div>
        )}
      </div>

      {/* Modal for Viewing and Downloading Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl w-full">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="p-6 flex flex-col items-center">
              <a
                href={selectedImage}
                download
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <Download className="inline-block mr-2 h-5 w-5" />
                Download Image
              </a>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 text-red-600 border border-red-600 hover:bg-red-600 hover:text-white"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Photos;
