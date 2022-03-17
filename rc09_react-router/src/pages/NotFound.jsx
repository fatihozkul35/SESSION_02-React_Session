import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <img
        className="w-75"
        src="https://cdn.yenicaggazetesi.com.tr/news/2022/03/150320221117469981053.jpeg"
        alt=""
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default NotFound;
