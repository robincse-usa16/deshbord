import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AuthWrapper from "./components/AuthWrapper";
import Dashboard from "./page/Dashboard";
import ContentManager from "./components/ContentManager";
import FeedManager from "./components/FeedManager";
import ChannelManager from "./components/ChannelManager";
import TableBox from "./components/TableBox";
import Billing from "./BillingPage/Billing";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <AuthWrapper>
                <Dashboard />
              </AuthWrapper>
            }
          />
          <Route
            exact
            path="/table-box"
            element={
              <AuthWrapper>
                <TableBox />
              </AuthWrapper>
            }
          />
          <Route
            exact
            path="/billing"
            element={
              <AuthWrapper>
                <Billing />
              </AuthWrapper>
            }
          />
          <Route
            exact
            path="/content-manager"
            element={
              <AuthWrapper>
                <ContentManager />
              </AuthWrapper>
            }
          />
          <Route
            exact
            path="/feed-manager"
            element={
              <AuthWrapper>
                <FeedManager />
              </AuthWrapper>
            }
          />
          <Route
            exact
            path="/channel-manager"
            element={
              <AuthWrapper>
                <ChannelManager />
              </AuthWrapper>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
