import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    // TODO API
    setCurrentUser({
      id: 1,
      name: "Umut Şahinkaya",
      profilePic:
        "https://media.licdn.com/dms/image/D4D03AQELHS3HNXk2NA/profile-displayphoto-shrink_200_200/0/1667559172935?e=1672876800&v=beta&t=FRZnWBYHa57fJF1JqcRKq__Uvhzb1OYHcHOt5NlOdQY",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
