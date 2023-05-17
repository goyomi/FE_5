import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Item = styled.div`
  margin: 60px auto;

  ul{
    padding: 10px;
  }
  li{
    margin: 20px 0;
    padding: 10px;
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 10px;
    list-style: none;
    box-shadow: 4px 4px 6px rgba(0,0,0,0.1);
  }
`


export default function NationList() {
  
  const [nations, setNations] = useState([]);
  const [url, setUrl] = useState('http://localhost:3000/nations')

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(url);
        // 동기에 await붙여줌 
        // response promise 반환

        // api에 질문(쿼리) 가능 ?population=200 json server 주소뒤에 붙이면 이것만 보여줌 => 자료구조가 너무 복잡한 경우 

            if (!response.ok) {
                throw new Error("네트워크 응답에 문제가 있습니다.");
            }
            const json = await response.json();

            setNations(json);
        } catch (error) {
            console.error('데이터를 가져오는데 문제가 발생했습니다 : ', error);
        }
    }

    fetchData();
}, [url]);
    
    // fetch("http://localhost:3000/nations")
    //   .then(response => {
    //     // http 상태코드가 200번대가 찍힌건지 확인하는 것 => 서버와 통신이잘되는지 
    //     if(!response.ok){
    //       throw new Error("네트워크 응답에 문제가 있습니다")
    //     }
    //     return response.json()
    //   })
    //   .then(json => {
    //     console.log(json);
    //     setNations(json)
    //   })
    //   .catch((error)=>{
    //     console.error('데이터를 가져오는데 문제가 발생했습니다', error)
    //   })
    // },[])

    // console.log(nations)
  
  return (
    <Item>
      <h2>나라 목록</h2>
        <ul>
          {nations.map((nations)=>{
            return <li key={nations.id}>
              <h3>나라 이름 :{nations.title}</h3>
              <p>인구 수 :{nations.population}</p>
            </li>
          })}
        </ul>   
        <div>
          <button onClick={()=>{setUrl('http://localhost:3000/nations?loc=europe')}}>유럽목록</button>
          <button onClick={()=>{setUrl('http://localhost:3000/nations')}}>전체목록</button>
        </div>
    </Item>
  )
}
