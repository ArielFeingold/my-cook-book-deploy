import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import { Button } from 'mdbreact'

const RecipeForm = (props) => {

  let titleError =  '';
  let ingredientsError = '';
  let categoryError = ''
  if ( props.errors ) {
    if(props.errors.title){titleError = `Please provide title`};
    if(props.errors.ingredients){ingredientsError = `Please provide ingredients`};
    if(props.errors.category){categoryError = `Please select category`};
  }

  let titleRequired = <Input type="text" name="title" value={props.title} onChange={props.onTextChange} className="form-control" placeholder="Recipe Title" required/>
  let ingredientsRequired = <Input type="textarea" name="ingredients" value={props.ingredients}  onChange={props.onTextChange} rows="10" className="form-control" placeholder="Ingredients" required/>
  let categoryRequired =
    <select className="custom-select browser-default" onChange={props.onSelectChange} required>
      <option value={props.category || ""}>{props.category || "Choose Category..."}</option>
      <option value="Appetizer">Appetizer</option>
      <option value="Soup">Soup</option>
      <option value="Meat">Meat</option>
      <option value="Fish & Seafood">Fish & Seafood</option>
      <option value="Vegetables">Vegetables</option>
      <option value="Pasta">Pasta</option>
      <option value="Desserts">Desserts</option>
      <option value="Other" >Uncategorized</option>
    </select>
  if(props.update === "true"){
    titleRequired = <Input type="text" name="title" value={props.title} onChange={props.onTextChange} className="form-control" placeholder="Recipe Title" />
    ingredientsRequired = <Input type="textarea" name="ingredients" value={props.ingredients}  onChange={props.onTextChange} rows="10" className="form-control" placeholder="Ingredients" />
    categoryRequired =
      <select className="custom-select browser-default" onChange={props.onSelectChange} >
        <option value={props.category || ""}>{props.category || "Choose Category..."}</option>
        <option value="Appetizer">Appetizer</option>
        <option value="Soup">Soup</option>
        <option value="Meat">Meat</option>
        <option value="Fish & Seafood">Fish & Seafood</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Pasta">Pasta</option>
        <option value="Desserts">Desserts</option>
        <option value="Other" >Uncategorized</option>
      </select>
  }

  return (
    <Form className='needs-validation' onSubmit={props.onSubmit} noValidate>
      <FormGroup>
        {titleRequired}
        <div className="invalid-feedback">{titleError}</div>
      </FormGroup>
      <FormGroup>
        {ingredientsRequired}
        <div className="invalid-feedback">{ingredientsError}</div>
      </FormGroup>
      <div className="form-group">
        {categoryRequired}
      <div className="invalid-feedback">{categoryError}</div>
      </div>
      {/* <div className="form-group">
        <select name="category" value="" onChange={props.onSelectChange} className="custom-select browser-default w-100" required>
          <option value="">{props.category || "Choose Category"} </option>
          <option value="Appetizer">Appetizer</option>
          <option value="Soup">Soup</option>
          <option value="Meat">Meat</option>
          <option value="Fish & Seafood">Fish & Seafood</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Pasta">Pasta</option>
          <option value="Desserts">Desserts</option>
          <option value="Other" >Uncategorized</option>
        </select>
        <div className="invalid-feedback">{categoryError}</div>
      </div> */}
        <Button block color="primary" type="submit" value="submit">Submit Recipe</Button>

      </Form>
    )
  }

export default RecipeForm;
