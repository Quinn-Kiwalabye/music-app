import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const shazam = createApi({
    reducerPath: 'shazamApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com', // Include the protocol (e.g., https://)
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-key', '0648d61b78msh8bd8cd6bff4da0ap169e78jsn1c88e90b206c');
            return headers;
        }
    }),
    
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/track' }),
        getSongsByGenre: builder.query({ query: (genre) => `/charts/track?genre_code=${genre}` }),
        getSongDetails: builder.query({ query: ({songid}) => `shazam-songs/list-similarities?track_id=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `/songs/get-related-artist?track_id=${songid}`}),
        getArtistDetails: builder.query({ query: ({ artistid }) => `/artists/get-details?track_id=${artistid}`}),
        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/track?country_code=${countryCode}`}),

    }),
})

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
    useGetSongsByGenreQuery

    
} = shazam;