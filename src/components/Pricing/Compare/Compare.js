import React from "react";
import {data} from "./CompareData"
import {CompareContainer, CompareTable} from "./CompareElements"
import checkIcon from '../../../assets/pricing/desktop/check.svg'

export default function Compare(){
  const table = data.map(item => (
    <tr>
      <td>{item.feature}</td>
      <td>{item.basic && <img src={checkIcon} />}</td>
      <td>{item.pro && <img src={checkIcon} />}</td>
      <td>{item.business && <img src={checkIcon} />}</td>
    </tr>
  ))

  return (
    <CompareContainer>
      <h2>compare</h2>
      <CompareTable>
        <table>
          <thead>
            <tr>
              <th>the features</th>
              <th>basic</th>
              <th>pro</th>
              <th>business</th>
            </tr>
          </thead>
          <tbody>
            {table}
          </tbody>
        </table>
      </CompareTable>
    </CompareContainer>

  )
}