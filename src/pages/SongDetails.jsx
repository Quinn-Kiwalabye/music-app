import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetSongRelatedQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { songid } = useParams();

  const {  data, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });
  const {  relatedSongsData, isFetching: isFetchingRelatedSongs, error } = useGetSongRelatedQuery({ songid });

  const handlePauseClick = () => {
    dispatch(playPause());
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, relatedSongsData, i }));
    dispatch(playPause());
  };
console.log(songid)
  if (isFetchingSongDetails || isFetchingRelatedSongs) {
    return <Loader title="Searching song details" />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="flex flex-col">
      <DetailsHeader data={data} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {data?.sections?.find((section) => section.type === 'LYRICS') ? (
            data.sections
              .find((section) => section.type === 'LYRICS')
              .text.map((line, index) => (
                <p key={index} className="text-gray-400 text-base my-1">
                  {line}
                </p>
              ))
          ) : (
            <p className="text-gray-400 text-base my-1">Sorry, no lyrics found!</p>
          )}
        </div>
      </div>
      <RelatedSongs
        data={relatedSongsData}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;
