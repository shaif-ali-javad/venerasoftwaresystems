import React, { useState } from "react";
import "./camera.css"
import img0 from "../assets/v915-mynt-008-d.jpg";



const Camera = () => {
  const [url, setUrl] = useState(null);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);

  const capturePhoto = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const track = stream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(track);
      const photo = await imageCapture.takePhoto();
      const photoURL = URL.createObjectURL(photo);
      setUrl(photoURL);
      track.stop();  // Stop the video stream after capturing the photo

      // Automatically save the photo
      const link = document.createElement("a");
      link.href = photoURL;
      link.download = "captured-photo.png";
      link.click();
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const handleClick = (event) => {
    setClickPosition({ x: event.clientX, y: event.clientY });
    setIsPhotoTaken(true);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        cursor: "crosshair",
      }}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();  // Prevent the button click from triggering the handleClick event
          capturePhoto();
        }}
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 10,
        }}
      >
        photo
      </button>

      {isPhotoTaken && url && (
        <img
          src={url}
          alt="captured"
          style={{
            position: "absolute",
            left: clickPosition.x - 125,  // Adjust to center the image
            top: clickPosition.y - 125,  // Adjust to center the image
            width: 250,
            height: 250,
            objectFit: "contain",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
      <div className="gb">
        <img src={img0} alt="" className="gb-img" />
      </div>
    </div>
  );
};

export default Camera;
