import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [search, setSearch] = useState(false);
  const formRef = useRef(null);

  const activateSearch = () => {
    setSearch(true);
  };

  const deactivateSearch = () => {
    setSearch(false);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (formRef.current && !formRef.current.contains(event.target) && search === true) {
        deactivateSearch();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [search]);

  const handleReset = () => {
    setSearchQuery('');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `search=${encodeURIComponent(searchQuery)}`,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };
  

  return (
    <div>
      <nav className="navigation-bar">
        <button className="search-btn" onClick={activateSearch}>
          <i className="fa-solid fa-magnifying-glass"></i> Search
        </button>
        <form 
        ref={formRef} className={`form-search-activated ${search === true ? 'show' : 'hide'}`} 
        onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Ex: Cactus"
            name="search"
            value={searchQuery}
            onChange={handleInputChange}
            className="search-input"
          />
        </form>
        <a href="/" className="nav-brand">
          <h1>Aries Garden</h1>
        </a>
        <div className="account-cart">
          <a href="/account" className="home-account">
            <i className="fa-solid fa-user"></i>
          </a>
          <a href="/cart" className="home-cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;