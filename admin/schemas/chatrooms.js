export default {
     title: 'Chatrooms',
     name: 'chatrooms',
     type: 'document',
     fields: [
        {
            title: 'chatroomid',
            name: 'chatroomid',
            type: 'string'
        },
        { 
            name: 'participants',
            title: 'Participants',
            type: 'array',
            of: [{type: 'reference',
            to: [{type: 'users'}]}]
            
          },
        {
            name: 'messages',
            title: 'Messages',
            type:  'array',
             of:   [
                 {
                    title: 'message',
                    name: 'message',
                    type: 'object',
                    fields: [
                        {
                            name: 'sender',
                            title: 'Sender',
                            type:    'reference',
                            to: [  
                                {
                                    type: 'users',
                                    title:'Users'
                                }
                            ]
                        },
                        {
                            name: 'message',
                            title :'Message',
                            type: 'text'
                        }
                    ]
                 }
             ]
                
        }
     ]
}