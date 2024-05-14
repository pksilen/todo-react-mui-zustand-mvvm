import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import { Button } from 'app/common/components/buttons/Button';
import { Heading3 } from 'app/common/components/typography/Heading3';
import classes from './ErrorBoundary.module.scss';
import { useErrorBoundaryViewModel } from './model/useErrorBoundaryViewModel';


type Props = {
  children: React.ReactNode;
};

export const ErrorBoundary = ({ children }: Props) => {
  const vm = useErrorBoundaryViewModel();

  const errorSection = (
    <section className={classes.error}>
      <Heading3>Something went wrong.</Heading3>
      {vm.hasError && (
        <Button className={classes.button} onClick={vm.clearError}>
          Ok
        </Button>
      )}
    </section>
  );

  return (
    <ReactErrorBoundary fallback={errorSection}>
      {vm.hasError ? errorSection : children}
    </ReactErrorBoundary>
  );
};
