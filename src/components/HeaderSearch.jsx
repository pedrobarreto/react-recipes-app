import React, { useState } from 'react';
import InputGen from './InputGen';

export default function HeaderSearch() {
  const [search, setSearch] = useState('');

  const configInput = ['text', 'search',
    'search-input', search, false,
    ({ target }) => setSearch(target.value), 'Buscar', 'search-input'];
  return (
    <div>
      <InputGen config={ configInput } />
    </div>
  );
}
