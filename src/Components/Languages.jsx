/*eslint-disable jsx-a11y/anchor-is-valid*/
import React from 'react';
import Language from './Language';
const Languages = () => {
  return (
    <div className="lang">
      <p>
        Google offered in:
        <span>
          <Language langes={'Hausa'} />
        </span>
        <span>
          <Language langes={'Igbo'} />
        </span>
        <span>
          <Language langes={'Èdè Yorùbá'} />
        </span>
        <span>
          <Language langes={'Nigerian Pidgin'} />
        </span>
      </p>
    </div>
  );
};

export default Languages;
