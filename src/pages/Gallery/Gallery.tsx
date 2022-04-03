import { lazy, Suspense, useLayoutEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import checkLogin from "../../utils/checkLogin";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Gallery = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    loading: true,
    images: [],
  });

  useLayoutEffect(() => {
    const checkLoginStatus = async () => {
      let res = await checkLogin();
      if (!res) {
        navigate("/");
        alert("You are not logged in");
      }
    };

    checkLoginStatus();
  }, []);
  return (
    <div>
      {state.loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="gallery-container">
            {state.images.map((image) => (
              <div className="gallery-item" key={image}>
                <LazyLoadImage
                  src={image}
                  alt={image}
                  effect="blur"
                  width="300px"
                  height="300px"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
