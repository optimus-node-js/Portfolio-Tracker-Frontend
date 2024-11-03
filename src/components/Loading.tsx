// src/components/Loading.tsx

import React from 'react';
import { Spinner } from "@nextui-org/spinner";

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
      {/* NextUI Spinner */}
      <Spinner size="lg" color="primary" style={{ marginBottom: '10px' }} />
      {/* Loading text */}
      <p>Loading data...</p>
    </div>
  );
};

export default Loading;
