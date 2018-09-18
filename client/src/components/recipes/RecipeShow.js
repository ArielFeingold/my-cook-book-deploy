import React from 'react';
import { Button, ModalBody, ModalHeader, ModalFooter } from 'mdbreact'

const RecipeShow = (props) => (
  <React.Fragment>
    <ModalHeader >
      <span className="mb-1" style={{ color: "#2b55b0"}}>{props.title}</span>
      <p className="font-italic h6">{props.category}</p>
    </ModalHeader>
      <ModalBody style={{color: "#616161"}}>
        <p className="h5 mb-1">Ingredients:</p>
        {props.ingrediants}
      </ModalBody>
      <ModalFooter>
        <Button color="info" onClick={props.onUpdateClick}>UPDATE</Button>
        <Button color="danger" onClick={props.onDeleteClick}>DELETE</Button>
    </ModalFooter>
  </React.Fragment>
)

export default RecipeShow;
