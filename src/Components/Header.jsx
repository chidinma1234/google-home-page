import React from 'react';
import MenuItems from './MenuItems';
import Icon from './Icon';
import Avatar from './Avatar';

const Header = () => {
  return (
    <div className="app-header">
      <MenuItems title={'Gmail'} />
      <MenuItems title={'Images'} />
      <Icon />
      <Avatar />
    </div>
  );
};

export default Header;
