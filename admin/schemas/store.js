export default {
    name: 'store',
    title: 'Store',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        name: 'roi',
        title: 'ROI',
        type: 'number'
      },
      {
        name: 'website',
        title: 'Website',
        type: 'string'
      },
      {
        name: 'seats',
        title: 'Seats',
        type: 'number'
      },
      {
        name: 'recommended',
        title: 'Recommended',
        type: 'boolean'
      },
      { 
        name: 'topinvestors',
        title: 'top Investors',
        type: 'array',
        of: [{type: 'reference',
        to: [{type: 'users'},{type: 'members'}]}]
      },
      { 
        name: 'investments',
        title: 'Investments',
        type: 'array',
        of: [
          {
            title: 'investor',
            type: 'object',
            fields: [
              {
                title: 'payee',
                name: 'payee',
                type: 'reference',
                to: [{type: 'users'},{type: 'members'}]
              } ,
              {
                title: 'Investmentamount',
                name: 'investmentamount',
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
              {
                title: 'Created',
                name: 'created',
                type: 'datetime',
                initialValue: (new Date().toISOString())
              } ,
            ]
          }
        ]
      },
    ]
  }
  