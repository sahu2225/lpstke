import { LinkOutlined, QuestionCircleOutlined, SelectOutlined } from "@ant-design/icons";
import { Collapse, Segmented, Tooltip } from "antd";
import React from "react";
import { Modal } from "react-bootstrap";
import '../calculator/Calculator.css';



function Calculator(props) {
    const { Panel } = Collapse;

  return (
    <div>
        <Modal
        show={props.show}
        cancel={props.close}
        
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
         className="ant-modal-body claculator"
      >
        <Modal.Header closeButton onClick={props.close}>
          <Modal.Title id="contained-modal-title-vcenter"  className="h6">ROI Calculator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div  className="container">
                <div  className="row">
                    <div  className="col-md-12">
                        <Segmented size="large" block options={['Flexible', 'Locked']} />
                    </div>
                     
                    <div  className="gKXQFP mt-4">
                        <div  className="gecMFa">CAKE staked</div>
                        <div  className="gKCsRO">
                            <div  className="bqZTIl">
                                <div  className="hXDauz">
                                    <div  className="iHNZWH">
                                        <input pattern="^[0-9]*[.,]?[0-9]{0,18}$" inputmode="decimal" min="0" placeholder="0.00"   className="jiphbB" value=""/>
                                        <div  className="dSWWBY">USD</div>
                                    </div>
                                    <div  className="hXGvsP">298.4665848527 CAKE</div>
                                </div>
                                <div  className="iHNZWH">
                                    <button  className="kdKXDK">
                                        <svg viewBox="0 0 24 25" color="textSubtle" width="20px" xmlns="http://www.w3.org/2000/svg"  className="bXujD"><path d="M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div  className="jLSRWf">
                            <button  className="jkdyZS">$100</button>
                            <button  className="jkdyZS">$1000</button>
                            <button  className="hPTSFX pancake-button--disabled" disabled="">MY BALANCE</button>
                            <span>
                            <Tooltip title="“My Balance” here includes both CAKE in your wallet, and CAKE already staked in this pool.">
                                <QuestionCircleOutlined />
                            </Tooltip>
                            </span>
                        </div>
                    </div>
                    

                    <div className="col-md-12">
                        <div className="djyBsJ">Staked for</div>
                        <Segmented block options={['1D', '7D', '30D', '1Y', '5Y']} />
                    </div>

                    <div className="kaPgHC"><svg viewBox="0 0 24 24" width="24px" height="24px" color="textSubtle" xmlns="http://www.w3.org/2000/svg" className="bXujD"><path d="M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z"></path></svg></div>

                    <div className="jtuYYv">
                        <div className="cGAIQt">                        
                            <div className="eCUJpW">
                                <div className="gecMFa">ROI at current rates</div>
                                <div className="jLSRWf">
                                    <div className="dRlwZQ">
                                        <div className="hsQQKI">$</div>
                                        <div className="bUizoi">0.23</div>
                                    </div>
                                    <button className="kdRdfA">
                                        <svg viewBox="0 0 19 19" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" className="sc-eaf7e66-0 etGTJB"><path d="M0 15.46V18.5C0 18.78 0.22 19 0.5 19H3.54C3.67 19 3.8 18.95 3.89 18.85L14.81 7.94L11.06 4.19L0.15 15.1C0.0500001 15.2 0 15.32 0 15.46ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z"></path></svg>
                                    </button>
                                </div>
                                <div className="cDLVOn">~ 0.035 CAKE (0.01%)</div>
                            </div>
                        </div>
                    </div>

                      

   
                </div>
            </div>
        </Modal.Body>
        <Collapse>
                <Panel header="Details" block centered key="1">
                <div className="jDUsUp">
                    <div className="gLjUYg">APR (incl. LP rewards)</div>
                    <div className="hRerJU">29.73%</div>
                    <div className="gLjUYg">Base APR (CAKE yield only)</div>
                    <div className="hRerJU">28.07%</div>
                    <div className="gLjUYg">APY (1x daily compound)</div>
                    <div className="hRerJU">32.40%</div>
                    <div className="gLjUYg">Farm Multiplier</div>
                    <div className="bdkSFf">
                        <div className="kmkEIm">40X</div>
                        <Tooltip title="The Multiplier represents the proportion of CAKE rewards each farm receives, as a proportion of the CAKE produced each block.
                                For example, if a 1x farm received 1 CAKE per block, a 40x farm would receive 40 CAKE per block.
                                This amount is already included in all APR calculations for the farm.">
                            <span><QuestionCircleOutlined></QuestionCircleOutlined></span>
                        </Tooltip>
                    </div>
                </div>

                <ul className="eSgWqW">
                    <li>
                        <div className="eOCTN">Calculated based on current rates.</div>
                    </li>
                    <li>
                        <div className="eOCTN">LP rewards: 0.17% trading fees, distributed proportionally among LP token holders.</div>
                    </li>
                    <li>
                        <div className="eOCTN">All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.</div>
                    </li>
                </ul>
                <div className="jcbmfz">
                    <a target="_blank" rel="noreferrer noopener" href="#" className="ckoRxN"> Get CAKE-BNB &nbsp;
                    <SelectOutlined />
                </a></div>
                </Panel>
            </Collapse> 

      </Modal>
    </div>
  )
}

export default Calculator