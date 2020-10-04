import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

// Redux

// Style
import './TopicList.css';

// Custom Components

function TopicItem({ topic, index }) {
  const handleEdit = () => {
    console.log('edit');
  };

  const handleDelete = () => {
    console.log('delete');
  };

  return (
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
  );
}

export default TopicItem;
