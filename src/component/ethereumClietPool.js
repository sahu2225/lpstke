import { ethers } from 'ethers';
import { toast } from 'react-toastify';
import POOLABI from '../poolabi.json';
import LOTTEABI from '../lotteabi.json';

const poolAddress = '0x8b381bFa598a9DA0492dE3E5Ce97ce6Fc84DAe47';
const lotteAddress = '0xa9400Fd24264401AE5511e9F0AcC97899e9Fd78B';

export const checkWalletIsConnected = async () => {
  const { ethereum } = window;

  if (!ethereum) {
    toast.error('Please make sure you have Metamask installed!');
    return;
  } else {
    // const accounts = await ethereum.request({ method: 'eth_accounts' });
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log('Found an authorized account: ', account);
      toast.dismiss();
      toast.success('Wallet connected successfully');
      return account;
    } else {
      toast.dismiss();
      toast.error('No authorized account found');
      console.log('No authorized account found');
    }
  }
};

// approve(addrs of stake, 100)
// stake(100)

export const poolBalanceCheck = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();
  let userAddress = await signer.getAddress();

  const tokenContract = new ethers.Contract(lotteAddress, LOTTEABI, signer);

  let userBalance;
  await tokenContract
    .balanceOf(userAddress)
    .then((balance) => {
      userBalance = ethers.utils.formatUnits(balance, 18);
      return userBalance;
    })
    .catch((err) => {
      console.log(err);
      toast.dismiss();
      toast.error(err);
    });

  return userBalance;
};

export const startPoolTransaction = async ({
  setError,
  setTxs,
  stackAmmount,
}) => {
  let amount = ethers.utils.parseUnits(stackAmmount, 18);
  try {
    if (!window.ethereum) {
      throw new Error('No crypto wallet found. Please install it.');
    }

    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // console.log(provider);
    const signer = provider.getSigner();
    // console.log(signer);
    let userAddress = await signer.getAddress();

    console.log(userAddress);

    const lotteeContract = new ethers.Contract(lotteAddress, LOTTEABI, signer);
    const poolContract = new ethers.Contract(poolAddress, POOLABI, signer);

    let userBalanceForSelectedTokenPayment = await lotteeContract.balanceOf(
      userAddress
    );

    // const blnc = ethers.utils.parseEther(userBalanceForSelectedTokenPayment);
    const blnc = ethers.utils.formatUnits(
      userBalanceForSelectedTokenPayment,
      18
    );

    console.log(blnc);
    // ethers.utils.getAddress(addr);
    const lockup = '1';
    await lotteeContract.approve(poolAddress, amount).then(async (tx) => {
      await poolContract.staketime(amount, lockup).then(() => {
        // balanceCheck();
        toast.dismiss();
        toast.success('Buy successfully');
      });
      console.log(tx);
      setTxs([tx]);
    });
  } catch (err) {
    console.log(err);
    setError(err?.message?.slice(0, 50));
    toast.dismiss();
    toast.error('Buy unsuccessfull');
  }
};

export const startUnStakePool = async ({ setError, setTxs, unstakeAmount }) => {
  let amount = ethers.utils.parseUnits(unstakeAmount, 18);
  try {
    if (!window.ethereum) {
      throw new Error('No crypto wallet found. Please install it.');
    }

    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    let userAddress = await signer.getAddress();

    const lotteeContract = new ethers.Contract(lotteAddress, LOTTEABI, signer);
    const poolContract = new ethers.Contract(poolAddress, POOLABI, signer);

    let userBalanceForSelectedTokenPayment = await lotteeContract.balanceOf(
      userAddress
    );

    // const blnc = ethers.utils.parseEther(userBalanceForSelectedTokenPayment);
    const blnc = ethers.utils.formatUnits(
      userBalanceForSelectedTokenPayment,
      18
    );

    console.log(blnc);

    const gdcc = '0.1';
    let gdccValue = ethers.utils.parseUnits(gdcc, 18);

    await poolContract
      .unstake({ value: ethers.utils.parseEther('0.01') })
      .then(() => {
        // balanceCheck();
        toast.dismiss();
        toast.success('Unstake successfully');
      });
    // console.log(tx);
    // setTxs([tx]);
    // });
  } catch (err) {
    console.log(err);
    setError(err?.message?.slice(0, 50));
    toast.dismiss();
    toast.error('Unstake unsuccessfull');
  }
};

export const poolStakeBalanceCheck = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();
  let userAddress = await signer.getAddress();

  const poolContract = new ethers.Contract(poolAddress, POOLABI, signer);
  const lotteeContract = new ethers.Contract(lotteAddress, LOTTEABI, signer);

  let userStakeBalance;

  console.log({ userAddress });

  await poolContract
    .user(userAddress)
    .then((balance) => {
      // console.log(balance);
      userStakeBalance = ethers.utils.formatUnits(balance.amount, 18);
      return userStakeBalance;
    })
    .catch((err) => {
      console.log(err);
      toast.dismiss();
      toast.error(err);
    });

  return userStakeBalance;
};

// unsolved.... Saurav will check the function
export const totalPoolStakeCheck = async () => {
  const poolContract = new ethers.Contract(poolAddress, POOLABI);

  let stakeBalance;
  await poolContract
    .total(0)
    .then((balance) => {
      console.log(balance);
      stakeBalance = ethers.utils.formatUnits(balance, 18);
      console.log(stakeBalance);
      return stakeBalance;
    })
    .catch((err) => {
      console.log(err);
      toast.dismiss();
      toast.error(err);
    });

  return stakeBalance;
};

export const poolHopeEarnedCheck = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();
  let userAddress = await signer.getAddress();

  const poolContract = new ethers.Contract(poolAddress, POOLABI, signer);

  let hopeEarned;
  await poolContract
    .inforeward(userAddress)
    .then((balance) => {
      console.log(balance);
      hopeEarned = ethers.utils.formatUnits(balance[0], 18);
      return hopeEarned;
    })
    .catch((err) => {
      console.log(err);
      toast.dismiss();
      toast.error(err);
    });

  return hopeEarned;
};

export const harvestPoolEarnings = async ({ setError, setTxs }) => {
  try {
    if (!window.ethereum) {
      throw new Error('No crypto wallet found. Please install it.');
    }

    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const poolContract = new ethers.Contract(poolAddress, POOLABI, signer);
    const lotteeContract = new ethers.Contract(lotteAddress, LOTTEABI, signer);

    // const stackContract = new ethers.Contract(lotteAddress, LOTTEABI, signer);
    await poolContract.claim().then(async (tx) => {
      toast.dismiss();
      toast.success('Harvest successfully');

      console.log(tx);
      setTxs([tx]);
    });
  } catch (err) {
    setError(err?.message?.slice(0, 50));
    toast.dismiss();
    toast.error('Harvest unsuccessfull');
  }
};
