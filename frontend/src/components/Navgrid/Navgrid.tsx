import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import GridLink from '../GridLink/GridLink';
import Modal from '../Modal/Modal';
import './Navgrid.scss';

interface NavgridProps {
  selection: string;
  onSelect: (category: string) => void
}

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
  const navgrid = (
    <>
      <GridLink category='about' alignment='h' selection={selection} onSelect={onSelect} />
      <GridLink category='contact' alignment='v' selection={selection} onSelect={onSelect} />
      <GridLink category='creative' alignment='h' selection={selection} onSelect={onSelect} />
      <GridLink category='interactive' alignment='v' selection={selection} onSelect={onSelect} />
      <GridLink category='portfolio' alignment='h' selection={selection} onSelect={onSelect} />
      <GridLink category='responsive' alignment='h' selection={selection} onSelect={onSelect} />
      <GridLink category='simple' alignment='h' selection={selection} onSelect={onSelect} />
    </>
  );

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

  return (
    <>
      { isMobile ? (
        <>
          {showModal && createPortal(
            <Modal visible={ modalVisibility } onClick={() => handleShowModal(false)}>
              <>
                <div className='navgrid'>{ navgrid }</div>
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
        <div className='navgrid'>{ navgrid }</div>
      )}
    </>
  );
}
