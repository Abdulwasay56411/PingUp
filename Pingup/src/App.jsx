import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./components/Home/Home";
import Message from "./components/Message/Message";
import Connection from "./components/Connection/Connection";
import Discover from "./components/Discover/Discover";
import Profile from "./components/Profile/Profile";
import CreatePost from "./components/CreatePost/CreatePost";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const [routeLoading, setRouteLoading] = useState(false);

  useEffect(() => {
    if (!loading) {
      setRouteLoading(true);
      const timer = setTimeout(() => setRouteLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [location]);

  const Loader = () => {
    return (
      <motion.div
        className="fixed top-0 w-full h-screen flex justify-center items-center bg-white z-50"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </motion.div>
    );
  };

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <AnimatePresence mode="wait">
        {!loading && routeLoading && <Loader key="route-loader" />}
        {!loading && !routeLoading && (
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/message" element={<Message />} />
              <Route path="/connection" element={<Connection />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/createpost" element={<CreatePost />} />
            </Routes>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;
