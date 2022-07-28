import moment from "moment";
import React, { useEffect, useState } from "react";
import categoryApi from "../../../pages/api/categoryApi";

export const RemakeablePost = (idCategory, page, pageSize) => {
  const [remakeablePost, setRemakeablePost] = useState([]);
  const momentFunc = (dateToFormat) => {
    return moment(dateToFormat).format("DD/MM/YYYY");
  };
  const fetchPostByCategory = async (idCategory) => {
    try {
      const resCategory = await categoryApi.getPostsCategory(idCategory, {
        pageIndex: `${page}`,
        pageSize: `${pageSize}`,
      });
      setRemakeablePost(resCategory?.data?.data);
      setTotalPage(res?.data?.totalPages);
    } catch (error) {
      console.log("API fetchPostByCategory that bai", error);
    }
  };

  useEffect(() => {
    fetchPostByCategory(idCategory);
  }, [idCategory]);
  return (
    <div className="hightlights__care-content">
      {remakeablePost?.map((data) => (
        <GridItem key={data._id} data={data} momentFunc={momentFunc} />
      ))}
    </div>
  );
};
