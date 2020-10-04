import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Button, Row, Col, Dropdown } from 'react-bootstrap';
import { FaEdit, FaTrash, FaBars } from 'react-icons/fa';
import swal from 'sweetalert';

// Redux
import { connect } from 'react-redux';

// Style
import './PlaylistList.css';

// Custom Components
import EditPlaylist from '../Edit/EditPlaylist';

function PlaylistItem({
  playlist,
  index,
  setSelectedPlaylist,
  selectedPlaylist,
}) {
  const [showEditPlaylist, setShowEditPlaylist] = useState(false);

  const handleSelect = (e) => {
    e.preventDefault();
    setSelectedPlaylist(playlist);
  };

  const handleEdit = () => {
    setShowEditPlaylist(true);
  };

  const handleCloseEditPlaylist = () => {
    setShowEditPlaylist(false);
  };

  const deletePlaylist = () => {
    console.log('Woooah actually deleting this');
    swal('Poof! Your playlist has been deleted!', {
      icon: 'success',
    });
  };

  const handleDelete = () => {
    swal({
      title: `Are you sure you want to delete playlist: ${playlist.title}?`,
      text: 'You will not be able to recover this playlist!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deletePlaylist();
      } else {
        swal('Your playlist is safe!');
      }
    });
  };

  return (
    <>
      <Draggable draggableId={`id-${playlist.id}`} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={
              selectedPlaylist.id === playlist.id
                ? 'selected-listed-item'
                : 'listed-item'
            }
          >
            <Dropdown.Divider />
            <Row onClick={handleSelect}>
              <Col className='listed-item-start-container'>
                <FaBars className='dnd-bars-icon' />
                <h5>{playlist.title}</h5>
              </Col>
              <Col className='listed-item-buttons-container'>
                <Button
                  className='listed-item-button'
                  variant='link'
                  onClick={handleEdit}
                >
                  <FaEdit />
                </Button>
                <Button
                  className='listed-item-button'
                  variant='link'
                  onClick={handleDelete}
                >
                  <FaTrash />
                </Button>
              </Col>
            </Row>
            <Dropdown.Divider />
          </div>
        )}
      </Draggable>
      <EditPlaylist
        show={showEditPlaylist}
        handleClose={handleCloseEditPlaylist}
        playlist={playlist}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedPlaylist: state.playlist.selectedPlaylist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedPlaylist: (playlist) =>
      dispatch({ type: 'SET_SELECTEDPLAYLIST', payload: playlist }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistItem);
