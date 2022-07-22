import { ethers } from 'ethers';
import { toast } from 'react-toastify';
import ABI from '../abi.json';
import STAKEABI from '../stakeabi.json';

const tokenAddress = '0xa538ba3cf94b9103389ebcda48a13e61f14f33ef';
const stackAddress = '0x1172E284443FB309A801d48C7A7E16aeE26Ab921';

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

export const balanceCheck = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();
  let userAddress = await signer.getAddress();

  const tokenContract = new ethers.Contract(tokenAddress, ABI, signer);

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

export const startTransaction = async ({ setError, setTxs, stackAmmount }) => {
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

    const tokenContract = new ethers.Contract(tokenAddress, ABI, signer);

    const stackContract = new ethers.Contract(stackAddress, STAKEABI, signer);

    let userBalanceForSelectedTokenPayment = await tokenContract.balanceOf(
      userAddress
    );

    // const blnc = ethers.utils.parseEther(userBalanceForSelectedTokenPayment);
    const blnc = ethers.utils.formatUnits(
      userBalanceForSelectedTokenPayment,
      18
    );

    console.log(blnc);
    // ethers.utils.getAddress(addr);
    await tokenContract.approve(stackAddress, amount).then(async (tx) => {
      await stackContract.stake(amount).then(() => {
        // balanceCheck();
        toast.dismiss();
        toast.success('Buy successfully');
      });
      console.log(tx);
      setTxs([tx]);
    });
  } catch (err) {
    setError(err?.message?.slice(0, 50));
    toast.dismiss();
    toast.error('Buy unsuccessfull');
  }
};

export const startUnStake = async ({ setError, setTxs, unstakeAmount }) => {
  let amount = ethers.utils.parseUnits(unstakeAmount, 18);
  try {
    if (!window.ethereum) {
      throw new Error('No crypto wallet found. Please install it.');
    }

    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    let userAddress = await signer.getAddress();

    const tokenContract = new ethers.Contract(tokenAddress, ABI, signer);

    const stackContract = new ethers.Contract(stackAddress, STAKEABI, signer);

    let userBalanceForSelectedTokenPayment = await tokenContract.balanceOf(
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
    // ethers.utils.getAddress(addr);
    // await tokenContract.approve(stackAddress, amount).then(async (tx) => {
    // await stackContract.methods
    // .withdraw(amount)
    // .send({ from: tokenContract, value: gdcc, gas: 900000 })
    await stackContract
      .withdraw(amount, { value: ethers.utils.parseEther('0.01') })
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

export const stakeBalanceCheck = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();
  let userAddress = await signer.getAddress();

  const stakeContract = new ethers.Contract(stackAddress, STAKEABI, signer);

  let userStakeBalance;
  await stakeContract
    .getStaked(userAddress)
    .then((balance) => {
      // console.log(balance);
      userStakeBalance = ethers.utils.formatUnits(balance, 18);
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
export const totalStakeCheck = async () => {
  const stakeContract = new ethers.Contract(stackAddress, STAKEABI);

  let stakeBalance;
  await stakeContract
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

export const hopeEarnedCheck = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();
  let userAddress = await signer.getAddress();

  const stakeContract = new ethers.Contract(stackAddress, STAKEABI, signer);

  let hopeEarned;
  await stakeContract
    .earned(userAddress)
    .then((balance) => {
      hopeEarned = ethers.utils.formatUnits(balance, 18);
      return hopeEarned;
    })
    .catch((err) => {
      console.log(err);
      toast.dismiss();
      toast.error(err);
    });

  return hopeEarned;
};

export const harvestEarnings = async ({ setError, setTxs }) => {
  try {
    if (!window.ethereum) {
      throw new Error('No crypto wallet found. Please install it.');
    }

    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const stackContract = new ethers.Contract(stackAddress, STAKEABI, signer);
    await stackContract.claimReward().then(async (tx) => {
      toast.dismiss();
      toast.success('Harvest successfully');

      console.log(tx);
      setTxs([tx]);
    });
  } catch (err) {
    setError(err?.message?.slice(0, 50));
    toast.dismiss();
    toast.error('Harvest unsuccessfull');
    toast.error(err?.message?.slice(0, 75));
  }
};
