import React, { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { ImagePlus, X, Grid, Columns, Trash2 } from 'lucide-react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

function Photos() {
  const [uploadedImages, setUploadedImages] = useState([])
  const [layout, setLayout] = useState('grid')
  const fileInputRef = useRef(null)

  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files)
    const newImages = files.map(file => URL.createObjectURL(file))
    setUploadedImages(prevImages => [...prevImages, ...newImages])
  }

  const handleRemoveImage = (index) => {
    setUploadedImages(prevImages => prevImages.filter((_, i) => i !== index))
  }

  const handleClearAll = () => {
    setUploadedImages([])
  }

  return (
    (<div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0">Photo Gallery</h1>
          <div className="flex items-center space-x-4">
            <ToggleGroup
              type="single"
              value={layout}
              onValueChange={(value) => value && setLayout(value)}>
              <ToggleGroupItem value="grid" aria-label="Grid layout">
                <Grid className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="columns" aria-label="Columns layout">
                <Columns className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
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
          className="hidden" />

        {uploadedImages.length > 0 ? (
          <div
            className={`
              ${layout === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
                : 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6'
              }
            `}>
            {uploadedImages.map((image, index) => (
              <div
                key={index}
                className={`
                  relative group mb-6 overflow-hidden rounded-lg
                  ${layout === 'grid' ? 'aspect-square' : 'break-inside-avoid'}
                `}>
                <img
                  src={image}
                  alt={`Uploaded ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300">
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleRemoveImage(index)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="flex items-center justify-center h-64 bg-white rounded-lg shadow-inner">
            <p className="text-xl text-gray-500">No images uploaded yet. Click the upload button to add photos.</p>
          </div>
        )}
      </div>
    </div>)
  );
}

export default Photos

