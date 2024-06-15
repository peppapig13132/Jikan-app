import "./App.css";
import GithubCorner from 'react-github-corner';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-4xl my-3 text-slate-700">
        Hello React.js!
      </h2>
      <p className="text-slate-700">
        React.js boilerplate pre-configured with TypeScript and Tailwind CSS
      </p>
      <p className="mt-12 text-slate-700">Made with ❤️ by <a target="_blank" href="https://github.com/peppapig13132">Pepp</a></p>
      <GithubCorner
        href='https://github.com/peppapig13132/Jikan-App'
        size={120}
        bannerColor='#334155'
      />
    </div>
  );
}

export default App;
