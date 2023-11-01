import React, { useEffect, useState } from "react";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h4>This is Left navbar</h4>
    </div>
  );
};

export default LeftNav;
