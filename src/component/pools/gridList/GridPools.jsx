import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../gridList/GridList.css';
import {
  Form,
  Switch,
  Input,
  Select,
  Card,
  Avatar,
  Collapse,
  Tooltip,
} from 'antd';
import {
  UnorderedListOutlined,
  InsertRowBelowOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import Breadcrumb from '../../breadcrumb/Breadcrumb';
import ConnectWallet from '../../modal/connect-wallet/ConnectWallet';
import Calculator from '../../modal/calculator/Calculator';
import TokenPopup from '../../modal/token-popup/TokenPopup';
import { Link } from 'react-router-dom';

const GridPools = ({ conectmetaMask, accountDottedAddress }) => {
  const [input, setInput] = useState(true);
  const { Panel } = Collapse;
  const [showCalculator, setShowCalculator] = useState(false);
  const [showWallet, setShowWallet] = useState(false);
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

        <div className='container mt-5'>
          <div className='row align-items-center'>
            <div className='col-md-4'>
              <Card
                style={{
                  borderRadius: 15,
                  padding: 0,
                  overflow: 'hidden',
                  margin: '0 0 40px 0',
                }}
              >
                <div className='content-area'>
                  <div className='ftDNmF'>
                    <div className='kLZZIH'>
                      <div className='gKXQFP'>
                        <h2 className='kYlNJG'>Stake CAKE</h2>
                        <div className='XYDGl'>Stake, Earn - And more!</div>
                      </div>
                      <div className='gWkpQb'>
                        <Avatar.Group>
                          <Avatar
                            src='https://joeschmoe.io/api/v1/random'
                            style={{ width: '50px', height: '50px' }}
                          />
                          <Avatar style={{ backgroundColor: '#f56a00' }}>
                            K
                          </Avatar>
                        </Avatar.Group>
                      </div>
                    </div>
                  </div>
                  <div className='fRxoXG'>
                    <div className='cFGIpm'>
                      <div className='kLZZIH'>
                        <div className='gHFMAm'>Flexible APY:</div>
                        <div className='cSnmJK'>
                          <div className='eOXvol'>
                            <span>4.22%</span>
                          </div>
                          <button
                            className='jrhnwa'
                            width='20px'
                            height='20px'
                            onClick={() => setShowCalculator(true)}
                          >
                            <svg
                              viewBox='0 0 24 24'
                              color='textSubtle'
                              width='20px'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 bXujD'
                            >
                              <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                              <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                              <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                              <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                              <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                              <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                            </svg>
                          </button>
                          <Calculator
                            show={showCalculator}
                            close={() => setShowCalculator(false)}
                          />
                        </div>
                      </div>
                      <div className='kLZZIH'>
                        <div className='gHFMAm'>LOCKED APY:</div>
                        <div className='cSnmJK'>
                          <div className='eOXvol'>
                            <span>Up to 90.36%</span>
                          </div>
                          <button
                            className='jrhnwa'
                            width='20px'
                            height='20px'
                            onClick={() => setShowCalculator(true)}
                          >
                            <svg
                              viewBox='0 0 24 24'
                              color='textSubtle'
                              width='20px'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 bXujD'
                            >
                              <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                              <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                              <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                              <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                              <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                              <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                            </svg>
                          </button>
                          <Calculator
                            show={showCalculator}
                            close={() => setShowCalculator(false)}
                          />
                        </div>
                      </div>
                    </div>
                    {accountDottedAddress === '' ? (
                      <ConnectWallet
                        buttonClass={'bjAFXE'}
                        conectmetaMask={conectmetaMask}
                        accountDottedAddress={accountDottedAddress}
                      />
                    ) : (
                      <TokenPopup />
                    )}
                  </div>
                </div>
                <div className='toggle'>
                  <Collapse>
                    <span className='refresh-btn'>
                      <div className='iHNZWH'>
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
                          Auto
                        </div>
                        <div className='jtuYYv'>
                          <Tooltip title='Rewards are distributed and included into your staking balance automatically. There’s no need to manually compound your rewards.'>
                            <QuestionCircleOutlined className='cIOaaK'></QuestionCircleOutlined>
                          </Tooltip>
                        </div>
                      </div>
                    </span>
                    <Panel showArrow={true} header='Details' key='1'>
                      <div className='cyFSeC'>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz mt-2'
                        >
                          Get CAKE-BNB LP
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
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
                        >
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
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
                        >
                          See Pair Info
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
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </div>

            <div className='col-md-4'>
              <Card
                style={{
                  borderRadius: 15,
                  padding: 0,
                  overflow: 'hidden',
                  margin: '0 0 40px 0',
                }}
              >
                <div className='content-area'>
                  <div className='ftDNmF'>
                    <div className='kLZZIH'>
                      <div className='gKXQFP'>
                        <h2 className='kYlNJG'>Stake CAKE</h2>
                        <div className='XYDGl'>Stake, Earn - And more!</div>
                      </div>
                      <div className='gWkpQb'>
                        <Avatar.Group>
                          <Avatar
                            src='https://joeschmoe.io/api/v1/random'
                            style={{ width: '50px', height: '50px' }}
                          />
                          <Avatar style={{ backgroundColor: '#f56a00' }}>
                            K
                          </Avatar>
                        </Avatar.Group>
                      </div>
                    </div>
                  </div>
                  <div className='fRxoXG'>
                    <div className='cFGIpm'>
                      <div className='kLZZIH'>
                        <div className='gHFMAm'>Flexible APY:</div>
                        <div className='cSnmJK'>
                          <div className='eOXvol'>
                            <span>4.22%</span>
                          </div>
                          <button
                            className='jrhnwa'
                            width='20px'
                            height='20px'
                            onClick={() => setShowCalculator(true)}
                          >
                            <svg
                              viewBox='0 0 24 24'
                              color='textSubtle'
                              width='20px'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 bXujD'
                            >
                              <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                              <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                              <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                              <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                              <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                              <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                            </svg>
                          </button>
                          <Calculator
                            show={showCalculator}
                            close={() => setShowCalculator(false)}
                          />
                        </div>
                      </div>
                      <div className='kLZZIH'>
                        <div className='gHFMAm'>LOCKED APY:</div>
                        <div className='cSnmJK'>
                          <div className='eOXvol'>
                            <span>Up to 90.36%</span>
                          </div>
                          <button
                            className='jrhnwa'
                            width='20px'
                            height='20px'
                            onClick={() => setShowCalculator(true)}
                          >
                            <svg
                              viewBox='0 0 24 24'
                              color='textSubtle'
                              width='20px'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 bXujD'
                            >
                              <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                              <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                              <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                              <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                              <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                              <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                            </svg>
                          </button>
                          <Calculator
                            show={showCalculator}
                            close={() => setShowCalculator(false)}
                          />
                        </div>
                      </div>
                    </div>
                    {accountDottedAddress === '' ? (
                      <ConnectWallet
                        buttonClass={'bjAFXE'}
                        conectmetaMask={conectmetaMask}
                        accountDottedAddress={accountDottedAddress}
                      />
                    ) : (
                      <TokenPopup />
                    )}
                  </div>
                </div>
                <div className='toggle'>
                  <Collapse>
                    <span className='refresh-btn'>
                      <div className='iHNZWH'>
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
                          Auto
                        </div>
                        <div className='jtuYYv'>
                          <Tooltip title='Rewards are distributed and included into your staking balance automatically. There’s no need to manually compound your rewards.'>
                            <QuestionCircleOutlined className='cIOaaK'></QuestionCircleOutlined>
                          </Tooltip>
                        </div>
                      </div>
                    </span>
                    <Panel showArrow={true} header='Details' key='1'>
                      <div className='cyFSeC'>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz mt-2'
                        >
                          Get CAKE-BNB LP
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
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
                        >
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
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
                        >
                          See Pair Info
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
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </div>

            <div className='col-md-4'>
              <Card
                style={{
                  borderRadius: 15,
                  padding: 0,
                  overflow: 'hidden',
                  margin: '0 0 40px 0',
                }}
              >
                <div className='content-area'>
                  <div className='ftDNmF'>
                    <div className='kLZZIH'>
                      <div className='gKXQFP'>
                        <h2 className='kYlNJG'>Stake CAKE</h2>
                        <div className='XYDGl'>Stake, Earn - And more!</div>
                      </div>
                      <div className='gWkpQb'>
                        <Avatar.Group>
                          <Avatar
                            src='https://joeschmoe.io/api/v1/random'
                            style={{ width: '50px', height: '50px' }}
                          />
                          <Avatar style={{ backgroundColor: '#f56a00' }}>
                            K
                          </Avatar>
                        </Avatar.Group>
                      </div>
                    </div>
                  </div>
                  <div className='fRxoXG'>
                    <div className='cFGIpm'>
                      <div className='kLZZIH'>
                        <div className='gHFMAm'>Flexible APY:</div>
                        <div className='cSnmJK'>
                          <div className='eOXvol'>
                            <span>4.22%</span>
                          </div>
                          <button
                            className='jrhnwa'
                            width='20px'
                            height='20px'
                            onClick={() => setShowCalculator(true)}
                          >
                            <svg
                              viewBox='0 0 24 24'
                              color='textSubtle'
                              width='20px'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 bXujD'
                            >
                              <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                              <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                              <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                              <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                              <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                              <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                            </svg>
                          </button>
                          <Calculator
                            show={showCalculator}
                            close={() => setShowCalculator(false)}
                          />
                        </div>
                      </div>
                      <div className='kLZZIH'>
                        <div className='gHFMAm'>LOCKED APY:</div>
                        <div className='cSnmJK'>
                          <div className='eOXvol'>
                            <span>Up to 90.36%</span>
                          </div>
                          <button
                            className='jrhnwa'
                            width='20px'
                            height='20px'
                            onClick={() => setShowCalculator(true)}
                          >
                            <svg
                              viewBox='0 0 24 24'
                              color='textSubtle'
                              width='20px'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 bXujD'
                            >
                              <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                              <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                              <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                              <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                              <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                              <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                            </svg>
                          </button>
                          <Calculator
                            show={showCalculator}
                            close={() => setShowCalculator(false)}
                          />
                        </div>
                      </div>
                    </div>
                    {accountDottedAddress === '' ? (
                      <ConnectWallet
                        buttonClass={'bjAFXE'}
                        conectmetaMask={conectmetaMask}
                        accountDottedAddress={accountDottedAddress}
                      />
                    ) : (
                      <TokenPopup />
                    )}
                  </div>
                </div>
                <div className='toggle'>
                  <Collapse>
                    <span className='refresh-btn'>
                      <div className='iHNZWH'>
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
                          Auto
                        </div>
                        <div className='jtuYYv'>
                          <Tooltip title='Rewards are distributed and included into your staking balance automatically. There’s no need to manually compound your rewards.'>
                            <QuestionCircleOutlined className='cIOaaK'></QuestionCircleOutlined>
                          </Tooltip>
                        </div>
                      </div>
                    </span>
                    <Panel showArrow={true} header='Details' key='1'>
                      <div className='cyFSeC'>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz mt-2'
                        >
                          Get CAKE-BNB LP
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
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
                        >
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
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
                        >
                          See Pair Info
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
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </div>

            <div className='col-md-4'>
              <Card
                style={{
                  borderRadius: 15,
                  padding: 0,
                  overflow: 'hidden',
                  margin: '0 0 40px 0',
                }}
              >
                <div className='content-area'>
                  <div className='ftDNmF'>
                    <div className='kLZZIH'>
                      <div className='gKXQFP'>
                        <h2 className='kYlNJG'>Stake CAKE</h2>
                        <div className='XYDGl'>Stake, Earn - And more!</div>
                      </div>
                      <div className='gWkpQb'>
                        <Avatar.Group>
                          <Avatar
                            src='https://joeschmoe.io/api/v1/random'
                            style={{ width: '50px', height: '50px' }}
                          />
                          <Avatar style={{ backgroundColor: '#f56a00' }}>
                            K
                          </Avatar>
                        </Avatar.Group>
                      </div>
                    </div>
                  </div>
                  <div className='fRxoXG'>
                    <div className='cFGIpm'>
                      <div className='kLZZIH'>
                        <div className='gHFMAm'>Flexible APY:</div>
                        <div className='cSnmJK'>
                          <div className='eOXvol'>
                            <span>4.22%</span>
                          </div>
                          <button
                            className='jrhnwa'
                            width='20px'
                            height='20px'
                            onClick={() => setShowCalculator(true)}
                          >
                            <svg
                              viewBox='0 0 24 24'
                              color='textSubtle'
                              width='20px'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 bXujD'
                            >
                              <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                              <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                              <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                              <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                              <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                              <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                            </svg>
                          </button>
                          <Calculator
                            show={showCalculator}
                            close={() => setShowCalculator(false)}
                          />
                        </div>
                      </div>
                      <div className='kLZZIH'>
                        <div className='gHFMAm'>LOCKED APY:</div>
                        <div className='cSnmJK'>
                          <div className='eOXvol'>
                            <span>Up to 90.36%</span>
                          </div>
                          <button
                            className='jrhnwa'
                            width='20px'
                            height='20px'
                            onClick={() => setShowCalculator(true)}
                          >
                            <svg
                              viewBox='0 0 24 24'
                              color='textSubtle'
                              width='20px'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 bXujD'
                            >
                              <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                              <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                              <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                              <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                              <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                              <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                            </svg>
                          </button>
                          <Calculator
                            show={showCalculator}
                            close={() => setShowCalculator(false)}
                          />
                        </div>
                      </div>
                    </div>
                    {accountDottedAddress === '' ? (
                      <ConnectWallet
                        buttonClass={'bjAFXE'}
                        conectmetaMask={conectmetaMask}
                        accountDottedAddress={accountDottedAddress}
                      />
                    ) : (
                      <TokenPopup />
                    )}
                  </div>
                </div>
                <div className='toggle'>
                  <Collapse>
                    <span className='refresh-btn'>
                      <div className='iHNZWH'>
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
                          Auto
                        </div>
                        <div className='jtuYYv'>
                          <Tooltip title='Rewards are distributed and included into your staking balance automatically. There’s no need to manually compound your rewards.'>
                            <QuestionCircleOutlined className='cIOaaK'></QuestionCircleOutlined>
                          </Tooltip>
                        </div>
                      </div>
                    </span>
                    <Panel showArrow={true} header='Details' key='1'>
                      <div className='cyFSeC'>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz mt-2'
                        >
                          Get CAKE-BNB LP
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
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
                        >
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
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
                        >
                          See Pair Info
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
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </div>

            <div className='col-md-4'>
              <Card
                style={{
                  borderRadius: 15,
                  padding: 0,
                  overflow: 'hidden',
                  margin: '0 0 40px 0',
                }}
              >
                <div className='content-area'>
                  <div className='ftDNmF'>
                    <div className='kLZZIH'>
                      <div className='gKXQFP'>
                        <h2 className='kYlNJG'>Stake CAKE</h2>
                        <div className='XYDGl'>Stake, Earn - And more!</div>
                      </div>
                      <div className='gWkpQb'>
                        <Avatar.Group>
                          <Avatar
                            src='https://joeschmoe.io/api/v1/random'
                            style={{ width: '50px', height: '50px' }}
                          />
                          <Avatar style={{ backgroundColor: '#f56a00' }}>
                            K
                          </Avatar>
                        </Avatar.Group>
                      </div>
                    </div>
                  </div>
                  <div className='fRxoXG'>
                    <div className='cFGIpm'>
                      <div className='kLZZIH'>
                        <div className='gHFMAm'>Flexible APY:</div>
                        <div className='cSnmJK'>
                          <div className='eOXvol'>
                            <span>4.22%</span>
                          </div>
                          <button
                            className='jrhnwa'
                            width='20px'
                            height='20px'
                            onClick={() => setShowCalculator(true)}
                          >
                            <svg
                              viewBox='0 0 24 24'
                              color='textSubtle'
                              width='20px'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 bXujD'
                            >
                              <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                              <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                              <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                              <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                              <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                              <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                            </svg>
                          </button>
                          <Calculator
                            show={showCalculator}
                            close={() => setShowCalculator(false)}
                          />
                        </div>
                      </div>
                      <div className='kLZZIH'>
                        <div className='gHFMAm'>LOCKED APY:</div>
                        <div className='cSnmJK'>
                          <div className='eOXvol'>
                            <span>Up to 90.36%</span>
                          </div>
                          <button
                            className='jrhnwa'
                            width='20px'
                            height='20px'
                            onClick={() => setShowCalculator(true)}
                          >
                            <svg
                              viewBox='0 0 24 24'
                              color='textSubtle'
                              width='20px'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 bXujD'
                            >
                              <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                              <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                              <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                              <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                              <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                              <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                            </svg>
                          </button>
                          <Calculator
                            show={showCalculator}
                            close={() => setShowCalculator(false)}
                          />
                        </div>
                      </div>
                    </div>
                    {accountDottedAddress === '' ? (
                      <ConnectWallet
                        buttonClass={'bjAFXE'}
                        conectmetaMask={conectmetaMask}
                        accountDottedAddress={accountDottedAddress}
                      />
                    ) : (
                      <TokenPopup />
                    )}
                  </div>
                </div>
                <div className='toggle'>
                  <Collapse>
                    <span className='refresh-btn'>
                      <div className='iHNZWH'>
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
                          Auto
                        </div>
                        <div className='jtuYYv'>
                          <Tooltip title='Rewards are distributed and included into your staking balance automatically. There’s no need to manually compound your rewards.'>
                            <QuestionCircleOutlined className='cIOaaK'></QuestionCircleOutlined>
                          </Tooltip>
                        </div>
                      </div>
                    </span>
                    <Panel showArrow={true} header='Details' key='1'>
                      <div className='cyFSeC'>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz mt-2'
                        >
                          Get CAKE-BNB LP
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
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
                        >
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
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
                        >
                          See Pair Info
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
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </div>

            <div className='col-md-4'>
              <Card
                style={{
                  borderRadius: 15,
                  padding: 0,
                  overflow: 'hidden',
                  margin: '0 0 40px 0',
                }}
              >
                <div className='content-area'>
                  <div className='ftDNmF'>
                    <div className='kLZZIH'>
                      <div className='gKXQFP'>
                        <h2 className='kYlNJG'>Stake CAKE</h2>
                        <div className='XYDGl'>Stake, Earn - And more!</div>
                      </div>
                      <div className='gWkpQb'>
                        <Avatar.Group>
                          <Avatar
                            src='https://joeschmoe.io/api/v1/random'
                            style={{ width: '50px', height: '50px' }}
                          />
                          <Avatar style={{ backgroundColor: '#f56a00' }}>
                            K
                          </Avatar>
                        </Avatar.Group>
                      </div>
                    </div>
                  </div>
                  <div className='fRxoXG'>
                    <div className='cFGIpm'>
                      <div className='kLZZIH'>
                        <div className='gHFMAm'>Flexible APY:</div>
                        <div className='cSnmJK'>
                          <div className='eOXvol'>
                            <span>4.22%</span>
                          </div>
                          <button
                            className='jrhnwa'
                            width='20px'
                            height='20px'
                            onClick={() => setShowCalculator(true)}
                          >
                            <svg
                              viewBox='0 0 24 24'
                              color='textSubtle'
                              width='20px'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 bXujD'
                            >
                              <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                              <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                              <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                              <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                              <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                              <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                            </svg>
                          </button>
                          <Calculator
                            show={showCalculator}
                            close={() => setShowCalculator(false)}
                          />
                        </div>
                      </div>
                      <div className='kLZZIH'>
                        <div className='gHFMAm'>LOCKED APY:</div>
                        <div className='cSnmJK'>
                          <div className='eOXvol'>
                            <span>Up to 90.36%</span>
                          </div>
                          <button
                            className='jrhnwa'
                            width='20px'
                            height='20px'
                            onClick={() => setShowCalculator(true)}
                          >
                            <svg
                              viewBox='0 0 24 24'
                              color='textSubtle'
                              width='20px'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 bXujD'
                            >
                              <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                              <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                              <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                              <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                              <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                              <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                            </svg>
                          </button>
                          <Calculator
                            show={showCalculator}
                            close={() => setShowCalculator(false)}
                          />
                        </div>
                      </div>
                    </div>
                    {accountDottedAddress === '' ? (
                      <ConnectWallet
                        buttonClass={'bjAFXE'}
                        conectmetaMask={conectmetaMask}
                        accountDottedAddress={accountDottedAddress}
                      />
                    ) : (
                      <TokenPopup />
                    )}
                  </div>
                </div>
                <div className='toggle'>
                  <Collapse>
                    <span className='refresh-btn'>
                      <div className='iHNZWH'>
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
                          Auto
                        </div>
                        <div className='jtuYYv'>
                          <Tooltip title='Rewards are distributed and included into your staking balance automatically. There’s no need to manually compound your rewards.'>
                            <QuestionCircleOutlined className='cIOaaK'></QuestionCircleOutlined>
                          </Tooltip>
                        </div>
                      </div>
                    </span>
                    <Panel showArrow={true} header='Details' key='1'>
                      <div className='cyFSeC'>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz mt-2'
                        >
                          Get CAKE-BNB LP
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
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
                        >
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
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
                        >
                          See Pair Info
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
                      </div>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridPools;
