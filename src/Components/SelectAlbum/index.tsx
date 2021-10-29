import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks";

import styles from "./SelectAlbum.module.css";

function SelectAlbum() {
  const { fetchAlbumsAction, onChangeAlbumId, onChangePage } = useAppDispatch();
  const { albums, albumId } = useAppSelector((state) => state.App);

  const onChange = (e: SelectChangeEvent) => {
    onChangePage(1);
    onChangeAlbumId(e.target.value);
  };

  useEffect(() => {
    fetchAlbumsAction();
  }, []);

  return (
    <FormControl className={styles["select"]}>
      <InputLabel id="albumSelect">Album</InputLabel>
      <Select
        label="Album"
        labelId={"albumSelect"}
        value={albumId || ""}
        onChange={onChange}
      >
        {albums.map((item, index) => (
          <MenuItem value={item.id} key={"select" + index}>
            {item.id} {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectAlbum;
