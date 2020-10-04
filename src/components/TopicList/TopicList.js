import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

// Redux

// Style
import './TopicList.css';

// Custom Components
import reorder from '../Shared/reorder';
import TopicItem from './TopicItem';
import CreateTopic from '../CreateTopic/CreateTopic';

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

const TopicListMemo = React.memo(function TopicListMemo({ topics }) {
  return topics.map((topic, index) => (
    <TopicItem topic={topic} index={index} key={`id${topic.id}`} />
  ));
});

function TopicList() {
  const [topics, setTopics] = useState(initial);
  const [showCreateTopic, setShowCreateTopic] = useState(false);

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

  const handleCreate = () => {
    setShowCreateTopic(true);
  };

  const handleCloseCreateTopic = () => {
    setShowCreateTopic(false);
  };

  return (
    <Card>
      <Card.Title>Topics</Card.Title>
      <Card.Body>
        <Card>
          <Button onClick={handleCreate} block>
            Create New Topic
          </Button>
        </Card>
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
        <CreateTopic
          show={showCreateTopic}
          handleClose={handleCloseCreateTopic}
        />
      </Card.Body>
    </Card>
  );
}

export default TopicList;
