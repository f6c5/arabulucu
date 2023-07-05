import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>404</h2>
      <p>sayfa bulunamadı</p>
      <p>
        <Link href="/">ana sayfaya dön</Link>
      </p>
    </div>
  );
};

export default NotFound;
