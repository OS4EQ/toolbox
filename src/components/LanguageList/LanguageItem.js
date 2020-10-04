import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import swal from 'sweetalert';

// Redux
import { connect } from 'react-redux';

// Style
import './LanguageList.css';

// Custom Components

function LanguageItem({
  language,
  index,
  setSelectedLanguage,
  selectedLanguage,
}) {
  const handleSelect = (e) => {
    e.preventDefault();
    setSelectedLanguage(language);
  };

  const deleteLanguage = () => {
    console.log('Woooah actually deleting this');
    swal('Poof! Your language has been deleted!', {
      icon: 'success',
    });
  };

  const handleDelete = () => {
    swal({
      title: `Are you sure you want to delete language: ${language.name}?`,
      text: 'You will not be able to recover this language!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteLanguage();
      } else {
        swal('Your language is safe!');
      }
    });
  };

  return (
    <>
      <Draggable draggableId={`id-${language.id}`} index={index}>
        {(provided) => (
          <Card
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={
              selectedLanguage.id === language.id
                ? 'selected-language-item'
                : 'language-item'
            }
          >
            <Row onClick={handleSelect}>
              <Col>
                <Card.Title>{language.name}</Card.Title>
              </Col>
              <Col className='language-item-buttons-container'>
                <Button
                  className='language-item-button'
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
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedLanguage: state.language.selectedLanguage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedLanguage: (language) =>
      dispatch({ type: 'SET_SELECTEDLANGUAGE', payload: language }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageItem);
