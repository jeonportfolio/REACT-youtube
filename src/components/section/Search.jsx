import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();

  const handlesearch = () => {
    console.log(searchKeyword);           //3. 여기로 정보 전달한다.
    if(searchKeyword){
        navigate(`/search/${searchKeyword}`);
        setSearchKeyword('');
    }
  }

  return (
    <div className='search__inner'>
        <label htmlFor='searchInput'>
            <span className='ir'>검색</span>
        </label>
        <input 
            type='search' 
            name='searchInput'
            id='searchInput'
            autoComplete='off'
            className='search__input'  
            placeholder='검색어를 입력해주세요.'
            onChange={e => setSearchKeyword(e.target.value)} //1.데이터 입력시 여기서 데이터가 바뀌고
            onKeyDown={e => {
              if(e.key === 'Enter'){            //2.여기서 엔터 쳤을떄 
                  handlesearch();
              }
            }}  
        />
    </div>
  )
}

export default Search