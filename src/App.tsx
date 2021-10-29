import { Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import PhotoItem from "./Components/PhotoItem";
import SelectAlbum from "./Components/SelectAlbum";
import { useAppDispatch, useAppSelector } from "./Hooks";

function App() {
  const [page, setPage] = useState<number>(1);
  const [albumId, setAlbumId] = useState<string | undefined>();

  const photos = useAppSelector((state) => state.App.photos);

  const { fetchPhotosAction } = useAppDispatch();

  useEffect(() => {
    fetchPhotosAction(page, albumId);
  }, [page, albumId]);

  const changePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const onChangeAlbum = (albumId: string) => {
    setPage(1);
    setAlbumId(albumId);
  };

  return (
    <div className="App">
      <SelectAlbum value={albumId || ""} setAlbumId={onChangeAlbum} />
      <div>
        {photos.map((photo) => (
          <PhotoItem {...photo} key={"photo" + photo.id} />
        ))}
      </div>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={changePage} />
    </div>
  );
}

export default App;
