import React from 'react';

type TTabProps = {
 name: string,
 onTabClick: (arg0: string) => void,
 type: string,
 active: boolean | null,
 hide: boolean | null,
}


const TabItem: React.FC<TTabProps> = ({ name, onTabClick, type, active, hide = false }) => {
  
  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onTabClick(type);
  };
  if (hide) return null;
  
  return (
    <li className={'nav-item'}>
      <a href="/#" className={active ? 'nav-link active' : 'nav-link'} onClick={handleClick}>
        {name}
      </a>
    </li>
  );
};
export default TabItem;