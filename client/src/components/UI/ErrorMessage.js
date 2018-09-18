import React from 'react';
import { Button, Popover, PopoverBody, PopoverHeader } from 'mdbreact';

const ErrorMessage = (props) => {
    return (
      <div style={{display: "flex"}}>
        <Popover
          component="button"
          placement="right"
          popoverBody="popover on right"
          className="btn btn-default">
          <PopoverHeader>{this.props.errorTitle}</PopoverHeader>
          <PopoverBody>{this.props.errorBody}</PopoverBody>
        </Popover>
      </div>
    )
}
export default ErrorMessage;
