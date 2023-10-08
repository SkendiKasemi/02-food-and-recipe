// import { useState, useEffect } from 'react';

// export function useLocalStorageState(initialState, key) {
//   const [value, setValue] = useState(function () {
//     const storedValue = localStorage.getItem(key);
//     return storedValue ? JSON.parse(storedValue) : initialState;
//   });

//   useEffect(
//     function () {
//       localStorage.setItem(key, JSON.stringify(value));
//     },
//     [value, key]
//   );

//   return [value, setValue];
// }
import { useState, useEffect } from 'react';

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } catch (error) {
      // Handle any potential JSON parsing errors
      console.error('Error parsing JSON from localStorage:', error);
      return initialState;
    }
  });

  useEffect(
    function () {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        // Handle any potential errors when saving to localStorage
        console.error('Error saving to localStorage:', error);
      }
    },
    [value, key]
  );

  return [value, setValue];
}
