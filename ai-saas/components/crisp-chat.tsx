"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("fd958f9c-db01-4ff9-8579-497cf429239d");
  }, []);

  return null;
};
