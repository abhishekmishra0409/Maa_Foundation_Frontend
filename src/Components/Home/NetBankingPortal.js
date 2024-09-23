export default function NetBankingPortal() {
    return(
        <div className="p-10 border-2 border-red-500 h-full w-[132%]">
            <p className="font-semibold text-gray-600 text-xl mb-4">NET BANKING</p>

            <form class="space-y-4">
            <div>
              <label for="bank" class="block text-lg font-medium text-gray-700">Bank Names</label>
              <select id="bank" name="bank" class="mt-1 block w-full px-3 py-2 border border-black rounded-md shadow-sm">
                <option value="" disabled selected>-- Select Your Bank --</option>
                <option value="bank1">Bank 1</option>
                <option value="bank2">Bank 2</option>
                <option value="bank3">Bank 3</option>
                <option value="bank4">Bank 4</option>
              </select>
            </div> 

               <p><span className="text-red-500 font-semibold">Note: </span>In the next step you will be redirected to your bank's website to verify yourself.</p> 


            <div>
                <button id="simple-btn" type="submit" class=" px-4 py-2 bg-red-500 text-white font-semibold rounded-md shadow-sm w-28">Donate</button>
            </div>
            </form>
        </div>
    );
  
}
