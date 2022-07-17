import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Farms from './component/farms/Farms';
import Pools from './component/pools/Pools';
import Header from './component/header/Header';

import ConnectWallet from './component/modal/connect-wallet/ConnectWallet';
import GridFarms from './component/farms/gridList/GridFarms';
import GridPools from './component/pools/gridList/GridPools';
import { checkWalletIsConnected } from './component/ethereumCliet';

function App() {
  const [accountAddress, setAccountAddress] = useState('');
  const [accountDottedAddress, setAccountDottedAddress] = useState('');

  const conectmetaMask = () => {
    if (typeof window !== 'undefined') {
      checkWalletIsConnected().then((res) => {
        setAccountAddress(res);
      });
    }
  };

  useEffect(() => {
    const firstTwo = accountAddress?.slice(0, 2);
    const lastFour = accountAddress?.slice(accountAddress.length - 4);
    if (accountAddress) {
      setAccountDottedAddress(firstTwo + '...' + lastFour);
    }
  }, [accountAddress]);

  return (
    <div>
      <Header
        conectmetaMask={conectmetaMask}
        accountDottedAddress={accountDottedAddress}
      />
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={
              <Farms
                conectmetaMask={conectmetaMask}
                accountDottedAddress={accountDottedAddress}
              />
            }
          />
          <Route
            path='/farms'
            element={
              <Farms
                conectmetaMask={conectmetaMask}
                accountDottedAddress={accountDottedAddress}
              />
            }
          />
          <Route
            path='pools'
            element={
              <Pools
                conectmetaMask={conectmetaMask}
                accountDottedAddress={accountDottedAddress}
              />
            }
          />
          <Route
            path='/grid-farms'
            element={
              <GridFarms
                conectmetaMask={conectmetaMask}
                accountDottedAddress={accountDottedAddress}
              />
            }
          />
          <Route
            path='/grid-pools'
            element={
              <GridPools
                conectmetaMask={conectmetaMask}
                accountDottedAddress={accountDottedAddress}
              />
            }
          />
          <Route path='/wallet' element={<ConnectWallet />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
