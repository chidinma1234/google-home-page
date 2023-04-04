import React from 'react';
import GoogleLogo from './GoogleLogo';
import SearchBar from './SearchBar';
import ButtonsItem from './ButtonsItem';
import Languages from './Languages';

const Main = () => {
  return (
    <div className="container">
      <GoogleLogo />
      <SearchBar />
      <div className="google_btn">
        <ButtonsItem button="Google search" />
        <ButtonsItem button="I'm feeling happy" />
      </div>
      <Languages />
    </div>
  );
};

export default Main;
