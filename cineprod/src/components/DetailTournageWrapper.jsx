import { useParams } from 'react-router-dom';
import DetailTournage from './DetailTournage';

function DetailTournageWrapper() {
  const { id } = useParams();
  return <DetailTournage id={id} />;
}

export default DetailTournageWrapper;
