import { useLocation, useNavigate, useParams } from "react-router-dom"

export const appRouter = (OrignalComponent) => {
    return function NewComponent(props) {
        const navigate = useNavigate();
        const location = useLocation();
        return <OrignalComponent navigate={navigate} location={location} {...props} />
    }
}