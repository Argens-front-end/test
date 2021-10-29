import { Pagination, Typography } from "@mui/material";
import React, { useEffect } from "react";
import ModalPhoto from "./Components/ModalPhoto";
import PhotoItem from "./Components/PhotoItem";
import SelectAlbum from "./Components/SelectAlbum";
import { useAppDispatch, useAppSelector } from "./Hooks";

import { LOADING_PHOTO_DATA, LOADING_PHOTO } from "./Constants/app";

function App() {
  const { photos, page, albumId, loading } = useAppSelector(
    (state) => state.App
  );

  const { fetchPhotosAction, onChangePage } = useAppDispatch();

  useEffect(() => {
    fetchPhotosAction(page, albumId);
  }, [page, albumId]);

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    onChangePage(value);
  };

  return (
    <div className="container">
      <ModalPhoto />
      <div className={"header"}>
        <h1>Test Task</h1>
        <SelectAlbum />
      </div>

      <div className={"photo"}>
        {loading
          ? LOADING_PHOTO_DATA.map((photo, index) => (
              <PhotoItem
                key={"photo" + index}
                {...LOADING_PHOTO}
                loading={true}
              />
            ))
          : photos.map((photo) => (
              <PhotoItem {...photo} key={"photo" + photo.id} />
            ))}
      </div>

      <div className={"pagination"}>
        <Typography>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={changePage} />
      </div>
      {/* count 10, потому что не хватает meta данных для полного числа страниц */}
    </div>
  );
}

export default App;
