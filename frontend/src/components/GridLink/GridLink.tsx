import { useEffect, useState } from 'react';
import styles from './GridLink.module.scss';

type Alignment = 'h' | 'v';

interface GridLinkProps {
  alignment: Alignment;
  category: string;
  selection: string;
  onSelect: (category: string) => void;
}

/**
 * Create an element for a given category, which is passed computed classes
 * in order to be rendered correctly by rules set in the stylesheet.
 * @param category
 * @param alignment Should the word be aligned (h)orizontally or (v)ertically?
 * @returns
 */
export default function GridLink({ alignment, category, selection, onSelect }: GridLinkProps) {
  const categoryStr = category.toUpperCase();
  const stringArray = categoryStr.split('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (selection === category) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [selection, category]);

  return (
    <p
      className={`${styles['grid-link']} ${categoryStr} ${alignment}Word${ active ? ` ${styles.active}` : '' }`}
      onClick={() => onSelect(category)}
    >
      {
        stringArray.map((char, index) => (
          <span key={`${char}${index}`} className={`${categoryStr}-char char${ index + 1 }`}>{ char }</span>
        ))
      }
    </p>
  );
}
