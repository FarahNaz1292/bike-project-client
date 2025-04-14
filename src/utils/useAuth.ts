
'use client';

import { User } from "@/types/userTypes";

export const getUser = (): User | null => {
    try {
      const userString = localStorage.getItem("user");
      if (!userString) {
        return null;
      }
      
      const userData = JSON.parse(userString) as User;
      
      // Basic validation to ensure we have a proper user object
      if (!userData._id || !userData.email) {
        console.warn("Invalid user data structure in localStorage");
        return null;
      }
      
      return userData;
    } catch (error) {
      console.error("Error retrieving user from localStorage:", error);
      // Clean up invalid data
      localStorage.removeItem("user");
      return null;
    }
  };