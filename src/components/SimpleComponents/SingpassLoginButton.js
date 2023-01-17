import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { handleRedirect } from "../../Util/Helper";

export default function () {
    return (
        <Box overflow='hidden'>
            <img width="100%" style={{ maxWidth: '400px' }} src="/singpass/singpassLoginBtn.png" />
        </Box>
    );
}