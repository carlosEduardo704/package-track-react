import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import CentralElementsSearchCep from '../components/SearchCepPage/centralElements';
import Footer from '../components/Footer';
import SectionElements from '../components/SearchCepPage/sectionElements';
import BuscaCepDataContext from '../components/SearchCepPage/buscaCepContext';
import DataSearchCep from '../components/SearchCepPage/DataSearchCep'

const SearchCep = () => {

  const {data, updateData} = useContext(BuscaCepDataContext);
  return(
    <div>
      <NavBar/>
      <CentralElementsSearchCep/>
      {data && <DataSearchCep/>}
      <SectionElements/>
      <Footer/>
    </div>
  )
}

export default SearchCep;