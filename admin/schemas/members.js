export default {
    name: 'members',
    title: 'Members',
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
        name: 'duration',
        title: 'Duration',
        type: 'string',
      },
      { 
        name: 'budget',
        title: 'Budget',
        type: 'number',
      },
      { 
        name: 'roi',
        title: 'Roi',
        type: 'number',
      },
      
      { 
        name: 'type',
        title: 'Type',
        type: 'string',
      },
      { 
        name: 'verified',
        title: 'Verified',
        type: 'boolean',
      },
      { 
        name: 'recommended',
        title: 'Recommended',
        type: 'boolean',
      },
      { 
        name: 'partners',
        title: 'partners',
        type: 'array',
        of: [{type: 'reference',
        to: [{type: 'members'}]}]
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
        name: 'followers',
        title: 'Followers',
        type: 'array',
        of: [{type: 'reference',
        to: [{type: 'users'}]}]
        
      },
      { 
        name: 'investments',
        title: 'Investments',
        type: 'array',
        of: [
          {
            title: 'investment',
            type: 'object',
            fields: [
              {
                title: 'Startup',
                name: 'startup',
                type: 'reference',
                to:  [{type: 'store'}]
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
      
    ]
  }