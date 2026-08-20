import { type ReactNode } from 'react';
import './Intro.scss';

interface INTRO {
  title: string;
  children: ReactNode;
}

export default function Intro({ title, children }: INTRO) {
  return (
    <div className='intro'>
      <h1 className='bold'>{ title }</h1>
      { children }
    </div>
  );
}
