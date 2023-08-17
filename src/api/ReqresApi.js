const BASE_URL = 'https://reqres.in/api';

export const login = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Login failed');
    }

    const data = await response.json();
    console.log('data logged', data);
    return data;
  } catch (error) {
    throw error;
  }
};

export const register = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Registration failed');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const checkAuthentication = async () => {
  try {
    const response = await fetch(`${BASE_URL}/check-authentication`);

    if (!response.ok) {
      throw new Error('Failed to verify authentication');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
