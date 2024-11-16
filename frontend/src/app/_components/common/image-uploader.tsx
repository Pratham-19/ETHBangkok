"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { Input } from "../ui/input";

export default function ImageUpload() {
  const [previewImage, setPreviewImage] = useState<string>("/profile-picture@3x.png");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Create a URL for the uploaded image
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  return (
    <div className="relative w-[15rem] h-[15rem] cursor-pointer group" onClick={handleImageClick}>
      {/* Hidden file input */}
      <Input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleImageChange}
      />
      
      {/* Preview container */}
      <div 
        className="w-full h-full rounded-481xl overflow-hidden"
        style={{
          backgroundImage: `url(${previewImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay with camera icon */}
        <div className="w-full h-full flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
          <Image
            className="h-[7.5rem] w-[7.5rem] relative overflow-hidden shrink-0 opacity-65 group-hover:opacity-80 transition-opacity"
            src="/tablericoncamera.svg"
            alt="Upload image"
            width={500}
            height={500}
          />
        </div>
      </div>
      
      {/* Optional loading state overlay */}
      {/* <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="loading-spinner" />
      </div> */}
    </div>
  );
}