import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { BiChevronRight, BiHome } from 'react-icons/bi';
import { MainSliderMovies } from '../MoviesList/MoviesList';

const Breadcrumb = () => {
  const location = useLocation();
  const { id } = useParams();
  
  // Get current movie/series if we're on a details page
  const content = id ? MainSliderMovies.find(m => m.id === parseInt(id)) : null;
  
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  return (
    <nav className="flex items-center space-x-2 text-sm text-white/60">
      <Link 
        to="/home" 
        className="flex items-center hover:text-white transition-colors duration-200"
      >
        {/* <BiHome className="mr-1" size={16} /> */}
        Home
      </Link>
      
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        // Custom name mapping
        let displayName = pathname;
        if (pathname === 'movies' && !id) {
          displayName = 'Movies';
        } else if (pathname === 'movies' && id) {
          displayName = 'Movies';
        } else if (pathname === 'webseries' && !id) {
          displayName = 'Web Series';
        } else if (pathname === 'webseries' && id) {
          displayName = 'Web Series';
        } else if (pathname === id && content) {
          displayName = content.name || `${content.type === 'Web series' ? 'Series' : 'Movie'} ${id}`;
        } else if (pathname === 'categories') {
          displayName = 'Categories';
        } else if (pathname === 'search') {
          displayName = 'Search';
        } else {
          // Capitalize first letter and replace hyphens with spaces
          displayName = pathname.charAt(0).toUpperCase() + pathname.slice(1).replace(/-/g, ' ');
        }
        
        return (
          <React.Fragment key={routeTo}>
            <BiChevronRight size={16} className="text-white/40" />
            {isLast ? (
              <span className="text-white font-medium">{displayName}</span>
            ) : (
              <Link 
                to={routeTo}
                className="hover:text-white transition-colors duration-200"
              >
                {displayName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;