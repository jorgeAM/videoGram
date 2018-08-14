import React from 'react';
import PropTypes from 'prop-types';

function HomeLayout(props) {
  return (
    <section>
      {props.children}
    </section>
  );
}

export default HomeLayout;
