import ResidentList from '../components/ResidentList/ResidentList';
import CaretakerList from '../components/CareTakerList/CareTakerList';

const Home = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 gap-16">
        <ResidentList />
        <CaretakerList />
      </div>
    </div>
  );
};

export default Home;
