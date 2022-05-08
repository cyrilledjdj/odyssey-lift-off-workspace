import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Module from './module';
import Track from './track';
/** importing our pages */
import Tracks from './tracks';

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Tracks />} />
      <Route path="/track/:trackId" element={<Track />} />
      <Route path="/track/:trackId/module/:moduleId" element={<Module />} />
    </Routes>
  );
}
