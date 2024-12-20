import React, { useEffect, useState } from "react";
import Product from "../Components/Product";
import Spinner from "../Components/Spinner";
import Navbar from '../Components/Navbar';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log("Error fetching products:", error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <>
      <div className="bg-slate-900 w-full fixed z-10">
          <Navbar/>
        </div>
    
    <div className="p-20">
      {loading ? (
        <div className=" h-screen flex items-center justify-center">
          <Spinner />
        </div>
      ) : posts.length > 0 ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] z-10">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="h-screen justify-center flex items">
          <p className="text-center text-3xl mt-20"> NO data found</p>
        </div>
      )}
    </div>
    </>
  );
};

export default Home;
