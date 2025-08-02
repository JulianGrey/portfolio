import { useEffect, useState } from 'react';
import Navgrid from '../../components/Navgrid/Navgrid';
import { content } from '../../components/Navgrid/content';
import { capitalise } from '../../utils';
import './HomePage.scss';

const contents = content;

export default function Home() {
  const [ content, setContent ] = useState(<></>);
  const [ selection, setSelection ] = useState('');
  const [ showNavgrid, setShowNavgrid ] = useState(false);
  const [ transition, setTransition ] = useState(false);

  function handleSelection(category: string) {
    const categoryContent = contents.find(content => content.category === category);

    if (categoryContent) {
      setTransition(true);

      setTimeout(() => {
        setContent(<>{categoryContent.description}</>);
        setSelection(category);
      }, 300);

      setTimeout(() => {
        setTransition(false);
      }, 600);
    }
  }

  useEffect(() => {
    handleSelection('about');
    setTimeout(() => {
      setShowNavgrid(true);
    }, 1000);
  }, []);

  return (
    <div className='home-page'>
      <div className={`navgrid-content${ transition ? ' content-transition' : '' }`}>
        <div className='content-text' id='content-text'>
          <h2 className='bold'>{capitalise(selection)}</h2>
          {content}
        </div>
        <div id='content-expand' className='content-expand'></div>
      </div>
      <div className={`navgrid-wrapper${ showNavgrid ? ' show' : '' }`}>
        <Navgrid selection={selection} onSelect={handleSelection} />
      </div>
    </div>
  );
}
