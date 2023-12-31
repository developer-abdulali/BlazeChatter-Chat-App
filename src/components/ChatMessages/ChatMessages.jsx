import { CircularProgress } from "@mui/material";
import React from "react";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

export default function ChatMessages({
  messages,
  user,
  roomId,
  audioId,
  setAudioId,
}) {
  const currentDate = new Date();

  const options = {
    timeZone: "Asia/Karachi",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const PakistaniDateTime = currentDate.toLocaleString("en-US", options);

  if (!messages) return null;

  return messages.map((message) => {
    const isSender = message.uid === user.uid;
    return (
      <div
        key={message.id}
        className={`chat__message ${isSender ? "chat__message--sender" : ""}`}
      >
        <span className="chat__name">{message.name}</span>
        <div className="image-container">
          {message.imageUrl === "uploading" ? (
            <div className="image__container--loader">
              <CircularProgress style={{ width: 40, height: 40 }} />
            </div>
          ) : message.imageUrl ? (
            <img src={message.imageUrl} alt={message.name} />
          ) : (
            <div className="skeleton-image"></div>
          )}
        </div>
        {message.audioName ? (
          <AudioPlayer
            sender={isSender}
            roomId={roomId}
            id={message.id}
            audioUrl={message.audioUrl}
            audioId={audioId}
            setAudioId={setAudioId}
          />
        ) : (
          <span className="chat__message--message">{message.message}</span>
        )}
        <span className="chat__timestamp">{PakistaniDateTime}</span>
      </div>
    );
  });
}
