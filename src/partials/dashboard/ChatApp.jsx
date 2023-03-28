import React, { useState } from 'react';
import { Channel, Chat } from 'stream-chat-react';
// import { ChannelFilters, ChannelOptions, ChannelSort } from 'stream-chat';
import 'stream-chat-react/dist/css/v2/index.css';
import './styles/index.css'
import { useClient } from '../../hooks/useClient';


import {
  ChannelInner,
  CreateChannel,
  MessagingSidebar,
  MessagingThreadHeader,
  SendButton
} from './components';

import { GiphyContextProvider } from './context';

import {
  useConnectUser,
  useChecklist,
  useMobileView,
  useTheme,
  useUpdateAppHeightOnResize
} from './hooks';

const apikey = 'qp2hh3efxb2p'
const userId = localStorage.getItem('firstname')

const filters = { type: 'messaging', members: { $in: [`9d8252d-c04a-4dea-80ab-44ad64812b07`] } };


const ChatApp = (props) => {
  const user = {
    id: `9d8252d-c04a-4dea-80ab-44ad64812b07`,
    name: `${'calvin'}`,
    image: 'https://getstream.io/random_png/?id=quiet-night-9&name=quiet-night-9',
  };

  const { apiKey, userToConnect, userToken, targetOrigin, channelListOptions } = props;
  const [isCreating, setIsCreating] = useState(false);

  const chatClient = useClient({ apiKey: 'qp2hh3efxb2p', userData: user,});
  const toggleMobile = useMobileView();
  const theme = useTheme(targetOrigin);

  useChecklist(chatClient, targetOrigin);
  useUpdateAppHeightOnResize();

  if (!chatClient) {
    return null; // render nothing until connection to the backend is established
  }

  return (
    <Chat   client={chatClient} theme={`messaging ${theme}`}>
       <div  className='flex bg-black w-full'>
       <MessagingSidebar
          filter={filters}
          channelListOptions={channelListOptions}
          onClick={toggleMobile}
          onCreateChannel={() => setIsCreating(!isCreating)}
          onPreviewSelect={() => setIsCreating(false)}
          theme={theme}
        />
        <div className=''>
        <Channel
          maxNumberOfFiles={10}
          multipleUploads={true}
          SendButton={SendButton}
          ThreadHeader={MessagingThreadHeader}
          TypingIndicator={() => null}
        >
          {isCreating && (
            <CreateChannel toggleMobile={toggleMobile} onClose={() => setIsCreating(false)} />
          )}
          <GiphyContextProvider>
            <ChannelInner theme={theme} toggleMobile={toggleMobile} />
          </GiphyContextProvider>
        </Channel>
        </div>
       </div>
    </Chat>
  );
};

export default ChatApp;
