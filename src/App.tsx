import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import { ErrorBoundary } from 'react-error-boundary';
import Dashboard from './components/dashboard/DashBoard';
import ErrorAlert from './components/dashboard/components/ErrorAlert';
import { CircularProgress, Box, Typography } from '@mui/material';

function LoadingFallback() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{ backgroundColor: 'background.default', p: 2 }}
    >
      <CircularProgress />
      <Typography variant="h6" mt={2}>
        Loading Remote Application...
      </Typography>
    </Box>
  );
}

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong host app</div>}>
      <Provider store={Store}>
        <div>
          <Suspense fallback={<LoadingFallback />}>
            <ErrorAlert />
            <Dashboard />
          </Suspense>
        </div>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
