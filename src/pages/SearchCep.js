import React from 'react';
import NavBar from '../components/NavBar';
import CentralElementsSearchCep from '../components/SearchCepPage/centralElements';
import Footer from '../components/Footer';
import SectionElements from '../components/SearchCepPage/sectionElements';

const SearchCep = () => {
  return(
    <div>
      <NavBar/>
      <CentralElementsSearchCep/>
      <SectionElements/>
      <Footer/>
    </div>
  )
}

export default SearchCep