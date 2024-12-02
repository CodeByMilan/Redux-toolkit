import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../../components/Navbar";
import { updateBlog, getBlog, fetchBlog } from "../../../store/blogSlice";
import Form from "./components/Form";
import STATUSES from "../../globals/status/statuses";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { blog, status } = useSelector((state) => state.blog);
  console.log(blog);
  const handleEdit = (data) => {
    dispatch(updateBlog(id, data));
    dispatch(fetchBlog());
    if (status === STATUSES.SUCCESS) {
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Navbar />
      {blog && (
        <Form title="Edit Blog"btnName="Edit" onSubmit={handleEdit} blog={blog}
        />
      )}
    </>
  );
};

export default EditBlog;
