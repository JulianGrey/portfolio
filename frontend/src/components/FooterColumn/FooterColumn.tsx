import type { ReactNode } from 'react';
import './FooterColumn.scss';

interface FooterColumnProps {
  heading: string;
  children: ReactNode;
}

export default function FooterColumn({ heading, children }: FooterColumnProps) {
  return (
    <div className="footer-column">
      <h3 className='bold'>{ heading }</h3>
      <ul>
        { children }
      </ul>
    </div>
  );
}
