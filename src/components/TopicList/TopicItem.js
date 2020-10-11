import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash, FaBars } from 'react-icons/fa';
import swal from 'sweetalert';

// Redux
import { connect } from 'react-redux';

// Style
import './TopicList.css';

// Custom Components
import EditTopic from '../Edit/EditTopic';

function TopicItem({ topic, index, setSelectedTopic, selectedTopic }) {
  const [showEditTopic, setShowEditTopic] = useState(false);

  const handleSelect = (e) => {
    e.preventDefault();
    setSelectedTopic(topic);
  };

  const handleEdit = () => {
    setShowEditTopic(true);
  };

  const handleCloseEditTopic = () => {
    setShowEditTopic(false);
  };

  const deleteTopic = () => {
    console.log('Woooah actually deleting this');
    swal('Poof! Your topic has been deleted!', {
      icon: 'success',
    });
  };

  const handleDelete = () => {
    swal({
      title: `Are you sure you want to delete topic: ${topic.title}?`,
      text: 'You will not be able to recover this topic!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteTopic();
      } else {
        swal('Your topic is safe!');
      }
    });
  };

  return (
    <>
      <Draggable draggableId={`id-${topic.id}`} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={
              selectedTopic.id === topic.id
                ? 'selected-listed-item'
                : 'listed-item'
            }
          >
            <Row onClick={handleSelect}>
              <Col className='listed-item-start-container'>
                <FaBars className='dnd-bars-icon' />
                <h5>{topic.title}</h5>
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
          </div>
        )}
      </Draggable>
      <EditTopic
        show={showEditTopic}
        handleClose={handleCloseEditTopic}
        topic={topic}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedTopic: state.selected.selectedTopic,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedTopic: (topic) =>
      dispatch({ type: 'SET_SELECTEDTOPIC', payload: topic }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicItem);
