import React, { useEffect, useState } from "react";
import CountryListNavbar from "./CountryListNavbar";
import axios from "axios";

const CountryListView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://testapi.devtoolsdaily.com/countries")
      .then((response) => {
        changeData(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CountryListNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">iso2</th>
                      <th scope="col">iso3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">{value.name}</th>
                          <td>{value.iso2}</td>
                          <td>{value.iso3}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryListView;
