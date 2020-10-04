import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import swal from 'sweetalert';

// Redux

// Style
import './TopicList.css';

// Custom Components
import EditTopic from '../EditTopic/EditTopic';

function TopicItem({ topic, index }) {
  const [editTopicShow, setEditTopicShow] = useState(false);

  const handleEdit = () => {
    setEditTopicShow(true);
  };

  const handleCloseEditTopic = () => {
    setEditTopicShow(false);
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
          >
            <Row>
              <Col>
                <Card.Title>{topic.title}</Card.Title>
              </Col>
              <Col className='topic-item-buttons-container'>
                <Button variant='light' onClick={handleEdit}>
                  <FaEdit />
                </Button>
                <Button variant='light' onClick={handleDelete}>
                  <FaTrash />
                </Button>
              </Col>
            </Row>
          </Card>
        )}
      </Draggable>
      <EditTopic
        show={editTopicShow}
        handleClose={handleCloseEditTopic}
        topic={topic}
      />
    </>
  );
}

export default TopicItem;
