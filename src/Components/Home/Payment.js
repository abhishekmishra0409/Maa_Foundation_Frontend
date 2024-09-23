import { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import CreditCardp from './paymet_images/1.png';
import DebitCardp from './paymet_images/2.png';
import NetBankingp from './paymet_images/3.png';
import QRp from './paymet_images/4.png';
import UPIp from './paymet_images/Upi_logo.png';

import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NetBanking from "./NetBankingPortal";
import UPI from "./UPI_Portal";
import QR from "./QR_Portal";

function CreditCardComponent() {
  return <div >Credit Card Payment Form</div>;
}

function DebitCardComponent() {
  return <div >Debit Card Payment Form</div>;
}

function NetBankingComponent() {
  return <div>Net Banking Payment Form</div>;
}

function UPIComponent() {
  return <div>UPI Payment Form</div>;
}

function QRComponent() {
  return <div>QR Code Payment Form</div>;
}

export default function Payment() {


  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 786);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const selected = {
    borderStyle: "solid",
    borderColor: "red",
    borderRightColor: isSmallScreen ? "red" : "white",
    borderWidth: "2px 4px 2px 6px",
    padding:"10px "
  };

  
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 786);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

const notselected = {
  borderStyle: "none",
  }


    const [box1, setbox1] = useState(notselected);
    const [box2, setbox2] = useState(notselected);
    const [box3, setbox3] = useState(notselected);
    const [box4, setbox4] = useState(notselected);
    const [box5, setbox5] = useState(notselected);




  const renderComponent = () => {

    switch (selectedMethod) {
      case 'creditcard':
        return <CreditCard />;
      case 'debitcard':
        return <DebitCard />;
      case 'netbanking':
        return <NetBanking />;
      case 'upi':
        return <UPI />;
      case 'qr':
        return <QR />;
      default:
        return <div className='border-2 border-red-500 h-full flex justify-center items-center lg:text-xl md:text-md'>Please select a payment method</div>;
    }
  };

  return (


    <div className='lg:mx-[120px] md:m-[60px] sm:m-[30px] overflow-hidden '>
      <h1 className="font-sans flex  font-semibold text-red-500 md:text-4xl  lg:text-4xl sm:text-2xl mt-2 mb-5 pb-2">
        SELECT PAYMENT METHOD
      </h1>

      <div className="border-2 border-black rounded-md font-semibold flex justify-between p-2  mb-7">
        <p>Amount : 25000/-</p>
        <p>Transaction : 12896432</p>
      </div>


      <div className="lg:flex md:flex sm:flex-none xs:flex-none overflow-hidden ">

        <div className="font-semibold lg:text-2xl md:text-xl sm:text-md lg:h-[26rem] md:h-[20rem]     md:flex md:flex-col md:justify-between md:w-1/3 lg:flex lg:flex-col lg:justify-between lg:w-1/3  sm:flex sm:w-full sm:justify-around  xs:flex xs:justify-around">



          <button 
           style={box1}
           className="  lg:flex md:flex  lg:items-center md:items-center h-[50px] w-[100.75%] z-10 " onClick={() => {setSelectedMethod('creditcard') ;
            setbox1(selected);
                    setbox2(notselected);
                    setbox3(notselected);
                    setbox4(notselected);
                    setbox5(notselected);
           }}>


           <div class="w-full md:w-1/3 xs:h-[20px] sm:h-[20px] md:h-[30px] lg:h-[45px]"  ><img src={CreditCardp} className=" h-full object-contain" /></div>
           <p>CREDIT CARD</p>



          </button>




          <button
          style={box2}
           className="lg:flex md:flex lg:items-center md:items-center h-[50px] w-[100.75%] z-10 " onClick={() => {setSelectedMethod('debitcard')
                  setbox1(notselected);
                    setbox2(selected);
                    setbox3(notselected);
                    setbox4(notselected);
                    setbox5(notselected);
           
           }}>
            <div class="w-full md:w-1/3 xs:h-[20px] sm:h-[20px] md:h-[30px] lg:h-[45px]"  ><img src={DebitCardp} className=" h-full object-contain " /></div>
            <p>DEBIT CARD</p>
          </button>

          <button 
          style={box3}
           className="lg:flex md:flex lg:items-center md:items-center h-[50px] w-[100.75%] z-10 " onClick={() => {setSelectedMethod('netbanking')
            setbox1(notselected);
                    setbox2(notselected);
                    setbox3(selected);
                    setbox4(notselected);
                    setbox5(notselected);
           }}>
            <div class="flex justify-start w-full md:w-1/3 xs:h-[20px] sm:h-[20px] md:h-[30px] lg:h-[45px]"  ><img src={NetBankingp} className=" h-full object-contain  " /></div>
            <p>NET BANKING</p>
          </button>

          <button
          style={box4}
           className="lg:flex md:flex lg:items-center md:items-center h-[50px] w-[100.75%] z-10  " onClick={() => {setSelectedMethod('upi')
            setbox1(notselected);
                    setbox2(notselected);
                    setbox3(notselected);
                    setbox4(selected);
                    setbox5(notselected);
           }}>
            <div class=" justify-start w-full lg:w-1/3 md:w-1/3 xs:h-[20px] sm:h-[20px] md:h-[30px] lg:h-[40px]" ><img src={UPIp} className=" h-full w-1/2 object-contain " /></div>
            <p>UPI</p>
          </button>

          <button
          style={box5}
           className=" lg:flex md:flex lg:items-center md:items-center h-[50px] w-[100.75%] z-10 " onClick={() =>{ setSelectedMethod('qr')
            setbox1(notselected);
                    setbox2(notselected);
                    setbox3(notselected);
                    setbox4(notselected);
                    setbox5(selected);
           }}>
            <div class="w-full md:w-1/3 xs:h-[20px] sm:h-[20px] md:h-[30px] lg:h-[45px]"  ><img src={QRp} className=" h-full object-contain " /></div>
            <p>QR CODE</p>
          </button>
        </div>

        <div id="container" className=" lg:w-1/2 md:w-1/2 sm:w-full lg:p-0 md:p-0 xs:px-5">
          {renderComponent()}
        </div>

      </div>

    </div>
  );
}
