import React from 'react';
import { DynamicLayout, useDynamicLayoutProvider } from './DynamicLayout';

export function Sample() {
  const layoutController = useDynamicLayoutProvider();
  return <div>
    <DynamicLayout
      side={<div style={{ backgroundColor: 'green', height: 500, width: '100%' }}>side</div>}
      content={<div style={{ backgroundColor: 'red', height: 500, width: '100%' }}>content</div>
      }
    />
    <hr />
    <button onClick={layoutController.onToggle} >
      toggle
      </button>
  </div >
}