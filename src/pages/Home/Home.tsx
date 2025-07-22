import { useEffect, useState } from 'react';
import Navgrid from '../../components/Navgrid/Navgrid';
import { content } from '../../components/Navgrid/content';
import { capitalise } from '../../utils/utils';
import './Home.scss';

const contents = content;

export default function Home() {
  const [ content, setContent ] = useState(<></>);
  const [ selection, setSelection ] = useState('');

  function handleSelection(category: string) {
    const categoryContent = contents.find(content => content.category === category);
    if (categoryContent) {
      setContent(<>{categoryContent.description}</>);
    }
    setSelection(category);
  }

  useEffect(() => {
    handleSelection('about');
  }, []);

  return (
    <div className='home'>
      <div className='navgrid-content'>
        <div className='content-text' id='content-text'>
          <h2 className='bold'>{capitalise(selection)}</h2>
          {content}
        </div>
        <div id='content-expand' className='content-expand'></div>
      </div>
      <Navgrid selection={selection} onSelect={handleSelection} />
    </div>
  );
}
