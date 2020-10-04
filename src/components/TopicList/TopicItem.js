import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card from 'react-bootstrap/Card';

// Redux

// Style

// Custom Components

function TopicItem({ topic, index }) {
  return (
    <Draggable draggableId={`id-${topic.id}`} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {topic.title}
        </Card>
      )}
    </Draggable>
  );
}

export default TopicItem;
