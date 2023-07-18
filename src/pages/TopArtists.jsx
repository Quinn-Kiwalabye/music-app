import { Error, Loader, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  
  if (isFetching) return <Loader title="Loading Top charts" />;

  if (error) return <Error />;

  const topArtists = data?.tracks?.map((track) => ({
    key: track.key,
    title: track.title,
    subtitle: track.subtitle,
    images: track.images
  }));

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover top Artists</h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {topArtists.map((artist) => (
          <ArtistCard key={artist.key} track={artist} />
        ))}
      </div>
    </div>
  );
}

export default TopArtists;
