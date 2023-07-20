"use client";

import AuthModal from "@/components/AuthModal";
import { useState, useEffect } from "react";

const ModalProvider = () => {
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal/>
    </>
  );
};

export default ModalProvider;
