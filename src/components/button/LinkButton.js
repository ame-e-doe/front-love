import { Link } from "react-router-dom";

function LinkButton({to, text}) {
    return(
        <Link className="btn btn-primary container" to={to}>
            {text}
        </Link>
    )
}
export default LinkButton;