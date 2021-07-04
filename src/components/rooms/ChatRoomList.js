import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Nav, Loader } from 'rsuite';
import RoomItem from './RoomItem';
import { useRooms } from '../../context/rooms.context';
import { useProfile } from '../../context/profile.context';

const ChatRoomList = ({ aboveElHeight }) => {
  const rooms = useRooms();
  const profiles = useProfile();
  const location = useLocation();

  return (
    <Nav
      appearance="subtle"
      vertical
      reversed
      className="overflow-y-scroll custom-scroll"
      style={{
        height: `calc(97% - ${aboveElHeight}px)`,  
      }}
      activeKey={location.pathname}
      size="xs"
    >
      {!rooms && (
        <Loader center vertical content="Loading" speed="slow" size="md" />
      )}
      {rooms &&
        rooms.length > 0 &&
        rooms.map(room => (
          <Nav.Item
            componentClass={Link}
            to={`/chat/${room.id}`}
            key={room.id}
            eventKey={`/chat/${room.id}`}
          >
            <RoomItem room={room} />
          </Nav.Item>
        ))}
    </Nav>
  );
};

export default ChatRoomList;
