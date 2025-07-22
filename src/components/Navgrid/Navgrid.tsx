import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';
import './Navgrid.scss';

interface NavgridProps {
  selection: string;
  onSelect: (category: string) => void
}

type Alignment = 'h' | 'v';

function useWindowWidth() {
  const [ width, setWidth ] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default function Navgrid({ selection, onSelect }: NavgridProps) {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const [ modalVisibility, setModalVisibility] = useState(false);
  const [ showModal, setShowModal ] = useState(false);
  const contentExpand = document.getElementById('content-expand');
  const helper = 'Please tap a category above for more information';

  function handleShowModal(value: boolean) {
    if (value) {
      setShowModal(true);
      const timeout = setTimeout(() => setModalVisibility(true));
      return () => clearTimeout(timeout);
    } else {
      setModalVisibility(false);
      const timeout = setTimeout(() => setShowModal(false), 300);
      return () => clearTimeout(timeout);
    }
  }

  /**
   * Create an element for a given category, which is passed computed classes
   * in order to be rendered correctly by rules set in the stylesheet.
   * @param category
   * @param alignment Should the word be aligned (h)orizontally or (v)ertically?
   * @returns
   */
  function composeWord(category: string, alignment: Alignment) {
    const categoryStr = category.toUpperCase();
    const stringArray = categoryStr.split('');

    return (
      <p
        className={`grid-link ${categoryStr} ${alignment}Word ${ selection === category ? 'active' : '' }`}
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

  const about = composeWord('about', 'h');
  const contact = composeWord('contact', 'v');
  const creative = composeWord('creative', 'h');
  const interactive = composeWord('interactive', 'v');
  const portfolio = composeWord('portfolio', 'h');
  const responsive = composeWord('responsive', 'h');
  const simple = composeWord('simple', 'h');

  return (
    <>
      { isMobile ? (
        <>
          {showModal && createPortal(
            <Modal visible={modalVisibility} onClick={() => handleShowModal(false)}>
              <>
                <div className='navgrid'>
                  {about}{contact}{creative}{interactive}{portfolio}{responsive}{simple}
                </div>
                <div className='helper'>{ helper }</div>
              </>
            </Modal>,
            document.body,
          )}
          {contentExpand && createPortal(
            <div
              className='expand-plus'
              onClick={() => handleShowModal(true)}
            ></div>,
            contentExpand,
          )}
        </>
      ) : (
        <div className='navgrid'>
          {about}{contact}{creative}{interactive}{portfolio}{responsive}{simple}
        </div>
      )}
    </>
  );
}
