import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { useDynamicLayoutProvider } from './DynamicLayoutProvider';


// will 1st grid and turn 8grid to 12 gird
// _____________________
// | - 4 - |   - 8  -   |
// |       |            |
// |       |            |
// |       |            |
// 
//         to 
// _____________________
// |  --   12    --     |
// |                    |
// |                    |
// |                    |

export function DynamicLayout({
  side,
  content,
}) {
  const layoutController = useDynamicLayoutProvider();
  return <Grid container>
    {
      layoutController.isFull ? null : <Grid item xs={4}>
        {side}
      </Grid>
    }
    <Grid item xs={layoutController.isFull ? 12 : 8}>
      {content}
    </Grid>
  </Grid >
}

DynamicLayout.propTypes = {
  side: PropTypes.node,
  content: PropTypes.node,
}
