import React from 'react';
import { ListGroupItem } from 'mdbreact'

const RecipeListItem = (props) => (
<ListGroupItem>
  <div className="row pl-3 pt-2 hoverablecolor">
     <div onClick={props.handleShowRecipe} style={{cursor: "pointer"}} className="col-10-auto mr-auto">
       <h5 style={{color: "#616161"}}>{props.title}</h5>
     </div>
 </div>
</ListGroupItem>
)

export default RecipeListItem;
