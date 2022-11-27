import React, { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import Filters from "../Components/Filters";
import Video from "../Components/Video";
import { Videos } from "../Data/VideosData";
import Layout from "../Layout/Layout";

function VideosPage() {
  const maxPage = 10;
  const [page, setPage] = useState(maxPage);
  const HandleLoadingMore = () => {
    setPage(page + maxPage);
  };
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters />
        <p className="text-lg font-medium my-6">
          총 <span className="font-bold text-subMain">{Videos?.length}</span> 개
          찾음
        </p>
        <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {Videos.slice(0, page)?.map((movie, index) => (
            <Video key={index} movie={movie} />
          ))}
        </div>
        {/* Loading More */}
        <div className="w-full flex-colo md:my-20 my-10">
          <button
            onClick={HandleLoadingMore}
            className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain"
          >
            더 보기 <CgSpinner className="animate-spin" />
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default VideosPage;
