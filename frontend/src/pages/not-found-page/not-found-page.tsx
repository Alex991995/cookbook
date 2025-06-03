import { useNavigate } from 'react-router';
import notfound from 'assets/notfound.png';

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-4 bg-blue-100">
      <img src={notfound} alt="Logo" className="max-w-[800px]" />
      <button
        className="bg-primary rounded-md p-3 py-2 text-zinc-600 hover:bg-primary-hover cursor-pointer"
        onClick={() => navigate('/')}
      >
        Go to Home Page
      </button>
    </section>
  );
}

export default NotFoundPage;
