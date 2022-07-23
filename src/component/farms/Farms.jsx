import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import '../farms/Farms.css';
import { Table, Tooltip, Avatar, Form, Switch, Input, Select } from 'antd';
import {
  QuestionCircleOutlined,
  UnorderedListOutlined,
  InsertRowBelowOutlined,
} from '@ant-design/icons';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import ConnectWallet from '../modal/connect-wallet/ConnectWallet';
import TokenPopup from '../modal/token-popup/TokenPopup';
import { Link } from 'react-router-dom';
import {
  harvestEarnings,
  hopeEarnedCheck,
  totalStakeCheck,
} from '../ethereumCliet';

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
        <p>GDCC-LOTTE</p>
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
        <span>Soft Staking</span>
      </div>
    ),
  },

  // {
  //   title: '',
  //   dataIndex: '',
  //   key: 'x',
  //   render: () => (
  //     <div className='earn'>
  //       <p>Earned</p> <span>0</span>
  //     </div>
  //   ),
  // },
  {
    title: '',
    dataIndex: '',
    key: 'x',
    render: () => (
      <div className='months'>
        <p>APR</p>
        <span>
          31.13%
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
        </span>
      </div>
    ),
  },
  {
    title: '',
    dataIndex: 'totalStake',
    key: 'totalStake',
    render: (totalStake) => {
      console.log(totalStake);
      let total = Promise.resolve(totalStake);
      console.log(total);
      total.then((totalStake) => {
        console.log('value: ' + totalStake);
        return totalStake;
      });
      return (
        <div className='totalStaked'>
          <p>Total Staked</p>
          <span>
            {/* $119,022,665 */}
            {/* {totalStake} */}
            <Tooltip title='Total value of the funds in this farm’s liquidity pool'>
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        </div>
      );
    },
  },
  // {
  //   title: '',
  //   dataIndex: 'multiplier',
  //   key: 'multiplier',
  //   render: () => (
  //     <div className='multiplier'>
  //       <p>Multiplier</p>
  //       <span>
  //         40x
  //         <Tooltip title="Total value of the funds in this farm's liquidity pool">
  //           <QuestionCircleOutlined />
  //         </Tooltip>
  //       </span>
  //     </div>
  //   ),
  // },
  Table.EXPAND_COLUMN,
];

// const totalCheck = (totalStake) => {
//   let total;
//   console.log(totalStake);
// };

const data = [
  {
    key: 1,
    name: 'Hope-BNB',
    address: 'New York No. 1 Lake Park',
    description:
      'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    totalStake: totalStakeCheck().then((res) => {
      // setTotalStaked(res);
      console.log(res);
      // let totalStake = Promise.resolve(res);
      // console.log(totalStake);

      return res;
    }),
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
  //   key: 3,
  //   name: 'Expandable',
  //   age: 29,
  //   address: 'Jiangsu No. 1 Lake Park',
  //   description: 'This not expandable',
  // },
];

const Farms = ({ conectmetaMask, accountDottedAddress }) => {
  const [input, setInput] = useState(true);
  const [showCalculator, setShowCalculator] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
  const [totalStaked, setTotalStaked] = useState(0.0);
  const [hopeEarned, setHopeEarned] = useState(0.0);

  const [error, setError] = useState('');
  const [txs, setTxs] = useState([]);

  useEffect(() => {
    hopeEarnedCheck().then((res) => {
      setHopeEarned(res);
    });
  }, [hopeEarned]);

  // useEffect(() => {
  //   totalStakeCheck().then((res) => {
  //     setTotalStaked(res);
  //   });
  // }, [totalStaked]);

  const harvest = async () => {
    console.log('clicked harvest');
    await harvestEarnings({
      setError,
      setTxs,
    }).then(() =>
      hopeEarnedCheck().then((res) => {
        setHopeEarned(res);
      })
    );
  };

  // console.log(setTxs);
  // console.log(setError);

  // console.log(totalStaked);
  return (
    <div>
      <Breadcrumb />
      <div className='farms-section'>
        <div className='container mt-5'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-md-4'>
                  <Link
                    to='/grid-farms'
                    style={{ marginRight: '12px', fontSize: '18px' }}
                  >
                    <InsertRowBelowOutlined />
                  </Link>
                  <Link to='/farms' style={{ fontSize: '18px' }}>
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
                            <a
                              href='http://www.google.com'
                              target='_blank'
                              rel='noreferrer'
                            >
                              Get Hope-BNB LP
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
                            <a href='' target='_blank'>
                              View Contract
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
                            <a href='' target='_blank'>
                              See Pair Info
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
                          </div>
                        </div>
                        <div className='col-md-4'>
                          <div className='Hope-earn jbGbNT'>
                            <span className='bNegPh'>
                              <label> Hope </label> &nbsp;
                              <label> EARNED </label>
                            </span>
                            <div className='content jJGrtW'>
                              <div>
                                <h2 className='h2'>{hopeEarned}</h2>
                              </div>
                            </div>
                            <button
                              className='panHope-btn izhINH pancake-button'
                              onClick={harvest}
                              disabled={hopeEarned <= 0 ? true : false}
                            >
                              Harvest
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
                              {/* <button className="connect-btn" onClick={() => setShowWallet(true)}> Connect Wallet</button> */}
                              {/* <ConnectWallet show={showWallet} close={() => setShowWallet(false)} /> */}
                              {accountDottedAddress === '' ? (
                                <ConnectWallet
                                  buttonClass={'connect-btn'}
                                  conectmetaMask={conectmetaMask}
                                  accountDottedAddress={accountDottedAddress}
                                />
                              ) : (
                                <TokenPopup />
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

export default Farms;
