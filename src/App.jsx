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
import outOfStock from './assets/out-of-stock.png'


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
        inventory.sort((a, b) => {
            return a.refreshRate - b.refreshRate
        });
        console.log(inventory);
    }
    function sortBigTV() {
        inventory.sort((a, b) => {
                const maxSizeA = Math.max(...a.availableSizes)
                const maxSizeB =  Math.max(...b.availableSizes)

                return maxSizeB - maxSizeA;
            });
        console.log(inventory);
    }

    const remainingProducts= calculateProductToBeSold(inventory);

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
                    <article className="dashboard-box items-for-sale">
                        <h3>Aantal te verkopen producten</h3>
                        <h2>{calculateProductToBeSold(inventory)}</h2>
                    </article>
                </div>
            </section>
            <section className="best-seller-container">
                <h2> Beste verkochte tv </h2>
                <article className="product product-best-seller">
                            <span className="product-image">
                                <img src={createImageTv(bestSellingTv)} alt="Image bestselling tV"/>
                            </span>
                    <div className={"product-info"}>
                        <h3>{createProductName(bestSellingTv)}</h3>
                        <p className="product-price"> {createProductPrice(bestSellingTv)}</p>
                        <p>{createProductScreenSizeString(bestSellingTv.availableSizes)}</p>
                        <ul className="option-list">
                            <li><img src={check} alt="Icoon: aanwezig" className="icon"/>wifi</li>
                            <li><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>speech</li>
                            <li><img src={check} alt="Icoon: aanwezig" className="icon"/> hdr</li>
                            <li><img src={check} alt="Icoon: aanweig" className="icon"/>bluetooth</li>
                            <li><img src={minus} alt="Icoon: niet aanwezig" className="icon"/>ambilight</li>
                        </ul>
                    </div>
                </article>
            </section>
            <section>
                <h2>Alle Tvs</h2>
                <button type="button" onClick={sortBestSellers}> Meest verkocht eerst</button>
                <button type="button" onClick={sortCheapest}> Goedkoopste eerst</button>
                <button type="button" onClick={sortSport}> Meest geschikt voor sport eerst</button>
                <button type="button" onClick={sortBigTV}>Grootste schermgroottes eerst</button>
                    {inventory.map((tv) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <article className="product"> {tv.brand}
                            <span className="product-image">
                              <img src={tv.sourceImg} alt="Afbeelding van het product"/>
                            </span>
                            <div className="product-info">
                                <h3>{createProductName(tv)}</h3>
                                    <p className="product-price">{createProductPrice(tv.price)} </p>
                                    <p>{createProductScreenSizeString(tv.availableSizes)}</p>
                                        <ul className="option-list">
                                            {tv.options.map((option) => {
                                                if (option.applicable === true) {
                                                    return <li key={`${tv.type}-${option.name}`}><img src={check}
                                                                                                      alt="Icoon: aanwezig"
                                                                                                      className="icon"/> {option.name}
                                                    </li>
                                                } else {
                                                    return <li key={`${tv.type}-${option.name}`}><img src={minus}
                                                                                                      alt="Icoon: niet aanwezig"
                                                                                                      className="icon"/> {option.name}
                                                    </li>
                                                }
                                            })
                                            }
                                        </ul>
                            </div>
                        </article>
                    )
                    })}
            </section>
        </main>
    )
}export default App