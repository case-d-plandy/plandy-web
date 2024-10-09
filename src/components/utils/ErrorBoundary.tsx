import { Component, PropsWithChildren, ReactNode } from "react";

interface ErrorBoundaryProps {
  fallback: ReactNode;
}

class ErrorBoundary extends Component<
  PropsWithChildren<ErrorBoundaryProps>,
  { hasError: boolean }
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
