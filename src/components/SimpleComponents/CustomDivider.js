import { Divider } from "@mui/material";
export default function (props) {
    const { mt, mb } = props
    return (<Divider sx={{ marginTop: mt, marginBottom: mb }} />);
}