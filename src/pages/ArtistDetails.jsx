import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { useGetArtistDetailsQuery } from '../redux/services/shazamCore';


const ArtistDetails = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { id: artistId } = useParams();

  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery({ artistId });


  if (isFetchingArtistDetails) {
    return <Loader title="Is fetching artist's details" />;
  }

  if (error) {
    return <Error />;
  }
  
  const artistDetails = data?.tracks?.map((track) => ({
    key: track.key,
    title: track.title,
    subtitle: track.subtitle,
    images: track.images
  }));
  return (
    <div className="flex flex-col">
      {artistDetails.map((artist) => (
          <DetailsHeader key={artist.key} track={artist} />
        ))}
      
        
      <RelatedSongs
  data={artistData?.songs && Object.values(artistData.songs)}
  artistId={artistId}
  isPlaying={isPlaying}
  activeSong={activeSong}
/>

    </div>
  );
};

export default ArtistDetails;
