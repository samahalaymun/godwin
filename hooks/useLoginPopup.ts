import { useState, useEffect } from "react";
import { useAuthStore } from "@/store/useAuthStore";

export const useLoginPopup = () => {
  const user = useAuthStore((s) => s.user);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!user) setShowPopup(true);
  }, [user]);

  return {
    showPopup,
    closePopup: () => setShowPopup(false)
  };
};
