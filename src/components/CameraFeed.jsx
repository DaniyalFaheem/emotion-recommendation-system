'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { Camera, CameraOff, Loader2, AlertCircle } from 'lucide-react';

/**
 * CameraFeed Component
 * Handles webcam access and face-api.js integration for real-time emotion detection
 * 
 * @param {Object} props
 * @param {Function} props.onEmotionDetected - Callback when emotion is detected
 * @param {boolean} props.isActive - Whether the camera should be active
 * @param {Function} props.onToggle - Toggle camera on/off
 */
export default function CameraFeed({ onEmotionDetected, isActive, onToggle }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const animationRef = useRef(null);
  const faceapiRef = useRef(null);
  
  const [isLoading, setIsLoading] = useState(false);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [cameraStatus, setCameraStatus] = useState('idle'); // idle, loading, active, error

  // Load face-api.js models on mount
  useEffect(() => {
    async function loadModels() {
      try {
        setIsLoading(true);
        setError(null);

        // Dynamically import face-api.js to avoid SSR issues
        const faceapi = await import('face-api.js');
        faceapiRef.current = faceapi;

        // Model path - should be in public/models
        const MODEL_URL = '/models';

        // Load required models
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]);

        setModelsLoaded(true);
        console.log('Face-api.js models loaded successfully');
      } catch (err) {
        console.error('Error loading face-api.js models:', err);
        setError('Failed to load face detection models. Please ensure the models are in the public/models directory.');
      } finally {
        setIsLoading(false);
      }
    }

    loadModels();

    // Cleanup on unmount
    return () => {
      stopCamera();
    };
  }, []);

  // Start camera when isActive becomes true
  useEffect(() => {
    if (isActive && modelsLoaded) {
      startCamera();
    } else if (!isActive) {
      stopCamera();
    }
  }, [isActive, modelsLoaded]);

  const startCamera = useCallback(async () => {
    try {
      setCameraStatus('loading');
      setError(null);

      // Request camera access
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: 'user',
        },
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setCameraStatus('active');

        // Start face detection loop
        startDetection();
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      setCameraStatus('error');

      if (err.name === 'NotAllowedError') {
        setError('Camera access denied. Please allow camera access in your browser settings.');
      } else if (err.name === 'NotFoundError') {
        setError('No camera found. Please connect a camera and try again.');
      } else if (err.name === 'NotReadableError') {
        setError('Camera is in use by another application.');
      } else {
        setError('Failed to access camera. Please ensure HTTPS is enabled for camera access.');
      }

      onToggle?.(false);
    }
  }, [onToggle]);

  const stopCamera = useCallback(() => {
    // Stop the animation frame
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }

    // Stop all video tracks
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    // Clear video source
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    // Clear canvas
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }

    setCameraStatus('idle');
  }, []);

  const startDetection = useCallback(() => {
    const faceapi = faceapiRef.current;
    if (!faceapi || !videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let lastDetectionTime = 0;
    const detectionInterval = 1000; // Detect every 1 second

    const detect = async (timestamp) => {
      if (!streamRef.current) return;

      // Only run detection every 1 second
      if (timestamp - lastDetectionTime >= detectionInterval) {
        lastDetectionTime = timestamp;

        try {
          // Match canvas size to video
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;

          // Clear previous drawings
          ctx.clearRect(0, 0, canvas.width, canvas.height);

          // Detect faces with expressions
          const detections = await faceapi
            .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions();

          if (detections && detections.length > 0) {
            // Use the first detected face
            const detection = detections[0];

            // Draw detection box
            const { x, y, width, height } = detection.detection.box;
            ctx.strokeStyle = '#22c55e';
            ctx.lineWidth = 3;
            ctx.strokeRect(x, y, width, height);

            // Draw facial landmarks as dots
            ctx.fillStyle = '#22c55e';
            detection.landmarks.positions.forEach((point) => {
              ctx.beginPath();
              ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI);
              ctx.fill();
            });

            // Send expressions to parent component
            if (detection.expressions) {
              onEmotionDetected?.(detection.expressions);
            }
          } else {
            // No face detected - notify parent
            onEmotionDetected?.(null);
          }
        } catch (err) {
          console.error('Detection error:', err);
        }
      }

      // Continue the loop
      animationRef.current = requestAnimationFrame(detect);
    };

    animationRef.current = requestAnimationFrame(detect);
  }, [onEmotionDetected]);

  const handleToggle = () => {
    onToggle?.(!isActive);
  };

  return (
    <div className="w-full max-w-xl mx-auto" role="region" aria-label="Camera Feed">
      {/* Camera container */}
      <div className="relative rounded-2xl overflow-hidden glass">
        {/* Loading state - models loading */}
        {isLoading && (
          <div className="aspect-video flex flex-col items-center justify-center bg-gray-900/50 p-8">
            <Loader2 className="w-12 h-12 text-white animate-spin mb-4" aria-hidden="true" />
            <p className="text-white text-center">Loading face detection models...</p>
            <p className="text-gray-400 text-sm mt-2">This may take a moment</p>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="aspect-video flex flex-col items-center justify-center bg-red-900/20 p-8">
            <AlertCircle className="w-12 h-12 text-red-400 mb-4" aria-hidden="true" />
            <p className="text-red-300 text-center font-medium mb-2">Camera Error</p>
            <p className="text-red-200/80 text-sm text-center max-w-sm">{error}</p>
          </div>
        )}

        {/* Camera loading state */}
        {cameraStatus === 'loading' && !error && (
          <div className="aspect-video flex flex-col items-center justify-center bg-gray-900/50 p-8">
            <Loader2 className="w-12 h-12 text-white animate-spin mb-4" aria-hidden="true" />
            <p className="text-white text-center">Starting camera...</p>
          </div>
        )}

        {/* Video feed */}
        <div
          className={`video-container ${cameraStatus !== 'active' ? 'hidden' : ''}`}
          style={{ aspectRatio: '4/3' }}
        >
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover transform scale-x-[-1]"
            aria-label="Webcam video feed"
          />
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full transform scale-x-[-1]"
            aria-hidden="true"
          />
        </div>

        {/* Idle state - camera off */}
        {!isLoading && !error && cameraStatus === 'idle' && modelsLoaded && (
          <div className="aspect-video flex flex-col items-center justify-center bg-gray-900/50 p-8">
            <CameraOff className="w-16 h-16 text-gray-400 mb-4" aria-hidden="true" />
            <p className="text-gray-300 text-center mb-2">Camera is off</p>
            <p className="text-gray-500 text-sm text-center">
              Click the button below to start emotion detection
            </p>
          </div>
        )}
      </div>

      {/* Camera toggle button */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={handleToggle}
          disabled={isLoading || !modelsLoaded}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
            transition-all duration-300 transform hover:scale-105
            disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
            ${isActive
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-green-500 hover:bg-green-600 text-white'
            }
          `}
          aria-label={isActive ? 'Stop camera' : 'Start camera'}
        >
          {isActive ? (
            <>
              <CameraOff className="w-5 h-5" aria-hidden="true" />
              Stop Camera
            </>
          ) : (
            <>
              <Camera className="w-5 h-5" aria-hidden="true" />
              Start Camera
            </>
          )}
        </button>
      </div>

      {/* Camera status indicator */}
      {cameraStatus === 'active' && (
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" aria-hidden="true" />
          <span className="text-green-400 text-sm">Live - Detecting emotions</span>
        </div>
      )}
    </div>
  );
}
