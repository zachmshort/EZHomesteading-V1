import ConsumerNavBar from '../components/ConsumerNavBar';
import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

export default function StaticHome() {
    const [showHomePage, setShowHomePage] = useState(true);
  
    useEffect(() => {
    }, []);
  
    const handleNavigate = () => {
      setShowHomePage(false);
    };
  
      return (
        <>
            <ConsumerNavBar/>
            <li><Link to="/" className="link" onClick={handleNavigate}>Test</Link></li>
        </>
      );
    }