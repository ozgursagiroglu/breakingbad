import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ICharacter} from '../../interfaces';

export const characterService = createApi({
  reducerPath: 'characterService',
  baseQuery: fetchBaseQuery({baseUrl: 'https://breakingbadapi.com'}),
  tagTypes: ['Char'],
  endpoints: builder => ({
    getCharacters: builder.query<ICharacter[], void>({
      query: () => ({
        url: '/api/characters',
        method: 'get',
      }),
    }),
  }),
});

export const {useGetCharactersQuery} = characterService;
