
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopCharts = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(data)
  

  if (isFetching) return <Loader title="Loading Top charts" />;

  if (error ) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover top charts  </h2>
  
     <div className='flex flex-wrap sm:justify-start justify-center'>
     {data?.tracks?.map((track) => (
        <SongCard key={track.key} song={track} isPlaying={isPlaying} activeSong={activeSong} data={data} />
      ))};
     </div>
      
    </div>
  );
        }  

export default TopCharts;
