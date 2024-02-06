import './App.css';
import {inventory} from "./constants/inventory.js";
import {calculateSoldProducts} from "./helpers/totalTvSold.js"
import {calculateInitialStock} from "./helpers/calculateInitialStock.js";
import {calculateProductToBeSold} from "./helpers/calculateProductToBeSold.js";

function App() {
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
                    <p className= "best-soldTv-info-box">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, commodi consequatur dicta eligendi laborum optio praesentium repudiandae sint soluta temporibus? </p>
              </section>
      </main>
  )
}

export default App
