import React, { useEffect } from 'react';

export default function PageRedirect() {
  useEffect(() => {
    window.location.href = '/';
  }, []);

  return null; // Tidak render apapun
}
