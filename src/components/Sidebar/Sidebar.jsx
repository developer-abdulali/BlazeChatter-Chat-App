import {
  Add,
  ExitToApp,
  Home,
  Message,
  PeopleAlt,
  SearchOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import SidebarTab from "../SidebarTab/SidebarTab";
import SidebarList from "../SidebarList/SidebarList";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import { auth, db } from "@/utils/firebase";
import useRooms from "src/Hooks/useRooms";

const tabs = [
  {
    id: 1,
    icon: <Home />,
  },
  {
    id: 2,
    icon: <Message />,
  },
  {
    id: 3,
    icon: <PeopleAlt />,
  },
];

const Sidebar = ({ user }) => {
  const [menu, setMenu] = useState(1);
  const [creatingRoom, setCreatingRoom] = useState(false);
  const [roomName, setRoomName] = useState("");
  const router = useRouter();
  const rooms = useRooms();

  console.log("ROOMS data fetching successfully",rooms)
  const data = [
    {
      id: 1,
      name: "Ali",
      photoURL:
        "https://lh3.googleusercontent.com/a/ACg8ocIxxiEnHWnyIzrfxURoSC858hQRDTu74SxiPorSv8zy=s96-c",
    },
  ];

  async function createRoom() {
    if (roomName?.trim()) {
      const roomsRef = collection(db, "rooms");
      const newRoom = await addDoc(roomsRef, {
        name: roomName,
        timestamp: serverTimestamp(),
      });
      setCreatingRoom(false);
      setRoomName("");
      setMenu(2);
      router.push(`/?roomId=${newRoom.id}`);
    }
  }

  return (
    <div className="sidebar">
      {/* hearder */}
      <div className="sidebar__header">
        <div className="sidebar__header--left">
          <Avatar src={user.photoURL} alt={user.displayName} />
          <h4>{user.displayName}</h4>
        </div>
        <div className="sidebar__header--right">
          <IconButton onClick={() => auth.signOut()}>
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      {/* search */}
      <div className="sidebar__search">
        <form className="sidebar__search--container">
          <SearchOutlined />
          <input
            type="text"
            id="search"
            placeholder="Search for user or rooms"
          />
        </form>
      </div>

      {/* sidebar tabs */}
      <div className="sidebar__menu">
        {tabs.map((tab) => (
          <SidebarTab
            key={tab.id}
            onClick={() => setMenu(tab.id)}
            isActive={tab.id === menu}
          >
            <div className="sidebar__menu--home">
              {tab.icon}
              <div className="sidebar__menu--line" />
            </div>
          </SidebarTab>
        ))}
      </div>

      {/* Tabs Chat, Rooms, User  */}
      {menu === 1 ? (
        <SidebarList title="Chats" data={data} />
      ) : menu === 2 ? (
        <SidebarList title="Rooms" data={rooms} />
      ) : menu === 3 ? (
        <SidebarList title="Users" data={data} />
      ) : menu === 4 ? (
        <SidebarList title="Search Results" data={data} />
      ) : null}

      {/* create room dialog */}
      <Dialog
        maxWidth="sm"
        open={creatingRoom}
        onClose={() => setCreatingRoom(false)}
      >
        <DialogTitle>Create New Room</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type the name of your public room. Every user will able to join this
            room.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            onChange={(e) => setRoomName(e.target.value)}
            value={roomName}
            id="roomName"
            label="Room Name"
            type="text"
            fullWidth
            variant="filled"
            style={{ marginTop: 20 }}
          />
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={() => setCreatingRoom(false)}>
            Cancel
          </Button>
          <Button color="success" onClick={createRoom}>
            Create Room
          </Button>
        </DialogActions>
      </Dialog>

      {/* create room button */}
      <div className="sidebar__chat--addRoom">
        <IconButton>
          <Add onClick={() => setCreatingRoom(true)} />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
