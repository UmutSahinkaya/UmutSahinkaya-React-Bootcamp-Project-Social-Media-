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
        "https://media.licdn.com/dms/image/C4D03AQENH7PxMixW8Q/profile-displayphoto-shrink_800_800/0/1659559455846?e=1672876800&v=beta&t=OXRguISjbpJ_KnEpVnkGC-9NzHZN58n0-Hi3pB8x2dI",
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
