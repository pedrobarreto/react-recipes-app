import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Profile() {
  return (
    <div>
      <div>
        <Header searchRender={ false } title="Perfil" />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
