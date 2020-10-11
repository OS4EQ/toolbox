import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Button, Card, Row, Col, Dropdown } from 'react-bootstrap';
import { FaTrash, FaBars } from 'react-icons/fa';
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
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={
              selectedLanguage.id === language.id
                ? 'selected-listed-item'
                : 'listed-item'
            }
          >
            <Dropdown.Divider />
            <Row onClick={handleSelect}>
              <Col className='listed-item-start-container'>
                <FaBars className='dnd-bars-icon' />
                <h5>{language.name}</h5>
              </Col>
              <Col className='listed-item-buttons-container'>
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
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedLanguage: state.frontend.selectedLanguage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedLanguage: (language) =>
      dispatch({ type: 'SET_SELECTEDLANGUAGE', payload: language }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageItem);
