import QR from "./paymet_images/QR.png";

export default function QR_Portal(){
    return(
        <div className="  flex-col p-[1.27rem] border-2 border-primary-base w-[132%]">
            <p className="text-gray-500 text-3xl">QR CODE</p>

            <div className="flex justify-center items-center w-full  h-[400px]">

                <div className="border-2 border-black w-[200px] p-2 rounded-lg h-auto  " >    
                    <img src={QR} className=" "/>
                    <div ><div className="text-sm text-center ">Scan to donate</div>
                    </div>
                </div>

            </div>
            
        </div>
    );
}