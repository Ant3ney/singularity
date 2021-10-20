import * as fs from 'fs';

export function getAllPageIds() {
   let fileNames = [
      /* {
         params: {
            id: 'id',
         },
      }, */
      {
         params: {
            id: ['id'],
            slug: ['id'],
         },
      },
      /* {
         params: {
            id: '[id].html',
         },
      },
      {
         params: {
            id: '[id].js',
         },
      },
      {
         params: {
            id: 'id.js',
         },
      }, */
   ];
   return fileNames;
}
