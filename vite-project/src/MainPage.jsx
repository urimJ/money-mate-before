import { useState } from 'react'

import './MainPage.css'

function MainPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <container >
        <div className = "contHeader">
            <p className = "title">홍길동의 가계부</p>
        </div>
        <div className = "contBody">
            <table className = "tableWidth">
                <thead>
                    <tr>
                        <th className = "widthFixed">날짜</th>
                        <th>내용</th>
                        <th>금액</th>
                        <th>그룹A</th>
                        <th>그룹B</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className = "widthFixed">2023-05-17</td>
                        <td>박수련장인 베개</td>
                        <td>50,000</td>
                        <td>생활용품</td>
                        <td>카카오뱅크카드</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </container>
    </>
  )
}

export default MainPage
