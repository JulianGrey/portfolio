import GridLink from '../GridLink/GridLink';
import './Watermark.css';

export default function Watermark() {
  return (
    <div className='watermark'>
      <GridLink category='julian' alignment='h' />
      <GridLink category='ricardo' alignment='v' />
      <GridLink category='grey' alignment='h' />
    </div>
  );
}
