import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

// Redux

// Style
import './TopicList.css';

// Custom Components
import TopicItem from './TopicItem';

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
    published: true,
  },
  {
    id: 9,
    language: 'English',
    title: 'im doin okay, wbu?',
    audio_url: 'https://congregate.live',
    published: true,
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

const TopicListMemo = React.memo(function TopicListMemo({ topics }) {
  return topics.map((topic, index) => (
    <TopicItem topic={topic} index={index} key={`id${topic.id}`} />
  ));
});

function TopicList() {
  const [topics, setTopics] = useState(initial);

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const reorderedTopics = reorder(
      topics,
      result.source.index,
      result.destination.index
    );

    setTopics(reorderedTopics);
    console.log(reorderedTopics);
  }

  return (
    <Card>
      <Card.Title>Topics</Card.Title>
      <Card.Body>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='list'>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <TopicListMemo topics={topics} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Card.Body>
    </Card>
  );
}

export default TopicList;
