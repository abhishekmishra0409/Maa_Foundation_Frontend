import googlepay from "./paymet_images/googlepay.png";
import phonepe from "./paymet_images/phonepe.png";
import paytm from "./paymet_images/paytm.png";


export default function UPI_Portal() {
    return(
        <div className="p-10 border-2 border-red-500 w-[132%]">
            <p className="font-semibold text-gray-600 text-xl mb-4">Payment via UPI</p>

            <form class="space-y-4">
                <div>
                  <label for="username" class="block text-lg font-medium text-gray-700">Enter Your VPA</label>
                  <input type="text" id="username" placeholder="YourName@BankName" name="username" class="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm  "></input>
                </div>  


               <p><span className="text-red-500  font-semibold">Note: </span>In the next step you will be redirected to your bank's website to verify yourself.</p> 

               <div className="flex justify-center">
                or
               </div>


                <div className="border-2 border-black p-3 rounded-lg lg:w-4/6 md:w-full sm:w-full flex flex-col justify-between h-[150px]">

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="radio" name="paymentMethod" value="phonepe" className="mr-2" />
                            <img src={phonepe} className="mr-2" />
                            <p>Phone Pe</p>
                        </div>
                    </div>
                                
                    <div className="flex items-center justify-between">
                        <div className="flex items-center  ">
                            <input autoFocus type="radio" name="paymentMethod" value="googlepay" className="mr-2" />
                            <img src={googlepay} className="mr-2" />
                            <p>Google Pay</p>
                        </div>
                    </div>
                                
                    <div className="flex items-center justify-between">
                        <div className="flex items-center  ">
                            <input autoFocus type="radio" name="paymentMethod" value="paytm" className="mr-2" />
                            <img src={paytm} className="mr-2" />
                            <p>Paytm</p>
                        </div>
                    </div>
                </div>
                                


            <div>
                <button id="simple-btn" type="submit" class=" px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-sm w-28">Donate</button>
            </div>
            </form>
        </div>
    );
  
}
