import { AddPhotoAlternate, MoreVert } from "@mui/icons-material";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useRooms from "src/Hooks/useRoom";
import MediaPreview from "../MediaPreview/MediaPreview";
import ChatFooter from "../ChatFooter/ChatFooter";
import {
  collection,
  doc,
  serverTimestamp,
  setDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import Compressor from "compressorjs";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "@/utils/firebase";
import { nanoid } from "nanoid";

const Chat = ({ user }) => {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [input, setInput] = useState("");
  const [src, setSrc] = useState("");
  const roomId = router.query.roomId ?? "";
  const userId = user.uid;
  const room = useRooms(roomId, userId);
  const showPreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setSrc(reader.result);
      };
    }
  };
  const closePreview = () => {
    setSrc("");
    setImage(null);
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    setInput("");
    if (image) closePreview();
    const imageName = nanoid();

    await setDoc(doc(db, `users/${userId}/chats/${roomId}`), {
      name: room.name,
      photoURL: room.photoURL || null,
      timestamp: serverTimestamp(),
    });
    const newDoc = await addDoc(collection(db, `rooms/${roomId}/messages`), {
      name: user.displayName,
      message: input,
      uid: user.uid,
      timestamp: serverTimestamp(),
      time: new Date().toUTCString(),
      ...(image ? { imageUrl: "uploading", imageName } : {}),
    });
    if (image) {
      new Compressor(image, {
        quality: 0.8,
        width: 1920,
        async success(result) {
          setSrc(""),
            setImage(null),
            await uploadBytes(ref(storage, `images/${imageName}`), result);
          const url = await getDownloadURL(ref(storage, `images/${imageName}`));
          await updateDoc(doc(db, `rooms/${roomId}/messages/${newDoc.id}`), {
            imageUrl: url,
          });
        },
      });
    }
  };

  if (!room) return null;

  return (
    <div className="chat">
      <div className="chat__background" />
      {/* chat header */}
      <div className="chat__header">
        <div className="avatar__container">
          <Avatar src={room.photoURL} alt={room.name} />
        </div>
        <div className="chat__header--info">
          <h3>{room.name}</h3>
        </div>
        <div className="chat__header--right">
          <input
            type="file"
            style={{ display: "none" }}
            accept="image/*"
            id="image"
            onChange={showPreview}
          />
          {/* select img icon */}
          <IconButton>
            <label style={{ cursor: "pointer", height: 24 }} htmlFor="image">
              <AddPhotoAlternate />
            </label>
          </IconButton>
          {/* three dots */}
          <IconButton>
            <MoreVert />
          </IconButton>
          <Menu id="menu" keepMounted open={false}>
            <MenuItem>Delete Room</MenuItem>
          </Menu>
        </div>
      </div>
      <MediaPreview src={src} closePreview={closePreview} />
      <ChatFooter
        input={input}
        onChange={(e) => setInput(e.target.value)}
        image={image}
        user={user}
        room={room}
        roomId={roomId}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default Chat;
