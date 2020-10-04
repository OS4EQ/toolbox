import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

// Redux

// Style
import './PlaylistList.css';

// Custom Components
import PlaylistItem from './PlaylistItem';
import CreatePlaylist from '../CreatePlaylist/CreatePlaylist';

const initial = [
  {
    id: 3,
    language: 'English',
    title: 'hi',
    audio_url: 'https://congregate.live',
    published: true,
  },
  {
    id: 1,
    language: 'English',
    title: 'hello!',
    audio_url: 'https://gradescope.com',
    published: true,
  },
  {
    id: 4,
    language: 'English',
    title: 'hi again',
    audio_url: 'https://collegearch.org',
    published: true,
  },
  {
    id: 15,
    language: 'English',
    title: 'how r u?',
    audio_url: 'https://congregate.live',
    published: false,
  },
  {
    id: 9,
    language: 'English',
    title: 'im doin okay, wbu?',
    audio_url: 'https://congregate.live',
    published: false,
  },
  {
    id: 2,
    language: 'English',
    title: 'im hangin in there!',
    audio_url: 'https://congregate.live',
    published: true,
  },
];

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const PlaylistListMemo = React.memo(function PlaylistListMemo({ playlists }) {
  return playlists.map((playlist, index) => (
    <PlaylistItem playlist={playlist} index={index} key={`id${playlist.id}`} />
  ));
});

function PlaylistList() {
  const [playlists, setPlaylists] = useState(initial);
  const [showCreatePlaylist, setShowCreatePlaylist] = useState(false);

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const reorderedPlaylists = reorder(
      playlists,
      result.source.index,
      result.destination.index
    );

    setPlaylists(reorderedPlaylists);
    console.log(reorderedPlaylists);
  }

  const handleCreate = () => {
    setShowCreatePlaylist(true);
  };

  const handleCloseCreatePlaylist = () => {
    setShowCreatePlaylist(false);
  };

  return (
    <Card>
      <Card.Title>Playlists</Card.Title>
      <Card.Body>
        <Card>
          <Button onClick={handleCreate} block>
            Create New Playlist
          </Button>
        </Card>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='list'>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <PlaylistListMemo playlists={playlists} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <CreatePlaylist
          show={showCreatePlaylist}
          handleClose={handleCloseCreatePlaylist}
        />
      </Card.Body>
    </Card>
  );
}

export default PlaylistList;
