
export default function DebitCard(){
    return(
        <div className="p-10 border-2 border-red-500 w-[132%]">
            <p className="font-semibold text-gray-600 text-xl mb-4">DEBIT CARD INFO</p>

            <form class="space-y-4">
    <div>
      <label for="username" class="block text-lg font-medium text-gray-700">Card Type</label>
      <input autoFocus type="text" id="username" placeholder="-- Select Card Type --" name="username" class="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm  "></input>
    </div>
    <div>
      <label for="email" class="block text-lg font-medium text-gray-700">Card Number</label>
      <input autoFocus type="email" id="email" name="email" class="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm "></input>
    </div>
    <div>
      <label for="password" class="block text-lg font-medium text-gray-700">Name On Card</label>
      <input autoFocus type="password" id="password" name="password" class="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm "></input>
    </div>
    
    <div className="flex-col">
    <label for="datee" class="block text-lg font-medium text-gray-700">Card Expiry Date</label>
    <div className="flex  w-3/4 justify-between">
    <input autoFocus type="datee" id="password" name="password" placeholder="Month" class="mt-1 block w-3/12  px-3 py-2 border border-black rounded-md "></input>
    <input autoFocus type="datee" id="password" name="password" placeholder="Year" class="mt-1 block w-3/12 px-3 py-2 border border-black rounded-md "></input>
    <input autoFocus type="datee" id="password" name="password" placeholder="CVV" class="mt-1 block w-3/12  px-3 py-2 border border-black rounded-md "></input>
    
    </div>
    

    </div>

    <div>

      <button id="simple-btn" type="submit" class=" px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-sm w-28">Donate</button>

      
    </div>
  </form>
        </div>
    );
}