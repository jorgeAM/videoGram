import React from 'react';
import PropTypes from 'prop-types';
import './home-layout.css';

function HomeLayout(props) {
  return (
    <section className="HomeLayout">
      {props.children}
    </section>
  );
}

export default HomeLayout;
