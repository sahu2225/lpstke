import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import '../pools/Pools.css';
import {
  Table,
  Tooltip,
  Avatar,
  Form,
  Switch,
  Input,
  Select,
  Button,
} from 'antd';
import {
  QuestionCircleOutlined,
  UnorderedListOutlined,
  InsertRowBelowOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import Calculator from '../modal/calculator/Calculator';
import TokenPopup from '../modal/token-popup/TokenPopup';
import ConnectWallet from '../modal/connect-wallet/ConnectWallet';
import { Link } from 'react-router-dom';
import TokenPopupPool from '../modal/token-popup/TokenPopupPool';
import {
  harvestPoolEarnings,
  poolHopeEarnedCheck,
  totalPoolStakeCheck,
} from '../ethereumClietPool';

const Pools = ({ conectmetaMask, accountDottedAddress }) => {
  const [input, setInput] = useState(true);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showWallet, setShowWallet] = useState(false);

  const [showToken, setShowToken] = useState(false);

  const [error, setError] = useState('');
  const [txs, setTxs] = useState([]);

  const [hopeEarned, setHopeEarned] = useState(0.0);
  const [totalStaked, setTotalStaked] = useState(0.0);

  useEffect(() => {
    totalPoolStakeCheck().then((res) => {
      setTotalStaked(res);
    });
  }, [totalStaked, txs]);

  const columns = [
    {
      // title: 'Hope-BNB',
      dataIndex: 'name',
      key: 'name',
      render: () => (
        <div className='name-img'>
          <Avatar.Group>
            <Avatar src='https://joeschmoe.io/api/v1/random' />
            <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
          </Avatar.Group>
          <p style={{ lineHeight: '100%' }}>
            GDCC<br></br>
            <span
              style={{
                display: 'inline-block',
                width: '100%',
                fontSize: '12px',
                color: '#858484',
              }}
            >
              Stake, Earn – And more!
            </span>
          </p>
        </div>
      ),
    },
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: () => (
        <div className='core-icon'>
          <p>
            <svg
              viewBox='0 0 24 24'
              width='18px'
              color='secondary'
              xmlns='http://www.w3.org/2000/svg'
              className='sc-eaf7e66-0 dodMCi'
            >
              <path d='M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z'></path>
            </svg>
          </p>
          <span>Core</span>
        </div>
      ),
    },

    // {
    //   title: '',
    //   dataIndex: '',
    //   key: 'x',
    //   render: () => (
    //     <div className='earn'>
    //       <p>Hope Staked</p> <span>0.0</span>
    //       <span style={{ fontSize: '12px' }}>0 USD</span>
    //     </div>
    //   ),
    // },
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: () => (
        <div className='months'>
          <p>Flexible APY</p>
          <span>
            5%

            {/* <a className='icons' onClick={() => setShowCalculator(true)}>

            <a className='icons' onClick={() => setShowCalculator(true)}>

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
            <Calculator
              show={showCalculator}
              close={() => setShowCalculator(false)}
            /> */}
          </span>
        </div>
      ),
    },
    // {
    //   title: '',
    //   dataIndex: '',
    //   key: 'x',
    //   render: () => (
    //     <div className='months'>
    //       <p>Locked APY</p>
    //       <span>
    //         Up to 90.55%
    //         <a className='icons'>
    //           <svg
    //             viewBox='0 0 24 24'
    //             width='18px'
    //             color='text'
    //             xmlns='http://www.w3.org/2000/svg'
    //             className='mvupn'
    //           >
    //             <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
    //             <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
    //             <path d='M18 15.75H13V17.25H18V15.75Z'></path>
    //             <path d='M18 13.25H13V14.75H18V13.25Z'></path>
    //             <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
    //             <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
    //           </svg>
    //         </a>
    //       </span>
    //     </div>
    //   ),
    // },
    // {
    //   title: '',
    //   dataIndex: 'liquidity',
    //   key: 'address',
    //   render: () => {
    //     let totalStake = 0.0;
    //     totalPoolStakeCheck().then((res) => {
    //       // setTotalStaked(res);
    //       totalStake = res;
    //     });
    //     return (
    //       <div className='liquidity'>
    //         <p>Total staked</p>
    //         <span>
    //           {/* $119,022,665 */}
    //           {totalStake} &nbsp;
    //           <ClockCircleOutlined />
    //         </span>
    //       </div>
    //     );
    //   },
    // },
    Table.EXPAND_COLUMN,
  ];

  const data = [
    {
      key: 1,
      name: 'Lotte-BNB',
      address: 'New York No. 1 Lake Park',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    // {
    //   key: 2,
    //   name: 'Jim Green',
    //   age: 42,
    //   address: 'London No. 1 Lake Park',
    //   description:
    //     'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    // },
    // {
    //   key: 2,
    //   name: 'Jim Green',
    //   age: 42,
    //   address: 'London No. 1 Lake Park',
    //   description:
    //     'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    // },
  ];

  useEffect(() => {
    poolHopeEarnedCheck().then((res) => {
      setHopeEarned(res);
    });
  }, [hopeEarned, txs]);

  const harvest = async () => {
    // console.log('clicked harvest');
    await harvestPoolEarnings({
      setError,
      setTxs,
    }).then(() => {
      console.log('calling the pool earning check');
      poolHopeEarnedCheck().then((res) => {
        setHopeEarned(res);
      });
    });
  };

  return (
    <div>
      <Breadcrumb></Breadcrumb>

      <div className='farms-section'>
        <div className='container mt-5'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-md-4'>
                  <Link
                    to='/grid-pools'
                    style={{ marginRight: '12px', fontSize: '18px' }}
                  >
                    <InsertRowBelowOutlined />
                  </Link>
                  <Link to='/pools' style={{ fontSize: '18px' }}>
                    <UnorderedListOutlined />
                  </Link>
                </div>

                <div className='col-md-4'>
                  <Form.Item label='Staked only' valuePropName='checked'>
                    <Switch />
                  </Form.Item>
                </div>

                <div className='col-md-4'>
                  <Switch
                    checked={input}
                    checkedChildren='Live'
                    unCheckedChildren='Finished'
                    onChange={() => {
                      setInput(!input);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <Form layout='vertical' className='d-flex'>
                <Form.Item label='SORT BY' style={{ width: '48%' }}>
                  <Select value='Hot' className='input-design'>
                    <Select.Option value='hot'>Hot</Select.Option>
                    <Select.Option value='apr'>APR</Select.Option>
                    <Select.Option value='multiplier'>Multiplier</Select.Option>
                    <Select.Option value='earned'>Earned</Select.Option>
                    <Select.Option value='liquidity'>Liquidity</Select.Option>
                    <Select.Option value='latest'>Latest</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label='SEARCH' style={{ width: '48%' }}>
                  <Input placeholder='Search Farms' className='input-design' />
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>

        <div className='container mt-1'>
          <div className='row'>
            <div className='col-md-12'>
              <Table
                columns={columns}
                expandable={{
                  expandedRowRender: (record) => (
                    <div className='container-fluid'>
                      <span className='d-none'>{record.description}</span>
                      <div className='row'>
                        <div className='col-md-4'>
                          <div className='links'>
                            <div className='iZVDFD'>
                              <div className='khbAo'>Total locked:</div>
                              <div className='iHNZWH'>
                                <div className='khbAo'>
                                  <span>{totalStaked}</span>
                                </div>
                              </div>
                            </div>
                            <div className='iZVDFD'>
                              <div className='khbAo'>
                                <Tooltip title='The lock duration of all the locked staking positions of other users'>
                                  <span>Lock duration:</span>
                                </Tooltip>
                              </div>
                              <div className='iHNZWH'>
                                <div className='khbAo'>
                                  <span>1 Year</span>
                                </div>
                              </div>
                            </div>
                            <div className='iZVDFD'>
                              <div className='khbAo'>
                                <Tooltip title='The lock duration of all the locked staking positions of other users'>
                                  <span>Performance Fee</span>
                                </Tooltip>
                              </div>
                              <div className='iHNZWH'>
                                <div className='khbAo'>
                                  <span>0.01 GDCC</span>
                                </div>
                              </div>
                            </div>
                            <a href='' target='_blank'>
                              See Token Info
                              <svg
                                viewBox='0 0 24 24'
                                color='primary'
                                width='20px'
                                xmlns='http://www.w3.org/2000/svg'
                                className='fJSxMQ'
                              >
                                <path d='M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z'></path>
                              </svg>
                            </a>
                            <a href='' target='_blank'>
                              View Tutorial
                              <svg
                                viewBox='0 0 24 24'
                                color='primary'
                                width='20px'
                                xmlns='http://www.w3.org/2000/svg'
                                className='fJSxMQ'
                              >
                                <path d='M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z'></path>
                              </svg>
                            </a>
                            <a href='' target='_blank'>
                              View Contract
                              <svg
                                viewBox='0 0 24 24'
                                color='primary'
                                width='20px'
                                xmlns='http://www.w3.org/2000/svg'
                                className='fJSxMQ'
                              >
                                <path d='M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z'></path>
                              </svg>
                            </a>
                            <div className='ljmSfA'>
                              <svg
                                viewBox='0 0 24 24'
                                width='18px'
                                color='success'
                                xmlns='http://www.w3.org/2000/svg'
                                className='fHPuPF'
                              >
                                <path d='M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z'></path>
                              </svg>
                              Auto &nbsp;
                              <Tooltip title='prompt text'>
                                <QuestionCircleOutlined></QuestionCircleOutlined>
                              </Tooltip>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-4'>
                          <div className='Hope-earn jbGbNT'>
                            <span className='bNegPh'>
                              <label> Lotte </label> &nbsp;
                              <label> EARNED </label>
                            </span>
                            <div className='content jJGrtW'>
                              <div>
                                <h2 className='h2'>{hopeEarned}</h2>
                              </div>
                              {/* <button className="panHope-btn izhINH" onClick={() => setShowToken(true)}> Harvest</button>
                                <TokenPopup show={showToken} close={() => setShowToken(false)} /> */}
                            </div>
                            <button
                              className='panHope-btn izhINH pancake-button'
                              onClick={harvest}
                              disabled={hopeEarned <= 0 ? true : false}
                              // disabled={true}
                            >
                              Claim
                            </button>
                          </div>
                        </div>
                        <div className='col-md-4'>
                          <div className='start-farming'>
                            <span>
                              <label> START </label> &nbsp;
                              <label> FARMING </label>
                            </span>
                            <div className='content'>
                              {accountDottedAddress === '' ? (
                                <ConnectWallet
                                  buttonClass={'bjAFXE'}
                                  conectmetaMask={conectmetaMask}
                                  accountDottedAddress={accountDottedAddress}
                                />
                              ) : (
                                <TokenPopupPool />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                  rowExpandable: (record) => record.name !== 'Not Expandable',
                }}
                dataSource={data}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pools;
