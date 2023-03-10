import { useEffect, useState } from 'react';
import './App.css';
import TableCoins from './components/TableCoins';
import axios from 'axios';

function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  const getData = async () => {
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    setCoins(res.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container">
      <div className='row'>
        <input type="text" placeholder='Search one cripto' className='form-control bg-dark text-light border-0 mt-4 text-center' onChange={e => setSearch(e.target.value)} />
        <TableCoins coins={coins} search={search}/>
      </div>
    </div>
  );
}

export default App;
