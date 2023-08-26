const isBrowser = typeof window !== 'undefined';

function unhandledrejectionHandler(e: PromiseRejectionEvent) {
  throw e.reason;
}

function errorHandler(error: ErrorEvent) {
  console.error(error);
  return false;
}

export const globalErrorHandler = () => {
  if (!isBrowser) return;

  window.removeEventListener('unhandledrejection', unhandledrejectionHandler);
  window.removeEventListener('error', errorHandler, true);

  window.addEventListener('unhandledrejection', unhandledrejectionHandler);
  window.addEventListener('error', errorHandler, true);
};
