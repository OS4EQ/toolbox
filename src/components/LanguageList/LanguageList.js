import React, { useState } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

// Redux

// Style
import '../../App.css';

// Custom Components
import reorder from '../Shared/reorder';
import AddLanguage from './AddLanguage';
import LanguageItem from './LanguageItem';

const initial = [
  {
    id: 9,
    name: 'English',
  },
  {
    id: 6,
    name: 'Mandarin',
  },
  {
    id: 53,
    name: 'French',
  },
  {
    id: 5,
    name: 'Cantonese',
  },
  {
    id: 8,
    name: 'Spanish',
  },
];

const LanguageListMemo = React.memo(function LanguageListMemo({ languages }) {
  return languages.map((language, index) => (
    <LanguageItem language={language} index={index} key={`id${language.id}`} />
  ));
});

function LanguageList() {
  const [languages, setLanguages] = useState(initial);
  const [showAddLanguage, setShowAddLanguage] = useState(false);

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const reorderedLanguages = reorder(
      languages,
      result.source.index,
      result.destination.index
    );

    setLanguages(reorderedLanguages);
    console.log(reorderedLanguages);
  }

  const handleAdd = () => {
    setShowAddLanguage(true);
  };

  const handleCloseAddLanguage = () => {
    setShowAddLanguage(false);
  };

  return (
    <Card className='layout-card'>
      <Card.Title>Languages</Card.Title>
      <Card.Body>
        <Card>
          <Button onClick={handleAdd} block>
            Add Language +
          </Button>
        </Card>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='list'>
            {(provided) => (
              <div
                className='dnd-list'
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <LanguageListMemo languages={languages} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <AddLanguage
          show={showAddLanguage}
          handleClose={handleCloseAddLanguage}
        />
      </Card.Body>
    </Card>
  );
}

export default LanguageList;
