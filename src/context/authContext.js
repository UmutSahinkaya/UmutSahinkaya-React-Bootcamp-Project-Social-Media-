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
      name: "Uğur Erdal",
      profilePic:
        "https://media.licdn.com/dms/image/C4E03AQGlGk6y_BXWBQ/profile-displayphoto-shrink_200_200/0/1582197252670?e=1672876800&v=beta&t=Gkwf93pjrfZQ8BbuNz3okEbEZSBpHKFvQMGpTX777CE",
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
