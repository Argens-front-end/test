import { Typography } from "@mui/material";
import { useAppDispatch } from "../../Hooks";
import { IPhoto } from "../../Types";

export default function PhotoItem({
  id,
  title,
  thumbnailUrl,
  url,
  albumId,
}: IPhoto) {
  const { openModalAction } = useAppDispatch();

  const onClickPhoto = () => {
    openModalAction({ id, title, thumbnailUrl, url, albumId });
  };

  return (
    <div onClick={onClickPhoto}>
      <img src={thumbnailUrl} alt={title} />
      <Typography>{title}</Typography>
    </div>
  );
}
