import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Card from "./components/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../../../store/blogSlice";
const Home = () => {
  const { status, blogs } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);
  return (
    <>
      <Layout />
      <div className="flex flex-wrap space-between gap-10 items-center justify-center">
        {blogs.length > 0 &&(
          blogs.map((blog) => {
            return <Card key={blog?.id} blogs={blog} />;
          })
        )}
      </div>
    </>
  );
};

export default Home;
