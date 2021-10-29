import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks";

interface ISelectAlbumProps {
  value: string;
  setAlbumId: any;
}

function SelectAlbum({ value, setAlbumId }: ISelectAlbumProps) {
  const { fetchAlbumsAction } = useAppDispatch();
  const { albums } = useAppSelector((state) => state.App);

  const onChange = (e: SelectChangeEvent) => {
    setAlbumId(e.target.value);
  };

  useEffect(() => {
    fetchAlbumsAction();
  }, []);

  return (
    <FormControl fullWidth>
      <InputLabel id="albumSelect">Album</InputLabel>
      <Select
        label="Album"
        labelId={"albumSelect"}
        value={value}
        onChange={onChange}
      >
        {albums.map((item, index) => (
          <MenuItem value={item.id} key={"select" + index}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectAlbum;
