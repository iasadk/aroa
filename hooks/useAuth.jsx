import { useState, useEffect } from 'react';
import { getLocalStorageItem } from '../service/Storage';

const useAuth = () => {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const fetchAuth = async () => {
      const storedAuth = await getLocalStorageItem('auth');
      setAuth(storedAuth);
    };

    fetchAuth();
  }, []);

  return auth;
};

export default useAuth;
