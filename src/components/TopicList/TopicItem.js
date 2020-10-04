import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import swal from 'sweetalert';

// Redux
import { connect } from 'react-redux';

// Style
import './TopicList.css';

// Custom Components
import EditTopic from '../EditTopic/EditTopic';

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
          <Card
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={
              selectedTopic.id === topic.id
                ? 'selected-topic-item'
                : 'topic-item'
            }
          >
            <Row onClick={handleSelect}>
              <Col>
                <Card.Title>{topic.title}</Card.Title>
              </Col>
              <Col className='topic-item-buttons-container'>
                <Button
                  className='topic-item-button'
                  variant='link'
                  onClick={handleEdit}
                >
                  <FaEdit />
                </Button>
                <Button
                  className='topic-item-button'
                  variant='link'
                  onClick={handleDelete}
                >
                  <FaTrash />
                </Button>
              </Col>
            </Row>
          </Card>
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
    selectedTopic: state.topic.selectedTopic,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedTopic: (topic) =>
      dispatch({ type: 'SET_SELECTEDTOPIC', payload: topic }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicItem);
