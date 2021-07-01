import React from "react";
import "./App.css";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "unauthenticated-app";
import { useAuth } from "context/auth-context";
import { ErrorBoundary } from "components/error-boundaries";
import { FullPageErrorFallback } from "components/lib";
function App() {
  const { user } = useAuth();
  console.log("useruseruser", user);
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
