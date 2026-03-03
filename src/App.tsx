import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TVLoader } from "@/components/ui/TVLoader";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CompanyInfo from "./pages/CompanyInfo";

import JoinUs from "./pages/JoinUs";
import Tolpar from "./pages/Tolpar";
import ContactUs from "./pages/ContactUs";
const queryClient = new QueryClient();

const App = () => {
  // Only show the loader if we are on the homepage initially
  const [isLoading, setIsLoading] = useState(window.location.pathname === "/");

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* TV Loader - shows only on homepage load */}
        {isLoading && <TVLoader onComplete={handleLoaderComplete} />}

        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/company-info" element={<CompanyInfo />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/tolpar" element={<Tolpar />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
