import { SendIcon } from '../../assets';
import React from 'react';
// import { SendButtonProps } from 'stream-chat-react';

const SendButton = ({sendMessage, ...rest}) => (
  <button
    className='str-chat__send-button'
    onClick={sendMessage}
    type='button'
    {...rest}
  >
    <SendIcon />
  </button>
);

export default SendButton;