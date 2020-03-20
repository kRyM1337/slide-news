// const hash = require('object-hash')

export const formData = {
   TOPICS: ['Javascript', 'Node', 'React'],
   SOURCES: [
      {name: 'Dev.to', url: 'https://dev.to/api/articles', apiId: 1},
      {name: 'Hacker News', url: 'https://hacker-news.firebaseio.com', apiId: 2}
   ],
   INTERVALS: [
      {name: 'Every Day', value: 1},
      {name: 'Every 3 Days', value: 3},
      {name: 'Once a Week', value: 7}
   ]
}
