import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '../gridList/GridList.css';
import { Form, Switch, Input, Select, Card, Avatar, Collapse } from 'antd';
import {
  UnorderedListOutlined,
  InsertRowBelowOutlined,
} from '@ant-design/icons';
import Breadcrumb from '../../breadcrumb/Breadcrumb';
import ConnectWallet from '../../modal/connect-wallet/ConnectWallet';
import TokenPopup from '../../modal/token-popup/TokenPopup';
import { Link } from 'react-router-dom';

const GridFarms = ({ conectmetaMask, accountDottedAddress }) => {
  const [input, setInput] = useState(true);
  const { Panel } = Collapse;

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
                  <div className='header'>
                    <div className='left'>
                      <Avatar.Group>
                        <Avatar src='https://joeschmoe.io/api/v1/random' />
                        <Avatar style={{ backgroundColor: '#f56a00' }}>
                          K
                        </Avatar>
                      </Avatar.Group>
                    </div>
                    <div className='right'>
                      <div className='text'>
                        <h2 className='h2'>CAKE-BNB</h2>
                        <div className='btn-area'>
                          <div className='hjuQtz'>
                            <svg
                              viewBox='0 0 24 24'
                              width='18px'
                              color='secondary'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 dodMCi'
                            >
                              <path d='M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z'></path>
                            </svg>
                            Core
                          </div>
                          <div className='dCnuIy'>40X</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='apr'>
                    <div className='evrPPn'>APR:</div>
                    <div
                      className='eOXvol'
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <div className='hXDauz iHNZWH gyWaRu'>
                        30.53%
                        <button className='jHEyFj kdRdfA'>
                          <svg
                            viewBox='0 0 24 24'
                            width='18px'
                            color='text'
                            xmlns='http://www.w3.org/2000/svg'
                            className='sc-eaf7e66-0 mvupn'
                          >
                            <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                            <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                            <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                            <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                            <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                            <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='earn'>
                    <div className='evrPPn'>Earn:</div>
                    <div
                      className='eOXvol'
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <div className='hXDauz iHNZWH gyWaRu'>
                        <b>CAKE + Fees</b>
                      </div>
                    </div>
                  </div>
                  <div className='bEkEmc'>
                    <div className='jtuYYv'>
                      <div className='djXdWD'>CAKE</div>
                      <div className='gHFMAm'>Earned</div>
                    </div>
                    <div className='iZVDFD'>
                      <div className='jNPFeO'>
                        <h2 className='jbrLxW'>0.000</h2>
                      </div>
                      <button
                        className='ktaxfK pancake-button--disabled'
                        disabled=''
                        scale='md'
                      >
                        Harvest
                      </button>
                    </div>
                  </div>
                  <div className='jtuYYv'>
                    <div className='djXdWD'>CAKE-BNB LP</div>
                    <div className='gHFMAm'>Staked</div>
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
                <div className='toggle'>
                  <Collapse>
                    <Panel showArrow={true} header='Details' key='1'>
                      <div className='cyFSeC'>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
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
                  <div className='header'>
                    <div className='left'>
                      <Avatar.Group>
                        <Avatar src='https://joeschmoe.io/api/v1/random' />
                        <Avatar style={{ backgroundColor: '#f56a00' }}>
                          K
                        </Avatar>
                      </Avatar.Group>
                    </div>
                    <div className='right'>
                      <div className='text'>
                        <h2 className='h2'>CAKE-BNB</h2>
                        <div className='btn-area'>
                          <div className='hjuQtz'>
                            <svg
                              viewBox='0 0 24 24'
                              width='18px'
                              color='secondary'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 dodMCi'
                            >
                              <path d='M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z'></path>
                            </svg>
                            Core
                          </div>
                          <div className='dCnuIy'>40X</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='apr'>
                    <div className='evrPPn'>APR:</div>
                    <div
                      className='eOXvol'
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <div className='hXDauz iHNZWH gyWaRu'>
                        30.53%
                        <button className='jHEyFj kdRdfA'>
                          <svg
                            viewBox='0 0 24 24'
                            width='18px'
                            color='text'
                            xmlns='http://www.w3.org/2000/svg'
                            className='sc-eaf7e66-0 mvupn'
                          >
                            <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                            <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                            <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                            <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                            <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                            <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='earn'>
                    <div className='evrPPn'>Earn:</div>
                    <div
                      className='eOXvol'
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <div className='hXDauz iHNZWH gyWaRu'>
                        <b>CAKE + Fees</b>
                      </div>
                    </div>
                  </div>
                  <div className='bEkEmc'>
                    <div className='jtuYYv'>
                      <div className='djXdWD'>CAKE</div>
                      <div className='gHFMAm'>Earned</div>
                    </div>
                    <div className='iZVDFD'>
                      <div className='jNPFeO'>
                        <h2 className='jbrLxW'>0.000</h2>
                      </div>
                      <button
                        className='ktaxfK pancake-button--disabled'
                        disabled=''
                        scale='md'
                      >
                        Harvest
                      </button>
                    </div>
                  </div>
                  <div className='jtuYYv'>
                    <div className='djXdWD'>CAKE-BNB LP</div>
                    <div className='gHFMAm'>Staked</div>
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
                <div className='toggle'>
                  <Collapse>
                    <Panel showArrow={true} header='Details' key='1'>
                      <div className='cyFSeC'>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
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
                  <div className='header'>
                    <div className='left'>
                      <Avatar.Group>
                        <Avatar src='https://joeschmoe.io/api/v1/random' />
                        <Avatar style={{ backgroundColor: '#f56a00' }}>
                          K
                        </Avatar>
                      </Avatar.Group>
                    </div>
                    <div className='right'>
                      <div className='text'>
                        <h2 className='h2'>CAKE-BNB</h2>
                        <div className='btn-area'>
                          <div className='hjuQtz'>
                            <svg
                              viewBox='0 0 24 24'
                              width='18px'
                              color='secondary'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 dodMCi'
                            >
                              <path d='M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z'></path>
                            </svg>
                            Core
                          </div>
                          <div className='dCnuIy'>40X</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='apr'>
                    <div className='evrPPn'>APR:</div>
                    <div
                      className='eOXvol'
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <div className='hXDauz iHNZWH gyWaRu'>
                        30.53%
                        <button className='jHEyFj kdRdfA'>
                          <svg
                            viewBox='0 0 24 24'
                            width='18px'
                            color='text'
                            xmlns='http://www.w3.org/2000/svg'
                            className='sc-eaf7e66-0 mvupn'
                          >
                            <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                            <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                            <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                            <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                            <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                            <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='earn'>
                    <div className='evrPPn'>Earn:</div>
                    <div
                      className='eOXvol'
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <div className='hXDauz iHNZWH gyWaRu'>
                        <b>CAKE + Fees</b>
                      </div>
                    </div>
                  </div>
                  <div className='bEkEmc'>
                    <div className='jtuYYv'>
                      <div className='djXdWD'>CAKE</div>
                      <div className='gHFMAm'>Earned</div>
                    </div>
                    <div className='iZVDFD'>
                      <div className='jNPFeO'>
                        <h2 className='jbrLxW'>0.000</h2>
                      </div>
                      <button
                        className='ktaxfK pancake-button--disabled'
                        disabled=''
                        scale='md'
                      >
                        Harvest
                      </button>
                    </div>
                  </div>
                  <div className='jtuYYv'>
                    <div className='djXdWD'>CAKE-BNB LP</div>
                    <div className='gHFMAm'>Staked</div>
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
                <div className='toggle'>
                  <Collapse>
                    <Panel showArrow={true} header='Details' key='1'>
                      <div className='cyFSeC'>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
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
                  <div className='header'>
                    <div className='left'>
                      <Avatar.Group>
                        <Avatar src='https://joeschmoe.io/api/v1/random' />
                        <Avatar style={{ backgroundColor: '#f56a00' }}>
                          K
                        </Avatar>
                      </Avatar.Group>
                    </div>
                    <div className='right'>
                      <div className='text'>
                        <h2 className='h2'>CAKE-BNB</h2>
                        <div className='btn-area'>
                          <div className='hjuQtz'>
                            <svg
                              viewBox='0 0 24 24'
                              width='18px'
                              color='secondary'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 dodMCi'
                            >
                              <path d='M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z'></path>
                            </svg>
                            Core
                          </div>
                          <div className='dCnuIy'>40X</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='apr'>
                    <div className='evrPPn'>APR:</div>
                    <div
                      className='eOXvol'
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <div className='hXDauz iHNZWH gyWaRu'>
                        30.53%
                        <button className='jHEyFj kdRdfA'>
                          <svg
                            viewBox='0 0 24 24'
                            width='18px'
                            color='text'
                            xmlns='http://www.w3.org/2000/svg'
                            className='sc-eaf7e66-0 mvupn'
                          >
                            <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                            <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                            <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                            <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                            <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                            <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='earn'>
                    <div className='evrPPn'>Earn:</div>
                    <div
                      className='eOXvol'
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <div className='hXDauz iHNZWH gyWaRu'>
                        <b>CAKE + Fees</b>
                      </div>
                    </div>
                  </div>
                  <div className='bEkEmc'>
                    <div className='jtuYYv'>
                      <div className='djXdWD'>CAKE</div>
                      <div className='gHFMAm'>Earned</div>
                    </div>
                    <div className='iZVDFD'>
                      <div className='jNPFeO'>
                        <h2 className='jbrLxW'>0.000</h2>
                      </div>
                      <button
                        className='ktaxfK pancake-button--disabled'
                        disabled=''
                        scale='md'
                      >
                        Harvest
                      </button>
                    </div>
                  </div>
                  <div className='jtuYYv'>
                    <div className='djXdWD'>CAKE-BNB LP</div>
                    <div className='gHFMAm'>Staked</div>
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
                <div className='toggle'>
                  <Collapse>
                    <Panel showArrow={true} header='Details' key='1'>
                      <div className='cyFSeC'>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
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
                  <div className='header'>
                    <div className='left'>
                      <Avatar.Group>
                        <Avatar src='https://joeschmoe.io/api/v1/random' />
                        <Avatar style={{ backgroundColor: '#f56a00' }}>
                          K
                        </Avatar>
                      </Avatar.Group>
                    </div>
                    <div className='right'>
                      <div className='text'>
                        <h2 className='h2'>CAKE-BNB</h2>
                        <div className='btn-area'>
                          <div className='hjuQtz'>
                            <svg
                              viewBox='0 0 24 24'
                              width='18px'
                              color='secondary'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 dodMCi'
                            >
                              <path d='M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z'></path>
                            </svg>
                            Core
                          </div>
                          <div className='dCnuIy'>40X</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='apr'>
                    <div className='evrPPn'>APR:</div>
                    <div
                      className='eOXvol'
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <div className='hXDauz iHNZWH gyWaRu'>
                        30.53%
                        <button className='jHEyFj kdRdfA'>
                          <svg
                            viewBox='0 0 24 24'
                            width='18px'
                            color='text'
                            xmlns='http://www.w3.org/2000/svg'
                            className='sc-eaf7e66-0 mvupn'
                          >
                            <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                            <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                            <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                            <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                            <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                            <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='earn'>
                    <div className='evrPPn'>Earn:</div>
                    <div
                      className='eOXvol'
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <div className='hXDauz iHNZWH gyWaRu'>
                        <b>CAKE + Fees</b>
                      </div>
                    </div>
                  </div>
                  <div className='bEkEmc'>
                    <div className='jtuYYv'>
                      <div className='djXdWD'>CAKE</div>
                      <div className='gHFMAm'>Earned</div>
                    </div>
                    <div className='iZVDFD'>
                      <div className='jNPFeO'>
                        <h2 className='jbrLxW'>0.000</h2>
                      </div>
                      <button
                        className='ktaxfK pancake-button--disabled'
                        disabled=''
                        scale='md'
                      >
                        Harvest
                      </button>
                    </div>
                  </div>
                  <div className='jtuYYv'>
                    <div className='djXdWD'>CAKE-BNB LP</div>
                    <div className='gHFMAm'>Staked</div>
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
                <div className='toggle'>
                  <Collapse>
                    <Panel showArrow={true} header='Details' key='1'>
                      <div className='cyFSeC'>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
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
                  <div className='header'>
                    <div className='left'>
                      <Avatar.Group>
                        <Avatar src='https://joeschmoe.io/api/v1/random' />
                        <Avatar style={{ backgroundColor: '#f56a00' }}>
                          K
                        </Avatar>
                      </Avatar.Group>
                    </div>
                    <div className='right'>
                      <div className='text'>
                        <h2 className='h2'>CAKE-BNB</h2>
                        <div className='btn-area'>
                          <div className='hjuQtz'>
                            <svg
                              viewBox='0 0 24 24'
                              width='18px'
                              color='secondary'
                              xmlns='http://www.w3.org/2000/svg'
                              className='sc-eaf7e66-0 dodMCi'
                            >
                              <path d='M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z'></path>
                            </svg>
                            Core
                          </div>
                          <div className='dCnuIy'>40X</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='apr'>
                    <div className='evrPPn'>APR:</div>
                    <div
                      className='eOXvol'
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <div className='hXDauz iHNZWH gyWaRu'>
                        30.53%
                        <button className='jHEyFj kdRdfA'>
                          <svg
                            viewBox='0 0 24 24'
                            width='18px'
                            color='text'
                            xmlns='http://www.w3.org/2000/svg'
                            className='sc-eaf7e66-0 mvupn'
                          >
                            <path d='M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z'></path>
                            <path d='M11.25 7.72H6.25V9.22H11.25V7.72Z'></path>
                            <path d='M18 15.75H13V17.25H18V15.75Z'></path>
                            <path d='M18 13.25H13V14.75H18V13.25Z'></path>
                            <path d='M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z'></path>
                            <path d='M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z'></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='earn'>
                    <div className='evrPPn'>Earn:</div>
                    <div
                      className='eOXvol'
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <div className='hXDauz iHNZWH gyWaRu'>
                        <b>CAKE + Fees</b>
                      </div>
                    </div>
                  </div>
                  <div className='bEkEmc'>
                    <div className='jtuYYv'>
                      <div className='djXdWD'>CAKE</div>
                      <div className='gHFMAm'>Earned</div>
                    </div>
                    <div className='iZVDFD'>
                      <div className='jNPFeO'>
                        <h2 className='jbrLxW'>0.000</h2>
                      </div>
                      <button
                        className='ktaxfK pancake-button--disabled'
                        disabled=''
                        scale='md'
                      >
                        Harvest
                      </button>
                    </div>
                  </div>
                  <div className='jtuYYv'>
                    <div className='djXdWD'>CAKE-BNB LP</div>
                    <div className='gHFMAm'>Staked</div>
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
                <div className='toggle'>
                  <Collapse>
                    <Panel showArrow={true} header='Details' key='1'>
                      <div className='cyFSeC'>
                        <div className='jLSRWf'>
                          <div className='evrPPn'>Total Liquidity:</div>
                          <div className='evrPPn'>$123,713,634</div>
                        </div>
                        <a
                          target='_blank'
                          rel='noreferrer noopener'
                          href='#'
                          className='jUAwz'
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

export default GridFarms;
