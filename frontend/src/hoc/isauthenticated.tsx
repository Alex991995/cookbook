
import { useGetUserQuery } from 'store/api/api';

interface IIsAuthenticated {
  children: React.ReactNode;
}

function IsAuthenticated({ children }: IIsAuthenticated) {
  const { data } = useGetUserQuery();
  // const navigate = useNavigate()

  if (data) {
    return <>{children}</>;
  }
  // navigate('/login')
 return <>{children}</>;
}

export default IsAuthenticated;
