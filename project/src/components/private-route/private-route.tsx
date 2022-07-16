import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../enums/route-enum';

type PrivateRouteProps = {
  authorization: AuthorizationStatus,
  children:JSX.Element
}

function PrivateRoute(props:PrivateRouteProps){
  const {authorization, children} = props;
  return(
    authorization === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Main} />
  );
}
export default PrivateRoute;
