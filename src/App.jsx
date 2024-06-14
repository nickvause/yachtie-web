import React, { useState, useEffect } from "react";
import { fetchData } from "./api/api";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import MainContent from "./MainContent";

const AppContent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    async function fetchDataFromApi() {
      try {
        const fetchedData = await fetchData();
        setData(fetchedData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }
    fetchDataFromApi();
  }, []);

  return isLoggedIn ? <MainContent /> : <LoginPage />;
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;
