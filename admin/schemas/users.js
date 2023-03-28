export default {
  name: 'users',
  title: 'USERS',
  type: 'document',
  fields: [
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    { 
      name: 'firstname',
      title: 'Firstname',
      type: 'string',
    },
    { 
      name: 'lastname',
      title: 'Lastname',
      type: 'string',
    },
    { 
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    { 
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    { 
      name: 'password',
      title: 'Password',
      type: 'string',
    },
    { 
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    { 
      name: 'investment',
      title: 'Investment',
      type: 'number',
    },
    { 
      name: 'phone',
      title: 'Phone',
      type: 'number',
    },
    { 
      name: 'pin',
      title: 'Pin',
      type: 'number',
    },
    { 
      name: 'service',
      title: 'Service',
      type: 'string',
    },
    { 
      name: 'plan',
      title: 'Plan',
      type: 'string',
    },
    { 
      name: 'region',
      title: 'Region',
      type: 'string',
    },
    { 
      name: 'demo',
      title: 'Demo',
      type: 'boolean',
    },
    { 
      name: 'claimed',
      title: 'Claimed',
      type: 'boolean',
    },
    { 
      name: 'earnings',
      title: 'Earnings',
      type: 'array',
      of: [{ type: 'number' }],
    },
    { 
      name: 'address',
      title: 'Address',
      type: 'array',
      of: [
        {
          title: 'addresses',
          type: 'object',
          fields: [
            {
              title: 'Street',
              name: 'street',
              type: 'string'
            } ,
            {
              title: 'Street2',
              name: 'street2',
              type: 'string'
            } ,
            {
              title: 'State',
              name: 'state',
              type: 'string'
            } ,
            {
              title: 'City',
              name: 'city',
              type: 'string'
            } ,
            {
              title: 'Zip',
              name: 'zip',
              type: 'string'
            } ,
          ]
        }
      ]
    },
    { 
      name: 'notifications',
      title: 'Notifications',
      type: 'array',
      of: [
        {
          title: 'notification',
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string'
            } ,
            {
              title: 'Message',
              name: 'message',
              type: 'string'
            } ,
            {
              title: 'Read',
              name: 'read',
              type: 'boolean'
            } ,
            {
              title: 'Created',
              name: 'created',
              type: 'datetime',
              initialValue: (new Date()).toISOString()
            } ,
            { 
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                source: 'title',
                maxLength: 90,
              }
            },
            
          ]
        }
      ]
    },
    { 
      name: 'accounts',
      title: 'Accounts',
      type: 'array',
      of: [
        {
          title: 'account',
          type: 'object',
          fields: [
            {
              title: 'Type',
              name: 'type',
              type: 'string'
            } ,
            {
              title: 'Description',
              name: 'description',
              type: 'string'
            } ,
            {
              title: 'Balance',
              name: 'balance',
              type: 'number'
            } ,
            {
              title: 'Number',
              name: 'number',
              type: 'string'
            } ,
            {
              title: 'Deployed',
              name: 'deployed',
              type: 'boolean'
            } ,
            
            
          ]
        }
      ]
    },
   
    {
      name: 'chats',
      title: 'Chats',
      type: 'array',
      of: [
          {
            name: 'chat',
            title: 'Chat',
            type: 'object',
            fields: [
              {
                title: 'Userid',
                name: 'userid',
                type: 'string'
              },
              {
                title: 'Username',
                name: 'username',
                type: 'string'
              },
              {
                title: 'Useravatar',
                name: 'useravatar',
                type: 'image'
              },
              {
                title: 'Messages',
                name: 'messages',
                type: 'array',
                of: [
                  {
                    title: 'Texts',
                    type: 'object',
                    name: 'texts',
                    fields:[
                      {
                        title:'Text',
                        name: 'text',
                        type: 'string',
                      },
                      {
                        title: 'sender',
                        name: 'sender',
                        type: 'string'
                      }
                    ]
                  }
                ]
              },

            ]
          }
      ]

    },
    { 
      name: 'transactions',
      title: 'Transactions',
      type: 'array',
      of: [
        {
          title: 'transaction',
          type: 'object',
          fields: [
            {
              title: 'Sendername',
              name: 'sendername',
              type: 'string'
            } ,
            {
              title: 'Amount',
              name: 'amount',
              type: 'number'
            } ,
            {
              title: 'Type',
              name: 'type',
              type: 'string'
            } ,
            {
              title: 'Status',
              name: 'status',
              type: 'string'
            } ,
          ]
        }
      ]
    },
    { 
      name: 'witheld',
      title: 'Witheld',
      type: 'number',
    },
    { 
      name: 'liked',
      title: 'Liked',
      type: 'array',
      of: [{type: 'reference',
      to: [{type: 'agents'}]}]
      
    },
    // { 
    //   name: 'coinvestors',
    //   title: 'Coinvestors',
    //   type: 'array',
    //   of: [{type: 'reference',
    //   to: [{type: 'members'}]}]
      
    // },
    { 
      name: 'friends',
      title: 'Friends',
      type: 'array',
      of: [{type: 'reference',
      to: [{type: 'users'}]}]
      
    },
    
  ]
}