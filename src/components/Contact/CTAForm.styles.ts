import { SxProps, Theme } from "@mui/system";

export const formStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: 4,
    padding: "80px",
    backgroundColor: "rgb(245, 245, 245)",
  } as SxProps<Theme>,
  form: {
    width: "100%",
    maxWidth: 300,
    backgroundColor: "#fff",
    p: 3,
    borderRadius: 2,
    border: "solid rgb(217, 217, 217) 1px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  } as SxProps<Theme>,
  button: {
    width: "100%",
    mt: 2,
    borderRadius: 2,
    backgroundColor: "black",
    textTransform: "none",
  } as SxProps<Theme>,
};
