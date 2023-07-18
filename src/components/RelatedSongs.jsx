import  SongBar from './SongBar';


const RelatedSongs = ( {data, isPlaying, activeSong, handlePauseClick, handlePlayClick}) => (

  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Related Songs:</h1>

    <div className="mt-6 w-full flex flex-col">
    {data?.tracks?.map((track) => (
        <SongBar
         key={`${track.key}-${artistId}`} song={track} isPlaying={isPlaying} activeSong={activeSong} data={data} handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick} />
    ))}
    </div>
  </div>
 
);

export default RelatedSongs;
