import { Button, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import ErrorMessage from '../../ErrorMessage';

import {
  poolBalanceCheck,
  poolStakeBalanceCheck,
  startPoolTransaction,
  startUnStakePool,
} from '../../ethereumClietPool';
import TxList from '../../TxList';
import '../token-popup/TokenPopup.css';

const TokenPopupPool = () => {
  const { TabPane } = Tabs;
  const [amount, setAmount] = useState(0);
  const [unstakeAmount, setUnstakeAmount] = useState(0);
  const [balance, setBalance] = useState(0.0);
  const [stakeBalance, setStakeBalance] = useState(0.0);
  const [error, setError] = useState('');
  const [txs, setTxs] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    poolBalanceCheck().then((res) => {
      setBalance(res);
    });
  }, [balance, txs]);

  useEffect(() => {
    poolStakeBalanceCheck().then((res) => {
      setStakeBalance(res);
    });
  }, [stakeBalance, txs]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('pool BUY clicked');
    console.log(error);
    console.log(txs);
    setError();
    // const data = new FormData(e.target);
    await startPoolTransaction({
      setError,
      setTxs,
      stackAmmount: amount,
    });
  };

  const unStake = async (e) => {
    e.preventDefault();

    console.log('pool unstake clicked');
    // const unstakeAmount = 0.1

    await startUnStakePool({
      setError,
      setTxs,
    });
  };

  return (
    <>
      <button className='connect-btn' onClick={handleShow}>
        Enable
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        className='ant-modal-body'
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter' className='h6'>
            POOL tokens
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='after-confirm'>
                  <Tabs defaultActiveKey='1' centered className=''>
                    <TabPane tab='Stake' key='1'>
                      <div className='col-md-12'>
                        <div className='stake-balance'>
                          <div className='d-flex justify-content-between mb-2'>
                            <div className='name'>
                              <b>Stake</b>
                            </div>
                            <div className='balance'>
                              <b>{balance}</b>
                            </div>
                          </div>
                          <div className='d-flex justify-content-between'>
                            <div className='name'>
                              <input
                                type='number'
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder='Enter Amount'
                                min='0'
                                max={balance}
                              />
                            </div>
                            <div className='balance'>
                              <button
                                onClick={(e) => setAmount(balance)}
                                className='btn-connect-wallet'
                              >
                                Max
                              </button>
                            </div>
                            <div className='balance'>
                              <b>LOTTE TOKEN</b>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className='col-md-12'>
                        <div className='current-rate mt-5'>
                          <div className='d-flex justify-content-between mb-2'>
                            <div className='name'>
                              <b>Annual ROI at current rates: </b>
                            </div>
                            <div className='rate'>
                              <b>$42.99</b>
                              <a className='icons'>
                                <svg
                                  viewBox='0 0 24 24'
                                  width='18px'
                                  color='text'
                                  xmlns='http://www.w3.org/2000/svg'
                                  className='mvupn'
                                >
                                  <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                                  <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                                  <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                                  <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                                  <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                                  <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className='d-flex justify-content-between'>
                        <div className='col-md-6 mt-5'>
                          <button
                            className='btn-cancel w-100 p-4'
                            onClick={handleClose}
                          >
                            Cancel
                          </button>
                        </div>
                        <div className='col-md-6 mt-5'>
                          <button
                            className='btn-connect-wallet w-100 p-4'
                            onClick={handleSubmit}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane tab='Unstake' key='2'>
                      <div className='col-md-12'>
                        <div className='stake-balance'>
                          <div className='d-flex justify-content-between mb-2'>
                            <div className='name'>
                              <b>Stake Amount</b>
                            </div>
                            <div className='balance'>
                              <b>{stakeBalance}</b>
                            </div>
                          </div>
                          {/* <div className='d-flex justify-content-between'>
                            <div className='name'>
                              <input
                                type='number'
                                value={unstakeAmount}
                                onChange={(e) =>
                                  setUnstakeAmount(e.target.value)
                                }
                                placeholder='Enter Amount'
                                min='0'
                                max={stakeBalance}
                              />
                            </div>
                          </div> */}
                        </div>
                      </div>
                      {/* <div className='block'>
                        <div>Stake Amount</div>
                        <div className='d-flex justify-content-between mt-3'>
                          <div className='number'>0.1</div>
                          <div className='name'>EFT/TRX</div>
                        </div>
                      </div> */}
                      <Button
                        size='large'
                        type='danger'
                        className='w-100 btn-danger'
                        onClick={unStake}
                      >
                        Unstake
                      </Button>
                    </TabPane>
                  </Tabs>
                </div>
              </div>
            </div>
            {/* <ErrorMessage message={error} /> */}
            {/* <TxList txs={txs} /> */}
          </div>
        </Modal.Body>

        {/* <Modal.Footer>
          <a href='#' className='gxRwwK'>
            <b>Get LOTTE</b>
            <svg
              viewBox='0 0 24 24'
              color='primary'
              width='20px'
              xmlns='http://www.w3.org/2000/svg'
              className='sc-eaf7e66-0 fJSxMQ'
            >
              <path d='M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z'></path>
            </svg>
          </a>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default TokenPopupPool;
