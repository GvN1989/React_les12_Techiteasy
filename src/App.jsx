import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import {calculateSoldProducts} from "./helpers/totalTvSold.js"
import {calculateInitialStock} from "./helpers/calculateInitialStock.js";
import {calculateProductToBeSold} from "./helpers/calculateProductToBeSold.js";
import {createProductName} from "./helpers/createProductName.js"
import {createProductPrice} from "./helpers/createProductPrice.js";
import {createProductScreenSizeString} from "./helpers/createProductScreenSizeString.js";
import {createImageTv} from "./helpers/createImageTv.js";
import minus from './assets/minus.png';
import check from './assets/check.png';

function App() {
    function sortBestSellers() {
        inventory.sort((a, b) => {
            return a.sold - b.sold
        });
        console.log(inventory);
    }

    function sortCheapest() {
        inventory.sort((a, b) => {
            return a.price - b.price
        });
        console.log(inventory);
    }

    function sortSport() {
        inventory.sort ((a, b) => {
            return a.refreshRate - b.refreshRate
    });
    console.log(inventory);
}


  return (
      <main className="page-container">
          <h1>Tech it easy Dashboard </h1>
          <section>
                <h2>Verkoopoverzicht</h2>
              <div className="box">
                    <article className="dashboard-box items-sold">
                        <h3>Aantal verkochte producten</h3>
                        <h2>{calculateSoldProducts(inventory)}</h2>
                    </article>
                    <article className="dashboard-box items-in-stock">
                        <h3>Aantal verkochte producten</h3>
                        <h2>{calculateInitialStock(inventory)}</h2>
                    </article>
                    <article className= "dashboard-box items-for-sale">
                        <h3>Aantal te verkopen producten</h3>
                        <h2>{calculateProductToBeSold(inventory)}</h2>
                    </article>
              </div>
                <h2> Beste verkochte tv </h2>
                    <p className= "best-soldTv-info-box"> {createProductName(bestSellingTv)} </p>
                    <p> {createProductPrice(bestSellingTv)}</p>
                    <p>{createProductScreenSizeString(bestSellingTv.availableSizes)}</p>
                    <img className="image-of-bestsellingTV" src={createImageTv(bestSellingTv)} alt = "Image bestselling tV"/>
              <ul className="product-info">
                  <li><img src={check} alt="Icoon: aanwezig" className="icon"/>wifi</li>
                  <li><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>speech</li>
                  <li><img src={check} alt="Icoon: aanwezig" className="icon"/> hdr </li>
                  <li><img src={check} alt="Icoon: aanweig" className="icon"/>bluetooth</li>
                  <li><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>ambilight</li>
              </ul>
          </section>
          <section>
              <h2>Alle Tvs</h2>
                    <button type="button" onClick={sortBestSellers}> Meest verkocht eerst </button>
                    <button type="button" onClick={sortCheapest}> Goedkoopste eerst</button>
                    <button type="button" onClick={sortSport}> Meest geschikt voor sport eerst</button>
          </section>
      </main>
  )
}

export default App
