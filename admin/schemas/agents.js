export default {
    name: 'agents',
    title: 'Agents',
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
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'lastname',
        title: 'Lastname',
        type: 'string',
      },
      { 
        name: 'followers',
        title: 'Followers',
        type: 'string',
      },
      { 
        name: 'profit',
        title: 'Profit',
        type: 'number',
      },
      { 
        name: 'losses',
        title: 'Losses',
        type: 'number',
      },
      { 
        name: 'rank',
        title: 'Rank',
        type: 'string',
      },
      { 
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      { 
        name: 'joined',
        title: 'Joined',
        type: 'date',
      },
      { 
        name: 'active',
        title: 'Active',
        type: 'boolean',
      },
      { 
        name: 'specialties',
        title: 'Specialties',
        type: 'array',
        of: [{ type: 'string' }],
      },
     
      { 
        name: 'bio',
        title: 'Bio',
        type: 'text',
      },
      { 
        name: 'phrase',
        title: 'Phrase',
        type: 'string',
      },
      { 
        name: 'likes',
        title: 'Likes',
        type: 'number',
      },
      { 
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      { 
        name: 'trending',
        title: 'Trending',
        type: 'boolean',
      },
      { 
        name: 'top',
        title: 'Top',
        type: 'boolean',
      },
      { 
        name: 'spotlight',
        title: 'Spotlight',
        type: 'boolean',
      },
      { 
        name: 'liked',
        title: 'Liked',
        type: 'array',
        of: [{type: 'string',}]
        
      },
      
    ]
  }