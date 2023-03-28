export default {
    name: 'syndicates',
    title: 'Syndicates',
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
        name: 'name',
        title: 'name',
        type: 'string',
      },
      { 
        name: 'investors',
        title: 'investors',
        type: 'array',
        of: [{type: 'reference',
        to: [{type: 'members'}]}]    
      },
      
      { 
        name: 'revenue',
        title: 'Revenue',
        type: 'number',
      },
      { 
        name: 'rating',
        title: 'Rating',
        type: 'number',
      },
      { 
        name: 'recruiting',
        title: 'Recruiting',
        type: 'boolean',
      },
      
      { 
        name: 'members',
        title: 'members',
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
    
      { 
        name: 'followers',
        title: 'Followers',
        type: 'array',
        of: [{type: 'reference',
        to: [{type: 'users'}]}]
        
      },
      
    ]
  }