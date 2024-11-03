// src/components/Loading.tsx

import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loading: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flexDirection: 'column',
      }}
    >
      {/* Material-UI CircularProgress Spinner */}
      <CircularProgress size={40} color="primary" style={{ marginBottom: '10px' }} />
      {/* Loading text */}
      <p>Loading data...</p>
    </div>
  );
};

export default Loading;
