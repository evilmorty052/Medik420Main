import { ChannelList} from 'stream-chat-react';
import { MessagingChannelListHeader, MessagingChannelPreview } from '../index';

const MessagingSidebar = ({channelListOptions, onClick, onCreateChannel, onPreviewSelect, theme, filter}) => {

  return (
    <div className={`str-chat messaging__sidebar ${theme}`} id='mobile-channel-list' onClick={onClick}>
      <MessagingChannelListHeader
        onCreateChannel={onCreateChannel}
      />
      <ChannelList
        {...channelListOptions}
        filters={filter}
        Preview={(props) => <MessagingChannelPreview {...props} onClick={onPreviewSelect} />}
      />
    </div>
  )
}

export default MessagingSidebar;
