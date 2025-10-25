"use client";
import React from "react";
import JoinRoomModal from "./JoinRoomModal";
import CreateRoomModal from "./CreateRoomModal";

export default function NavbarModalTriggers() {
  const [showCreateRoomModal, setShowCreateRoomModal] = React.useState(false);
  const [showJoinRoomModal, setShowJoinRoomModal] = React.useState(false);

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => setShowCreateRoomModal(true)}
        className="primary-button"
      >
        Create Room
      </button>
      <button
        onClick={() => setShowJoinRoomModal(true)}
        className="secondary-button"
      >
        Join Room
      </button>
      <CreateRoomModal
        showCreateRoomModal={showCreateRoomModal}
        setShowCreateRoomModal={setShowCreateRoomModal}
      />
      <JoinRoomModal
        showJoinRoomModal={showJoinRoomModal}
        setShowJoinRoomModal={setShowJoinRoomModal}
      />
    </div>
  );
}
