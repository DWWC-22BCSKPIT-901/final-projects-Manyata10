import React, { useRef, useEffect } from 'react';
import { Camera } from 'lucide-react';

interface WebcamProps {
  onStream: (stream: MediaStream) => void;
}

export const Webcam: React.FC<WebcamProps> = ({ onStream }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'user' },
          audio: false,
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        
        onStream(stream);
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [onStream]);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="rounded-lg overflow-hidden shadow-lg bg-gray-800">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-4 right-4">
        <Camera className="w-6 h-6 text-white" />
      </div>
    </div>
  );
};